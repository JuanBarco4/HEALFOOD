export let carbohidratos = document.createElement("div");
carbohidratos.innerHTML = 

`<div class="contenedor">
<h2 class="titulo">CARBOHIDRATOS</h2>

<div class="video-container">
<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/uHMARGqe--c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div id="alimentos" class="alimentos"></div>`


    export function crearCar (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_car = document.querySelector("#root");
    
         div_car.appendChild(carbohidratos);
         // 
 
    
    };