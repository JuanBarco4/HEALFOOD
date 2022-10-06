export let estad = document.createElement("div");
estad.innerHTML = 
` 
    
    <div class="contenedor">
    
<<<<<<< HEAD
    <img class="por" src="img/porcion.png" alt="">
=======
    <img class="por" src="img/porcion.PNG" alt="">
>>>>>>> 02e48cf6a0f62612d4f59a4bba575e4b7ec7f0b3
    </div>'
     `
    

    export function crearEsta(){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_info = document.querySelector("#root");
    
         div_info.appendChild(estad);
         // 
 
    
    };