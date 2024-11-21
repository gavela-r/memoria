let contenedor = document.getElementById('contenedor');
let animales = document.querySelectorAll(".animal");
let puntosJugador1 = document.getElementById("contaor1");
let puntosJugador2= document.getElementById("contador2");
let reinicio = document.getElementById('reiniciar');
let iconos = document.querySelectorAll('.fa-solid');

let contador = 0;

contenedor.addEventListener('click', (e)=>{
    // aqui se comprueba que se selecciona la casilla
    if(e.target.classList.contains('animal')){
        // Comprobamos que no se hayan seleccionado mas de dos casillas, si no es asi hacemos lo siguiente:
        if(contador < 1){
            e.target.classList.add('activa');
            e.target.classList.add('tocada');
            e.target.classList.toggle('invisible');
            contador++; 
        }else{
        // Si se ha seleccionado una segunda casilla vamos a hacer que se quiten despues de cierto tiempo, 
        // siempre y cuando contengan las casillas la clase activa
            
            e.target.classList.remove('invisible'); 
             e.target.classList.add('activa');
             let t= setInterval(()=>{
                                    
                                    clearInterval(t);
                                },1000);
        
                for(let k = 0; k < iconos.length; k++){
                    //alert(e.target.firstElementChild.classList[2]);
                    // console.log(e);
                    // alert(iconos[k].classList[2]);
                     //alert(animales[k].classList);
                    if(e.target.firstElementChild.classList[2] == iconos[k].classList[2] && animales[k].classList.contains('tocada')){
                        alert("Somos iguales");
                        console.log("somos iguales");
                        e.target.classList.add('completa');
                        animales[k].classList.add('completa');
                           e.target.classList.remove('activa');
                        animales[k].classList.remove('activa');
                        animales[k].classList.remove('tocada');
                        contador=0;
                        break;
                    }
                }
                if(!e.target.classList.contains('completa')){

/*
                        for(let w = 0; w < animales.length; w++){
                            // console.log(animales);

                            if(animales[w].classList.contains('tocada')){
                                let tiempo = setInterval(()=>{
                                    animales[w].classList.add('invisible');
                                    animales[w].classList.remove('activa');
                                    animales[w].classList.remove('tocada');
                                    clearInterval(tiempo);
                                },1000);
                                contador = 0;
                            }

                        }
                        e.target.classList.add('invisible');
                        e.target.classList.remove('activa');
  */              }            
                       

           

           
        }

       
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