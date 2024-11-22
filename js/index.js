let contenedor = document.getElementById('contenedor');
let animales = document.querySelectorAll(".animal");
let puntosJugador1 = document.getElementById("contaor1");
let puntosJugador2= document.getElementById("contador2");
let reinicio = document.getElementById('reiniciar');
let iconos = document.querySelectorAll('.fa-solid');
let contador = 0;
let primeraCarta;
let comentario = document.getElementById('comentario');
const keyframeCorrecto = [
    {borderRadius: '15px'},
    {backgroundColor: '#ccc', offset:0},
    {backgroundColor: 'green', offset:0.1},
    {backgroundColor: '#ccc'},
    {backgroundColor: 'green'},
    {borderRadius: '15px'}
];
const keyframeIncorrecto = [
    {borderRadius: '15px'},
    {backgroundColor: '#ccc', offset:0},
    {backgroundColor: 'red', offset:0.1},
    {backgroundColor: '#ccc'},
    {backgroundColor: 'red'},
    {borderRadius: '15px'}
]
contenedor.addEventListener('click', (e)=>{
    // aqui se comprueba que se selecciona la casilla
    if(e.target.classList.contains('animal') && contador < 2){
        // Comprobamos que no se hayan seleccionado mas de dos casillas, si no es asi hacemos lo siguiente:
        
        if(contador < 1){
            // añadir animacion al icono para que aparezca y desaparezca al pulsar sobre el (hacer en css una clase)
            // e.target.classList.add('');
            e.target.classList.add('activa');
            e.target.classList.add('tocada');
            e.target.classList.toggle('invisible');
            contador++; 
            primeraCarta = e.target.firstElementChild.classList[2];
        }else{
            // Si se ha seleccionado una segunda casilla vamos a hacer que se quiten despues de cierto tiempo, 
            // siempre y cuando contengan las casillas la clase activa
            
            contador++; 
            e.target.classList.toggle('invisible'); 
            e.target.classList.add('activa');
            let segundaCarta = e.target.firstElementChild.classList[2];
        
        if(primeraCarta == segundaCarta){
        
            for(let k = 0; k < animales.length; k++){

                if(animales[k].firstElementChild.classList[2] == primeraCarta){
                    
                    animales[k].classList.add('completa');
                    animales[k].classList.remove('activa');
                    animales[k].classList.remove('tocada');
                    animales[k].animate(keyframeCorrecto, 3000);
                    animales[k].classList.add('correcta');
                    
                }
            }
            e.target.classList.add('completa');
            e.target.classList.remove('activa');
            e.target.animate(keyframeCorrecto, 3000);
            e.target.classList.add('correcta');
            contador = 0;
        }
        
        if(!e.target.classList.contains('completa')){
            for(let w = 0; w < animales.length; w++){
                if(animales[w].classList.contains('tocada')){
                    animales[w].animate(keyframeIncorrecto, 3000);
                    e.target.animate(keyframeIncorrecto, 3000);
                    let tiempo = setInterval(()=>{
                        animales[w].classList.add('invisible');
                        animales[w].classList.remove('activa');
                        animales[w].classList.remove('tocada');
                        e.target.classList.add('invisible');
                        e.target.classList.remove('activa');
                        clearInterval(tiempo);
                        contador = 0;
                        },3000);
                    }
                    
                }
            }            
        }
        partida();
    }
})

reinicio.addEventListener('click', (e)=>{
    render()
})

window.addEventListener('keypress', (e)=>{
    if(e.key == 'r'){
        render()
    }
})
function desordenar(animales){
    for(let i = animales.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [animales[i], animales[j]] = [animales[j], animales[i]]
    }
    
}

function render(){
    let numeroAleatorio = Math.floor(Math.random() * 10);
    if(numeroAleatorio > 5){
        comentario.innerHTML = `Empieza jugando el Jugador 1`;
    }else{
        comentario.innerHTML = `Empieza jugando el jugador 2`;
    }
    let animal = [];
    
    for(let i = 0; i < animales.length; i++){
        animal.push(animales[i].firstElementChild);
    }
    desordenar(animal);

    for(let i = 0; i < animales.length; i++){
        animales[i].appendChild(animal[i]);
        animales[i].classList.add('invisible');
    }
}

render();

function partida(){
    let completo = true;
    for(let i = 0; i < animales.length; i++){
        if(!animales[i].classList.contains('completa')){
            completo = false
        }
    }
    if(completo){
        contenedor.classList.add('ganador')
        document.createElement('p').append('body').innerHTML = 'GANDOR PUTO'
    }
    
}

// partida(puntosJugador1, puntosJugador1)