import {caja} from "./ejercicios.js"

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
            const crearNombre = document.createElement("h1");
            crearNombre.textContent = item.name;

            const dificultad = document.createElement("span")
            dificultad.textContent = item.difficulty;

            const instrucciones = document.createElement("p")
            instrucciones.textContent = item.instructions;

            elemento.append(crearNombre, dificultad, instrucciones);
            
            crearNombre.classList.add("titulo")
            dificultad.classList.add("dificultad")
            instrucciones.classList.add("instrucciones")
            
          });
        console.log('Resultados encontrados:', resultados);
      })
    .catch(error =>{
        console.error('hubo un error:', error)
    })}
    
    caja()