
// old function 
var Meal = function(food) {
    this.food = food;
}
Meal.prototype.getFood = function() {
    return this.food;
}

// new function
class Meal {
    constructor(food) {
        this.food = food;
    }

    eat () {
        return ' eat '
    }
}
// En ambos casos, la clase Meal tiene una propiedad food que almacena información sobre la comida, pero en la segunda definición también tiene un método eat, que la primera definición no tiene. Las dos formas de definir clases en JavaScript tienen la misma funcionalidad, pero la sintaxis de 'clase' es más concisa y se considera más fácil de leer y escribir.