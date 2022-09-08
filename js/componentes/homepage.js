export let homepage = document.createElement("div");
homepage.innerHTML =
'<div class="heal2">'+
'<img class="empresa" src="img/HEALFOOD.png" alt="">'+
'</div>'+    
'<div class="heal">'+
    '<img class="logo" src="img/Recurso 4 1.png" alt="">'+
    '<a href="info.html" class="btn_emp" href="">EMPEZAR</a>'+
'</div>';

export function crearHomepage(){

    // ELEMENTOS DEL DOM
    let root = document.querySelector("#root");


    // INSERTAR FORMULARIO EN EL DOM
    root.appendChild(homepage);

};