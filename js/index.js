let contenedor = document.getElementById('contenedor');
let animales = document.querySelectorAll(".animal");
let puntosJugador1 = document.getElementById("contaor1");
let puntosJugador2= document.getElementById("contador2");
let reinicio = document.getElementById('reiniciar');
let contador = 0;

contenedor.addEventListener('click', (e)=>{
    if(e.target.classList.contains('animal')){
        // aqui se comprueba que se selecciona la casilla
        e.target.classList.add('activa');
        // estoy pensando en hacer un bucle para recorrer todas las casillas con el if dentro de el algo asi:
        for(let i = 0; i < animales.length; i++){
            if(e.target.classList.contains('activa')){
                contador++;    
            }
            if(contador == 2){
                e.target.classList.remove('invisible');
            }
            if(e.target.classList.contains('animal') != e.target.classList.contains('animal')){
                e.target.classList.remove('activa')
            }
        }
        
        e.target.classList.remove('invisible')
    }
    // okey pues ya mañana le damos mas
    
    // if(e.target.classList.contains('perro'))??¿?? y asi con cada una, es un poco suicidio no?
    //si 
    //me esta dando error al subirlo 
    //sabes que le pasa?
    // que igual hay algo diferente o nose ahora copia los archivos a otra carpeta, borralos y haz git pull y despes pega lo que hemos hecho porque alguno por algo da fallo xD
    //vaLE JAJAJA
})

reinicio.addEventListener('click', (e)=>{
    e.preventDefault();
    let animal = [];
    
    for(let i = 0; i < animales.length; i++){
        animal.push(animales[i].firstElementChild);
    }
    desordenar(animal);

   
    
})

function desordenar(animales){
    for(let i = animales.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [animales[i], animales[j]] = [animales[j], animales[i]]
    }
    
}

// function partida(jugador1, jugador2){
//     // if(e.target.className == 'animal'){
//     //     // aqui se comprueba que se selecciona la casilla
              
//     // }
// }

// partida(puntosJugador1, puntosJugador1)