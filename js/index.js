let contenedor = document.getElementById('contenedor');
let animales = document.querySelectorAll(".animal");
let puntosJugador1 = document.getElementById("contaor1");
let puntosJugador2= document.getElementById("contador2");
let reinicio = document.getElementById('reiniciar');
let contador = 0;

contenedor.addEventListener('click', (e)=>{
    // aqui se comprueba que se selecciona la casilla
    if(e.target.classList.contains('animal')){
        // Comprobamos que no se hayan seleccionado mas de dos casillas, si no es asi hacemos lo siguiente:
        if(contador < 1){
            e.target.classList.add('activa');
            e.target.classList.toggle('invisible');
            contador++;  
        }else{
        // Si se ha seleccionado una segunda casilla vamos a hacer que se quiten despues de cierto tiempo, 
        // siempre y cuando contengan las casillas la clase activa
            e.target.classList.add('activa');
            e.target.classList.toggle('invisible');

            for(let i = 0; i < animales.length; i++){
                
                if(animales[i].classList.contains('activa')){
                    // se quitan los animales despues de un segundo y se resetea el contador
                    let tiempo = setInterval(()=>{
                        animales[i].classList.remove('activa')
                        animales[i].classList.add('invisible')
                        clearInterval(tiempo);
                    },1000)
                    contador = 0;
                    
                    // Prueba medio fallida --->
                    // if(e.target.firstElementChild.classList[2] == animales[i].firstElementChild.classList[2]){
                    //     animales[i].classList.remove('activa')
                    // }else{
                    // } <----
                }
                
            }
        }
    console.log(e.target.firstElementChild.classList[2]);        
    }
    
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