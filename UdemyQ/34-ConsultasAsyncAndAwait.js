// Performance 2 llamados  independientes

function descargarNuevosArchivos() {
    return new Promise(resolve => {
        console.log('Descargando nuevos archivos espere...');

        setTimeout(() => {
            resolve('Los Archivos han sipo descargados')
        }, 2000)
    })
}
function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando ultimos pedidos espere...');

        setTimeout(() => {
            resolve('Los ultimos pedidos han sipo descargados')
        }, 2000)
    })
}

async function app(){
    try{
        // const resultado = await descargarNuevosArchivos();
        // const resultado2 = await descargarUltimosArchivos();
        // console.log(resultado)

        const resultado = await Promise.all([ descargarNuevosArchivos(),descargarUltimosPedidos()])
        console.log(resultado[0])
        console.log(resultado[1])
    }catch(error) {
        console.log(error)
    }
}
app()