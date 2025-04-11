const url = new URL("https://api.api-ninjas.com/v1/exercises");
export  const caja = function(){
    fetch(url,{
        method: 'GET',
        headers:{
            'x-api-key': 'bijlCIvPMXFto3M7dXZV3TJUxcJKJldS4Qi8izG8'
        }
    })
    .then (respuesta => respuesta.json())
    .then(info =>{
        info.forEach(element => {
            const elemento = document.getElementById("contenedor");
            const div = document.createElement("div");
            div.id = "div_box";
            const guardar = document.createElement("button");
            guardar.textContent = "guardar";
            
            const crearNombre = document.createElement("h1");
            crearNombre.textContent = element.name;
            
            const dificultad = document.createElement("span")
            dificultad.textContent = element.difficulty;
            
            const instrucciones = document.createElement("p")
            instrucciones.textContent = element.instructions;
            
            div.append(guardar, crearNombre, dificultad, instrucciones);

            elemento.append(div);

            div.classList.add("div_contenedor")
            crearNombre.classList.add("titulo")
            dificultad.classList.add("dificultad")
            instrucciones.classList.add("instrucciones")
            guardar.classList.add("guardar-btn")

            guardar.addEventListener("click", () => {
                const tarjeta = {
                  nombre: element.name,
                  dificultad: element.difficulty,
                  instrucciones: element.instructions,
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
              
                
                guardar.textContent = "Guardado";
                guardar.disabled = true;
                guardar.classList.add("guardado");
              
              });
              
    })})};
    