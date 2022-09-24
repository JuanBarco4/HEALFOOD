export let piramide = document.createElement("div");
piramide.innerHTML = 

`<div class="piramide-container">
<img class="imagen" src="img/Piramide alimenticia.png" alt="">
<div class="infoP">
    <div class="padre">
        <div class="linea"></div>
        <div class="circulo"></div>
        <span>Lorem ipsum</span>
    </div>
</div>

<div class="infoP2">
    <div class="padre2">
        <div class="linea2"></div>
        <div class="circulo2"></div>
        <span>Lorem ipsum</span>
    </div>
</div>

<div class="infoP3">
    <div class="padre3">
        <div class="linea3"></div>
        <div class="circulo3"></div>
        <span>Lorem ipsum</span>
    </div>
</div>

<div class="infoP4">
    <div class="padre4">
        <div class="linea4"></div>
        <div class="circulo4"></div>
        <span>Lorem ipsum</span>
    </div>
</div>

<div class="video-container">
    <video class="video" src="video/Background.mp4" controls autoplay></video>
</div>
</div> `


    export function crearPiramide (){
         // INSERTAR FORMULARIO EN EL DOM

         // ELEMENTOS DEL DOM
         let div_pir = document.querySelector("#root");
    
         div_pir.appendChild(piramide);
         // 
 
    
    };