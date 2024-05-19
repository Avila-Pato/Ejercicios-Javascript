const data = [{
    title: 'Aprendiendo javascript',
    year: 2023,
    rut: '20040917-5',
    nombre: 'patricio'
  }, { 
    title: 'Aprendiendo javascript',
    year: 2023,
    rut: '20040917-5',
    nombre: 'patricio'
  }, { 
    title: 'Aprendiendo javascript',
    year: 2023,
    rut: '20040917-5',
    nombre: 'patricio'
  }];
//   const data = [] // esta funcion la llama como error cuando tenemos ela rray bacio
  
  function getData() {
    return new Promise((resolve, reject) => {
      if (data.length === 0 ){
        reject(new Error('Datos vacios'))
      }
      setTimeout(() => {
        resolve(data);
      }, 2000)
      })
  }
async function fetchingData() {
    const books = await getData();
    console.log(books);
}

fetchingData();