export let prote = document.createElement("div");
prote.innerHTML = 

`<div class="contenedor">
<h2 class="titulo">PROTEÍNAS</h2>

<div class="video-container">
<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/oTwzyme3o50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div id="alimentos" class="alimentos"></div>
 `


    export function crearProte (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM

         

         let div_Prote = document.querySelector("#root");
    
         div_Prote.appendChild(prote);
         // 
    };