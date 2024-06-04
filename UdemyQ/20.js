// estructuras de conntrol

 const puntaje = 222;

 if( puntaje !== 222 ){
     console.log('los puntajes son diferentes');
 } else {
     console.log('los puntajes son iguales');
 }

//  <------------------------------------------------------------------> //

 const efectivo = 1000;
 const carrito = 500;

 if ( efectivo > carrito) {
    console.log('El Producto se puede comprar')
 }else if ( efectivo < carrito){
    console.log('El Producto no se puede comprar')
 }

 
//  <------------------------------------------------------------------> //

const rol = 'ADMIN'

if ( rol === 'ADMIN' ){
    console.log('Bienvenido admin')
} else if ( rol === 'EDITOR' ){
    console.log('Bienvenido editor')
}else {
    console.log('Usuario no encontrado')
}