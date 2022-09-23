export let info = document.createElement("div");
info.innerHTML = 
` 
    
    <img class="banner" src="./img/imagen-.png">
    <div class="contenedor">
    <p class="inf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae perferendis architecto error voluptatum. Maiores nam explicabo hic quas cupiditate recusandae, facere laboriosam ab dolore, voluptatum debitis numquam amet in.</p>
    <p class="inf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae perferendis architecto error voluptatum. Maiores nam explicabo hic quas cupiditate recusandae, facere laboriosam ab dolore, voluptatum debitis numquam amet in.</p>
    </div>'
     `
    

    export function crearInfo(){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_info = document.querySelector("#root");
    
         div_info.appendChild(info);
         // 
 
    
    };