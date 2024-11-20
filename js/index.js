let contenedor = document.getElementById('contenedor');
let animales = document.querySelectorAll(".animal");
let jugador1 = document.getElementById("contaor1");
let jugador2 = document.getElementById("contador2");
contenedor.addEventListener('click', (e)=>{
    e.preventDefault();
    let animal = [];
    for(let i = 0; i < animales.length; i++){
        animal.push(animales[i].firstElementChild);
    }
    
    animal = desordenar(animal) 
    console.log(animal);
// ahora toca guardar tu xD, si quieres en casa lo miro y dejo hecho el random que creo que no quedo del todo
   //pero si lo esta haciendo aleatoriamente pero vale si ves que esta mal adelante 
})


function desordenar(animales){
    animales.sort(function(a,b) {return Math.floor(Math.random() - 0.5)});
}