const Dealership = function(name, maxCars){
    this.name = name;
    this.maxCars = maxCars;
    carStock = [];
}


Dealership.prototype.countCars = function(){
    return carStock.length;
}

// Dealership.prototype.addCarToStock = function(newCar){
//     if (carStock.length <= maxCars){
//         carStock.push(newCar);
//     }
    
// }

// Dealership.prototype.addCarToStock = function(newCar){
//         if (carStock.length <= maxCars){
//             carStock.push(newCar)
//             return true;
//         } else{
//             return false;
//         }
        
//     }

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

Dealership.prototype.totalValueOfAllCars = function (){
    const totalOfAllCars = carStock.reduce((reducer, Car) => reducer + Car.price, 0);
    return totalOfAllCars;

}




module.exports = Dealership;