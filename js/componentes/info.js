export let info = document.createElement("div");
info.innerHTML = 
' <header class="header"> '+
       '<img src="img/Recurso 4 1.png" class="logo">'+
        '<img src="img/HEALFOOD (2).png" class="empresa">'+
        '<i class="fas fa-bars menu"></i>'+
    '</header> ';

    export function crearInfo(){

        // ELEMENTOS DEL DOM
        let div_info = document.querySelector("#root");
    
    
        // INSERTAR FORMULARIO EN EL DOM
        div_info.appendChild(info);
    
    };