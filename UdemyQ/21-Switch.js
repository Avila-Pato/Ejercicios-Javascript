const metodoPago = 'tarjeta falabella'

switch(metodoPago) {
    case 'efectivo':
        console.log('Pago en efectivo');
        break;
    case 'tarjeta':
        console.log('Pago con tarjeta');
        break;
    case 'paypal':
        console.log('Pago con paypal');
        break;
    case 'bitcoin':
        console.log('Pago con bitcoin');
        break;
    default:
        console.log('Metodo de pago desconocido');
        break;
}