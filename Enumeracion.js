const weekDays = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    domingo: 7,
}

const GetDay = NumberOfDays => {
    const days = Object.keys(weekDays)
   console.log(`Numero de el dia ${NumberOfDays} de la semana es ${days[NumberOfDays - 1]}`); 
};

GetDay(1);
GetDay(3)
