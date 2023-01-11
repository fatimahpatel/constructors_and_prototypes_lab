const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
};

module.exports = Car; //need to do this if we want to access Car in other files