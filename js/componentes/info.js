export let info = document.createElement("div");
info.innerHTML = 
' <header class="header"> '+
       '<img src="img/Recurso 4 1.png" class="logo2">'+
        '<img src="img/HEALFOOD (2).png" class="empresa2">'+
        '<i class="fas fa-bars menu"></i>'+
    '</header>'+
    '<img class="banner" src="./img/image 2.png">'+
    '<div class="contenedor">'+
    '<p class="inf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae perferendis architecto error voluptatum. Maiores nam explicabo hic quas cupiditate recusandae, facere laboriosam ab dolore, voluptatum debitis numquam amet in.</p>'+
    '<p class="inf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae perferendis architecto error voluptatum. Maiores nam explicabo hic quas cupiditate recusandae, facere laboriosam ab dolore, voluptatum debitis numquam amet in.</p>'+
    '</div>'

    export function crearInfo(){

        // ELEMENTOS DEL DOM
        let div_info = document.querySelector("#root");
    
    
        // INSERTAR FORMULARIO EN EL DOM
        div_info.appendChild(info);
    
    };