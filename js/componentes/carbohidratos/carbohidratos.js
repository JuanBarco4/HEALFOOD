export let carbohidratos = document.createElement("div");
carbohidratos.innerHTML = 

`<div class="contenedor">
<h2 class="titulo">CARBOHIDRATOS</h2>

<div class="video-container">
    <video src=""></video>
</div>

<div id="alimentos" class="alimentos"></div>`


    export function crearCar (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_car = document.querySelector("#root");
    
         div_car.appendChild(carbohidratos);
         // 
 
    
    };