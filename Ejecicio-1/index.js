function findFirstRepeated(gifts) {
    // se crea la funcion  findFirstRepeated con un parametro llamado 'gifts'
    const objeto = {};
    // se crea un objeto con un array vacio
for(const value of gifts){
    // se inicia un bucle que itenera sobre el parametro gifts
  if (objeto[value]) {
    // si  dentro del regalo actual 'value' ya esta precente como propiedad objeto, significa que encontro el regalo repetido, 
    return value 
      // devolviendo ese regalo como 
      // el primer regalo encontrado
  } else {
    objeto[value] = true
    // indicador que encuentra el bucle for itineradnoe l array gift  
  }
}

return  -1
}

 
