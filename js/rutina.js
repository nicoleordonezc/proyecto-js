export const rutina = document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor");
  
    let tarjetas = JSON.parse(localStorage.getItem("tarjetas")) || [];
  
    if (tarjetas.length === 0) {
      contenedor.innerHTML = "<p>No hay tarjetas guardadas.</p>";
      return;
    }
  
    tarjetas.forEach((tarjeta, index) => {
      const div = document.createElement("div");
      div.classList.add("div_contenedor");
  
      const nombre = document.createElement("h1");
      nombre.textContent = tarjeta.nombre;
      nombre.classList.add("titulo");
  
      const dificultad = document.createElement("span");
      dificultad.textContent = tarjeta.dificultad;
      dificultad.classList.add("dificultad");
      
      const instrucciones = document.createElement("p");
      instrucciones.textContent = tarjeta.instrucciones;
      instrucciones.classList.add("instrucciones");
      
      const eliminarBtn = document.createElement("button");
      eliminarBtn.classList.add("eliminar")
      eliminarBtn.textContent = "Delete";
      eliminarBtn.style.marginTop = "10px";
      eliminarBtn.addEventListener("click", () => {
        tarjetas = tarjetas.filter(t => t.nombre !== tarjeta.nombre);
  
        localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
  
        div.remove();

      });
  
      div.append(nombre, dificultad, instrucciones, eliminarBtn);
      contenedor.appendChild(div);
    });
  });
  