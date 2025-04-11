export const rutina = document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor");
  
    const tarjetas = JSON.parse(localStorage.getItem("tarjetas")) || [];
  
    if (tarjetas.length === 0) {
      contenedor.innerHTML = "<p>No hay tarjetas guardadas.</p>";
      return;
    }
  
    tarjetas.forEach(tarjeta => {
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
  
      div.append(nombre, dificultad, instrucciones);
      contenedor.appendChild(div);
    });
  });
  