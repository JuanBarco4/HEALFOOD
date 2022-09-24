export let footer = document.createElement("div");
footer.innerHTML = 
`<footer class="footer"> 
<h2 class="equipo"> NUESTRO EQUIPO </h2>
<div class="nombres">
    <div> <span>Johana Méndez</span> <br> <span>Jimena Gómez</span> <br> <span>Kenssy García</span></div>
    <div> <span>Juan Pablo Barco</span> <br> <span>Rigoberto Castellanos</span> <br> <span>Byron Guerra</span> </div>
    <div> <span>Lusvin Gonzáles</span> <br> <span>Sara Chacon</span> </div>
</div> 
</footer>` 

export function crearFooter(){
    // INSERTAR FORMULARIO EN EL DOM

    // ELEMENTOS DEL DOM
    let div_footer = document.querySelector("#root");

    div_footer.appendChild(footer);
    //  
  }