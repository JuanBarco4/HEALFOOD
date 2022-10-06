export let estad = document.createElement("div");
estad.innerHTML = 
` 
    
    <div class="contenedor">
    <img class="por" src="img/porcion.png" alt="">
    </div>'
     `
    

    export function crearEsta(){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_info = document.querySelector("#root");
    
         div_info.appendChild(estad);
         // 
 
    
    };
