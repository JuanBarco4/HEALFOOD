export let header = document.createElement("div");
header.innerHTML = 
` <header class="header"> 
       <img src="img/Recurso 4 1.png" class="logo2">
        <img src="./img/HEALFOOD .png" class="empresa2">
        <label for="btn-menu" class="fas fa-bars menu"><label>
    </header>
    <input type="checkbox" id="btn-menu">
    <div class="container-menu">
        <div class="cont-menu">
            <nav>
                <input class="buscador" type="text" placeholder="🔍 search">
                <a href="info.html" onclick="mostrarHome" id="H">Home</a>
                <a href="Prote.html" onclick="mostrarPro" id="P">Proteinas</a>
                <a href="Lip.html" onclick="mostrarLip"   id="L">Lípidos</a>
                <a href="Carbo.html" onclick="mostrarCar" id="C">Carbohidratos</a>
                <a href="Vit.html" onclick="mostrarVit"   id="V">Vitaminas</a>
                <a href="Piramide.html" onclick="mostrarPir" id="Pi">Piramide</a>
            </nav>'
            <label for="btn-menu" class=""></label>
        </div>
    </div>  `

    export function crearHeader(){
        // INSERTAR FORMULARIO EN EL DOM

        // ELEMENTOS DEL DOM
        let div_header = document.querySelector("#root");
   
        div_header.appendChild(header);
        // 

   
   };