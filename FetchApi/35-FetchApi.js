// function obtenerEmpelados() {
//     const empleados = 'empleados.json';

// fetch(empleados)
// .then ( resultado => resultado.json())
// .then( datos => {
//     console.log(datos)
// }).catch(error => console.log('Error al encontrar los datos', error))
// }
// obtenerEmpelados();


// Fecch Async And await

async function obtenerEmpelados() {
    const empleados = 'empleados.json';

    try {
    const resultado = await fetch(empleados);
    const datos = await resultado.json();
        console.log(datos);
}   catch(error) {  
    console.log('Error al encontrar empleados', error) 
    }
   }
obtenerEmpelados()

