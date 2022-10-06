export let lipidos = document.createElement("div");
lipidos.innerHTML = 

`<div class="contenedor">
<h2 class="titulo">LÍPIDOS</h2>

<div class="video-container">
<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/y7WmTT0S-lQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div id="alimentos" class="alimentos"></div>`


    export function crearLip (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_lip = document.querySelector("#root");
    
         div_lip.appendChild(lipidos);
         // 
 
    
    };