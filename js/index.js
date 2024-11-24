const contenedor = document.getElementById('contenedor');
const animales = document.querySelectorAll(".animal");
const puntosJugador1 = document.getElementById("contador1");
const puntosJugador2= document.getElementById("contador2");
const reinicio = document.getElementById('reiniciar');
const comentario = document.getElementById('comentario');
const h2 = document.getElementById('ganador');

let contador = 0;
let primeraCarta;
let puntuacionJugador1 = 0;
let puntuacionJugador2 = 0;
let ronda = 0;
let turnoJugador1 = true;

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

            e.target.classList.add('activa');
            e.target.classList.add('tocada');
            e.target.classList.remove('invisible');
            contador++; 
            primeraCarta = e.target.firstElementChild.classList[2];
            
        }else{
            // Si se ha seleccionado una segunda casilla vamos a hacer que se quiten despues de cierto tiempo, 
            // siempre y cuando contengan las casillas la clase activa
            if(!e.target.classList.contains('activa')){

                e.target.classList.remove('invisible'); 
                e.target.classList.add('activa');
                let segundaCarta = e.target.firstElementChild.classList[2];
                contador++; 
                
                if(primeraCarta == segundaCarta ){
                    
                    for(let k = 0; k < animales.length; k++){
                        
                        if(animales[k].firstElementChild.classList[2] == primeraCarta && !e.target.classList.contains('completa')){
                            
                            animales[k].animate(keyframeCorrecto, 3000);
                            e.target.animate(keyframeCorrecto, 3000);
                            console.log(contador);
                            
                            let tiempo = setInterval(()=>{
                                animales[k].classList.add('completa');
                                animales[k].classList.remove('activa');
                                animales[k].classList.remove('tocada');
                                animales[k].classList.add('correcta');
                                e.target.classList.add('completa');
                                e.target.classList.remove('activa');
                                e.target.classList.add('correcta');
                                contador = 0;
                                clearInterval(tiempo)
                                partida();
                            },3000);
                            
                            
                        }
                    }
    
                    jugadorTurno(true);
                }else if(!e.target.classList.contains('completa') ){
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
                                contador = 0;
                                jugadorTurno(false);
                                clearInterval(tiempo);
                            },3000);
                        }
                        
                    }
                }            
            }
            
        }
    }
})

reinicio.addEventListener('click', (e)=>{
    render()
    partida();
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
        turnoJugador1 = true;
        comentario.innerHTML = `Empieza jugando el Jugador 1`;
    }else{
        turnoJugador1 = false;
        comentario.innerHTML = `Empieza jugando el Jugador 2`;
    }
    let animal = [];
    
    for(let i = 0; i < animales.length; i++){
        animal.push(animales[i].firstElementChild);
    }
    desordenar(animal);

    for(let i = 0; i < animales.length; i++){
        animales[i].appendChild(animal[i]);
        animales[i].classList.add('invisible');
        animales[i].classList.remove('correcta');
        animales[i].classList.remove('tocada');
        animales[i].classList.remove('activa');
        animales[i].classList.remove('completa');
    }

    puntuacionJugador1 = 0;
    puntuacionJugador2 = 0;
    puntosJugador1.innerHTML = puntuacionJugador1;
    puntosJugador2.innerHTML = puntuacionJugador2;
    h2.innerHTML = ' ';
}

function partida(){
    let completo = true;
    
    for(let i = 0; i < animales.length; i++){
        if(!animales[i].classList.contains('completa')){
            completo = false
        }
    }

    if(completo){
        
        if(puntuacionJugador1 > puntuacionJugador2){
            h2.innerHTML = 'HA GANADO EL JUGADOR 1'
        }else{
            h2.innerHTML = 'HA GANADO EL JUGADOR 2'
        }
        
    }
    
}

function jugadorTurno(acierto){
    if(acierto){
        
        if(turnoJugador1){
            puntuacionJugador1 += 1;
            ronda += 1;
            puntosJugador1.innerHTML = puntuacionJugador1;
        }else{
            puntuacionJugador2 += 1;
            ronda += 1;
            puntosJugador2.innerHTML = puntuacionJugador2;
        }
    }else{
        
        if(turnoJugador1){
            turnoJugador1 = false;
            comentario.innerHTML = 'Es el turno del jugador 2'
        }else{
            turnoJugador1 = true;
            comentario.innerHTML = 'Es el turno del jugador 1'
        }
    }
}
render();