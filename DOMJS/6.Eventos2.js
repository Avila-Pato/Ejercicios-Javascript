
//eventos

console.log(1)

window.addEventListener('load', function() { // load espera a que se descargue todo el html, img,css, etc...
    console.log(2)
})

window.onload = function(){
    console.log(3)
}
document.addEventListener('DOMContentLoaded', function() { // solo espera a que se descargue el html, pero noe spera el css o imagenes
 console.log(4)
})

console.log(5)




window.addEventListener('load', imprimir)  // load espera a que se descargue todo el html, img,css, etc...
function imprimir(){
 console.log(6)
}