function findFirstRepeated(gifts) {
    const objeto = {};

for(const value of gifts){
  if (objeto[value]) {
    return value
  } else {
    objeto[value] = true
  }
}

return  -1
}

 
