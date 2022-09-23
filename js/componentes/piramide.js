export let piramide = document.createElement("div");
piramide.innerHTML = 

`<div class="piramide-container">
<img class="imagen" src="img/Piramide alimenticia.png" alt="">

<div class="video-container">
    <video src=""></video>
</div>
</div> `


    export function crearPiramide (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_pir = document.querySelector("#root");
    
         div_pir.appendChild(piramide);
         // 
 
    
    };