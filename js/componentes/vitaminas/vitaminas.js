export let vitaminas = document.createElement("div");
vitaminas.innerHTML = 

`<div class="contenedor">
<h2 class="titulo">VITAMINAS</h2>

<div class="video-container">
    <video class="video"></video>
</div>

<div id="alimentos" class="alimentos"></div>`


    export function crearVit (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_vit = document.querySelector("#root");
    
         div_vit.appendChild(vitaminas);
         // 
 
    
    };