// Promesas en Javascript

const usuarioIdentificador = new Promise((resolve, reject)=> {
    const auth = false;
    if(auth) {
        resolve('Usuario identificado') // El promise a sido identificado
    }else {
        reject('Usuario no identificado') // El promise no se cumple
    }
});

usuarioIdentificador
.then(function(resultado){
    console.log(resultado)
}).catch(function(errror){
    console.log(errror)
})

// En los promise existen 3 valores
// 1- Pending: no se ha cumplido pero tampoco se ha rechazado
// 2- Fullfiles: ya se ha cunplido
// 3- rejected:  se ha rechazado o no se puede cumplir