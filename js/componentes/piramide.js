export let piramide = document.createElement("div");
piramide.innerHTML = 

`<div id="pir" class="piram piram2"></div> `


    export function crearPiramide (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_pir = document.querySelector("#root");
    
         div_pir.appendChild(crearPiramide);
         // 
 
    
    };