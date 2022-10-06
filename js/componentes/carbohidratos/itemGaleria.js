import {producto} from "../../data/img3.js";


export function item(el_producto){
let contenido =
    '<div class="infoPro">'+
        '<img class="imagen" src="'+ producto[el_producto].img +'" alt="">'+
        '<div class="container">'+
            '<div class="alimento">'+
                '<h3>'+ producto[el_producto].alimento +'</h3>'+
                '<span>'+ producto[el_producto].descripcion +'</span>'+
            '</div>'+
            '<div class="porcentajes">'+
                '<div class="prot">'+
                    '<h3>'+ producto[el_producto].proteina +'</h3>'+
                    '<span>'+ producto[el_producto].dato +'</span>'+
                '</div>'+
                '<div class="carb">'+
                    '<h3>'+ producto[el_producto].carbohidrato +'</h3>'+
                    '<span>'+ producto[el_producto].dato2 +'</span>'+
                '</div>'+
                '<div class="lipi">'+
                    '<h3>'+ producto[el_producto].lipido +'</h3>'+
                    '<span>'+ producto[el_producto].dato3 +'</span>'+
                '</div>'+ 
            '</div>'+   
        '</div>'+ 
        '<i class="fa-solid fa-chevron-right flecha"></i>'+  
    '</div>'

return contenido;
}