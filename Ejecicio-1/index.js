function findFirstRepeated(gifts) {
    // se crea la funcion  findFirstRepeated con un parametro llamado 'gifts'
    const objeto = {};
    // se crea un objeto con un array vacio
for(const value of gifts){
    // se inicia un bucle que itenera sobre el parametro gifts
  if (objeto[value]) {
    // si  dentro del regalo actual 'value' se encuentra en objeto  significa que encontro el regalo repetido, devolviendo ese regalo como el primer regalo encontrado
    return value 
  } else {
    objeto[value] = true
    //  si el regalo no se repite significa que es la primera vez que lo encontra a;adiensose el valor true , marcando como visto el objeto para futuras iteraciones
  }
}

return  -1
}

 
