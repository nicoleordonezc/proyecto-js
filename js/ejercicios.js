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
            const crearNombre = document.createElement("h1");
            crearNombre.textContent = element.name;

            const dificultad = document.createElement("span")
            dificultad.textContent = element.difficulty;

            const instrucciones = document.createElement("p")
            instrucciones.textContent = element.instructions;

            elemento.append(crearNombre, dificultad, instrucciones)
        });
    })
    
}