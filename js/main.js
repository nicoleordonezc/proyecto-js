
    const url = new URL("https://api.api-ninjas.com/v1/exercises");


    // fetch(url,{
    //     method: 'GET',
    //     headers:{
    //         'x-api-key': 'bijlCIvPMXFto3M7dXZV3TJUxcJKJldS4Qi8izG8'
    //     }
    // })
    // .then (respuesta => respuesta.json())
    // .then ( info => {
    //     info.forEach(element => {
    //         const ejercicio = element.name
    //         console.log(ejercicio);
    //     });
        
    // })
    // .catch(error =>{
    //     console.error('hubo un error:', error)
    // });
    
  
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
    .then ( info => {
        // info.forEach(element => {
        //     const ejercicio = element.name
        //     console.log(ejercicio);
        // });
        const filtro = info.filter(ejercicios => ejercicios.name=== 'string' && ejercicios.name.toLowercase().includes(nombreDelCampo))
        console.log(filtro);
        
    })
    .catch(error =>{
        console.error('hubo un error:', error)
    })
    }