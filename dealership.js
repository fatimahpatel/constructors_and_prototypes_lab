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

Dealership.prototype.carManufacturers = function(){
    manufacturers = [];
    carStock.forEach((Car) => manufacturers.push(Car["manufacturer"]));
    return manufacturers;
}

Dealership.prototype.allCarsFromOneManufacturer = function(){
    const sameManufacturer = carStock.filter((Car) => Car.manufacturer === "Ferrari");
    return sameManufacturer;
}


module.exports = Dealership;