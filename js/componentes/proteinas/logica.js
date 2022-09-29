import { item } from "./itemGaleria.js";
import {producto} from "../../data/img.js"


export function cargarGaleria(){

    let galeria = document.querySelector("#alimentos");

    producto.forEach(function(elemento,indice){

        let div = document.createElement("div");
        div.setAttribute("class","item");
        div.innerHTML = item(indice);

        galeria.appendChild(div);

    })
};
