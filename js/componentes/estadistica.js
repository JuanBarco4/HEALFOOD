export let estad = document.createElement("div");
estad.innerHTML = 
` 
    
<<<<<<< HEAD
    <div class="contenedor2">
=======
    <div class="contenedor">
>>>>>>> d3e01939f1927ec554b5870ffa0b1623338ff290
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
