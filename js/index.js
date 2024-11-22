let contenedor = document.getElementById('contenedor');
let animales = document.querySelectorAll(".animal");
let puntosJugador1 = document.getElementById("contaor1");
let puntosJugador2= document.getElementById("contador2");
let reinicio = document.getElementById('reiniciar');
let iconos = document.querySelectorAll('.fa-solid');
let contador = 0;
let primeraCarta;
let comentario = document.getElementById('comentario');

contenedor.addEventListener('click', (e)=>{
    // aqui se comprueba que se selecciona la casilla
    if(e.target.classList.contains('animal') && contador < 2){
        // Comprobamos que no se hayan seleccionado mas de dos casillas, si no es asi hacemos lo siguiente:
        
        if(contador < 1){
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

                }
            }
            e.target.classList.add('completa');
            e.target.classList.remove('activa');
            contador = 0;
            partida();
        }
        
        if(!e.target.classList.contains('completa')){
            for(let w = 0; w < animales.length; w++){
                    if(animales[w].classList.contains('tocada')){
                        let tiempo = setInterval(()=>{
                            animales[w].classList.add('invisible');
                            animales[w].classList.remove('activa');
                            animales[w].classList.remove('tocada');
                            clearInterval(tiempo);
                            e.target.classList.add('invisible');
                            e.target.classList.remove('activa');
                            contador = 0;
                        },1000);
                    }

                }
            }            
        }
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
    for(let i = 0; i < animales.length; i++){
        
    }
    return;
}

// partida(puntosJugador1, puntosJugador1)