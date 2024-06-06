// This en javascript

const reservacion = {
    nombre: 'Pato',
    apellido: 'Perez',
    telefono: '123456789',
    total: '3000',
    email: 'correo@gmail.com',
    informacion: function() {
        console.log(`El cliente ${this.nombre} tiene una reserva de ${this.total}`) 
    }
}
reservacion.informacion()

const reservacion2 = {
    nombre: 'Isaias',
    apellido: 'Avila',
    telefono: '123456789',
    total: '1000',
    email: 'correo@gmail.com',
    informacion2: function() {
        console.log(`El cliente ${reservacion2.nombre} tiene una reserva de ${reservacion2.total}`) 
    }
}
reservacion2.informacion2()