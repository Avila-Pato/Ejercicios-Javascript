function descargarNuevosArchivos() {
    return new Promise(resolve => {
        console.log('Descargando nuevos archivos espere...');

        setTimeout(() => {
            resolve('Los Archivos han sipo descargados')
        }, 2000)
    })
}
async function app(){
    try{
        const resultado = await descargarNuevosArchivos();
        console.log(resultado)
    }catch(error) {
        console.log(error)
    }
}
app()