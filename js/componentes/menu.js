export let info = document.createElement("div");
info.innerHTML = 
' <header class="header"> '+
       '<img src="img/Recurso 4 1.png" class="logo2">'+
        '<img src="./img/HEALFOOD .png" class="empresa2">'+
        '<label for="btn-menu" class="fas fa-bars menu"><label>'+
    '</header>'+
    
    '<img class="banner" src="./img/imagen-.png">'+
    '<div class="contenedor">'+
    '<p class="inf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae perferendis architecto error voluptatum. Maiores nam explicabo hic quas cupiditate recusandae, facere laboriosam ab dolore, voluptatum debitis numquam amet in.</p>'+
    '<p class="inf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae perferendis architecto error voluptatum. Maiores nam explicabo hic quas cupiditate recusandae, facere laboriosam ab dolore, voluptatum debitis numquam amet in.</p>'+
    '</div>'+
    '<input type="checkbox" id="btn-menu">'+
    '<div class="container-menu">'+
        '<div class="cont-menu">'+
            '<nav>'+
                '<a href="#">Nombre1</a>'+
                '<a href="#">Nombre2</a>'+
                '<a href="#">Nombre3</a>'+
                '<a href="#">Nombre4</a>'+
                '<a href="#">Nombre5</a>'+
                '<a href="#">Nombre6</a>'+
            '</nav>'+
            '<label for="btn-menu" class=""></label>'+
        '</div>'+
    '</div>'        
    

    export function crearInfo(){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_info = document.querySelector("#root");
    
         div_info.appendChild(info);
         // 
 
    
    };