const Dealership = function(name, maxCars){
    this.name = name;
    this.maxCars = maxCars;
    carStock = [];
}

Dealership.prototype.countCars = function(){
    return carStock.length;
}

Dealership.prototype.addCarToStock = function(newCar){
    carStock.push(newCar);
}


module.exports = Dealership;