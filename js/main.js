import {caja } from "./ejercicios.js"
import { rutina } from "./rutina.js";

const url = new URL("https://api.api-ninjas.com/v1/exercises");


const miForm = document.getElementById("form");



miForm.onsubmit = (event) => {
    event.preventDefault();
    var nombreDelCampo = miForm.busqueda.value;
    fetch(url,{
        method: 'GET',
        headers:{
            'x-api-key': 'bijlCIvPMXFto3M7dXZV3TJUxcJKJldS4Qi8izG8'
        }
    })
    .then (respuesta => respuesta.json())
    .then (info => {
          const resultados = info.filter(element => {
          const nombreEjercicio = element.name.toLowerCase();
          return nombreEjercicio && nombreEjercicio.includes(nombreDelCampo);
        });

        const elemento = document.getElementById("contenedor");
        elemento.innerHTML="";

        if (resultados.length === 0) {
            throw new Error('No se encontraron coincidencias');
          }
          resultados.forEach(item => {
            const div = document.createElement("div");

            const guardar = document.createElement("button");
            guardar.textContent = "Save";

            const crearNombre = document.createElement("h1");
            crearNombre.textContent = item.name;

            const dificultad = document.createElement("span")
            dificultad.textContent = item.difficulty;

            const instrucciones = document.createElement("p")
            instrucciones.textContent = item.instructions;

            div.append(crearNombre, dificultad, instrucciones,guardar);

            elemento.append(div);

            div.classList.add("div_contenedor")
            crearNombre.classList.add("titulo")
            dificultad.classList.add("dificultad")
            instrucciones.classList.add("instrucciones")
            guardar.classList.add("guardar-btn")


            guardar.addEventListener("click", () => {
              const tarjeta = {
                nombre: item.name,
                dificultad: item.difficulty,
                instrucciones: item.instructions,
              };
            
              let tarjetasGuardadas = JSON.parse(localStorage.getItem("tarjetas")) || [];
            
              const yaExiste = tarjetasGuardadas.some(t => t.nombre === tarjeta.nombre);
            
              if (yaExiste) {
                  
                  guardar.disabled = true;
                  guardar.classList.add("guardado");
                return;
              }
            
              tarjetasGuardadas.push(tarjeta);
              localStorage.setItem("tarjetas", JSON.stringify(tarjetasGuardadas));
            
              
              guardar.textContent = "Saved";
              guardar.disabled = true;
              guardar.classList.add("guardado");
            
            });
            
          });
        console.log('Resultados encontrados:', resultados);
      })
    .catch(error =>{
        console.error('hubo un error:', error)
    })}
    
    caja();
    rutina();