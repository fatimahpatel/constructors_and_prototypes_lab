const Dealership = require('./dealership');
const Car = require('./Car');


let dealership; //creating new dealership object
let car;
beforeEach(() => {
    dealership = new Dealership("Fatimah's Dealership", );
    ferrari = new Car("Ferrari", 170000, "V8");
    bmw = new Car("BMW", 150000, "V6");
    dealership.addCarToStock(ferrari, bmw);
})


describe('testing dealership', () => {
    test('return name of dealership', () => {
        const expected = "Fatimah's Dealership";
        const actual = dealership["name"];
        expect(actual).toBe(expected);
    });

    test('can return number of cars in stock', () => {
        const expected = 1;
        const actual = dealership.countCars();
        expect(actual).toBe(expected);
    });

    test('can add car to carStock', () => {
        const expected = true;
        const actual = carStock.includes(ferrari, bmw);
        expect(actual).toBe(expected);
    });


})
