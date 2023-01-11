const Dealership = require('./dealership');
const Car = require('./Car');


let dealership; //creating new dealership object
let car;
beforeEach(() => {
    dealership = new Dealership("Fatimah's Dealership", );
    car = new Car("Ferrari", 170000, "V8");
    dealership.addCarToStock(car);
})


describe('testing dealership', () => {
    test('return name of dealership', () => {
        const expected = "Fatimah's Dealership";
        const actual = dealership["name"];
        expect(actual).toBe(expected);
    })

    test('can add car to carStock', () => {
        const expected = true;
        const actual = carStock.includes(car);
        expect(actual).toBe(expected);
    })


})
