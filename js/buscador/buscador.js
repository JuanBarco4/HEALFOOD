document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(fruta =>{
  
            fruta.textContent.toUpperCase().includes(e.target.value.toUpperCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
              
        })
  
    }
  
  
  })