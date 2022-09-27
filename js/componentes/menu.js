export let info = document.createElement("div");
info.innerHTML = 
` 
    
    <img class="banner" src="./img/imagen-.png">
    <div class="contenedor">
    <h2 class="titulo">BIENVENIDO</h2>
    <p class="inf">Hola, te damos la bienvenida a Healfood en donde encontrarás información acerca de la salud alimenticia y todo lo que tiene que ver con ella, en donde puedas ver la cantidad de vitaminas, lípidos, carbohidratos y proteínas necesita tu cuerpo según tú complexión, esperamos que tu experiencia sea agradable.</p>
    <h2 class="titulo2">¿SABES SOBRE BROMATOLOGÍA?</h2>
    <p class="inf">Nosotros entendemos  que la bromatología es una rama de la ciencia que estudia a profundidad todo lo relacionado con los alimentos en cuanto a su composición, nutrientes, características fisicoquímicas</p>
    <img class="pi" src="img/Piramide alimenticia.png" alt="">
    <img class="por" src="img/porcion.PNG" alt="">
    </div>'
     `
    

    export function crearInfo(){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_info = document.querySelector("#root");
    
         div_info.appendChild(info);
         // 
 
    
    };