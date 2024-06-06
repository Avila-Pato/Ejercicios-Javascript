
// Performance cuando 2 llamadas son parecidos
function descargarNuevosArchivos() {
    return new Promise(resolve => {
        console.log('Descargando nuevos archivos espere...');

        setTimeout(() => {
            resolve('Los Archivos han sipo descargados')
        }, 2000)
    })
}
function descargarUltimosArchivos() {
    return new Promise(resolve => {
        console.log('Descargando ultimos archivos espere...');

        setTimeout(() => {
            resolve('Los ultimos  Archivos han sipo descargados')
        }, 2000)
    })
}

async function app(){
    try{
        const resultado = await descargarNuevosArchivos();
        const resultado2 = await descargarUltimosArchivos();
        console.log(resultado)
        console.log(resultado2)
    }catch(error) {
        console.log(error)
    }
}
app()

// 