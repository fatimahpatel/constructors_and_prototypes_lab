const Dealership = require('./dealership');
const Car = require('./Car');


let dealership; //creating new dealership object
let car;
beforeEach(() => {
    dealership = new Dealership("Fatimah's Dealership", );
    ferrariOne = new Car("Ferrari", 170000, "V8");
    bmw = new Car("BMW", 150000, "V6");
    dealership.addCarToStock(ferrariOne);
    dealership.addCarToStock(bmw);
})


describe('testing dealership', () => {
    test('return name of dealership', () => {
        const expected = "Fatimah's Dealership";
        const actual = dealership["name"];
        expect(actual).toBe(expected);
    });

    test('can return number of cars in stock', () => {
        const expected = 2;
        const actual = dealership.countCars();
        expect(actual).toBe(expected);
    });

    test('can add car to carStock', () => {
        const expected = true;
        const actual = carStock.includes(ferrariOne, bmw);
        expect(actual).toBe(expected);
    });

    test('can return an array containing each cars manufacturer', () => {
        const expected = ["Ferrari", "BMW"];
        const actual = dealership.carManufacturers();
        expect(actual).toStrictEqual(expected);

    });

    // test('can find all the cars from a given manufacturer', () => {
    //     const expected = "Ferrari";

    // })


})
