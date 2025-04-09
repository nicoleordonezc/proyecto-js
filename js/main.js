
    const url = new URL("https://api.api-ninjas.com/v1/exercises");


    fetch(url,{
        method: 'GET',
        headers:{
            'x-api-key': 'bijlCIvPMXFto3M7dXZV3TJUxcJKJldS4Qi8izG8'
        }
    })
    .then (respuesta => respuesta.json())
    .then ( info => {
        console.log('datos:', info)
    })
    .catch(error =>{
        console.error('hubo un error:', error)
    });
    
  
