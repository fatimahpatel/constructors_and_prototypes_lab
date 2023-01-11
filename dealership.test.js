const Dealership = require('./dealership');
const Car = require('./Car');


let dealership; //creating new dealership object
let ferrariOne;
let ferrariTwo;
let bmwTwo;
beforeEach(() => {
    dealership = new Dealership("Fatimah's Dealership", 3);
    ferrariOne = new Car("Ferrari", 170000, "V8");
    ferrariTwo = new Car("Ferrari", 200000, "V9");
    bmw = new Car("BMW", 150000, "V6");
    dealership.addCarToStock(ferrariOne);
    dealership.addCarToStock(ferrariTwo);
    dealership.addCarToStock(bmw);
})


describe('testing dealership', () => {
    test('return name of dealership', () => {
        const expected = "Fatimah's Dealership";
        const actual = dealership["name"];
        expect(actual).toBe(expected);
    });

    test('can return number of cars in stock', () => {
        const expected = 3;
        const actual = dealership.countCars();
        expect(actual).toBe(expected);
    });

    test('can add car to carStock', () => {
        const expected = true;
        const actual = carStock.includes(ferrariOne);
        expect(actual).toBe(expected);
    });

    // test('Cannot add any more cars', () => {
    //     bmwTwo = new Car ("BMW", 130000, "V4");
    //     dealership.addCarToStock(bmwTwo)
    //     const expected = false;
    //     const actual = dealership.addCarToStock(bmwTwo);
    //     expect(actual).toBe(expected);

    // })

    test('can return an array containing each cars manufacturer', () => {
        const expected = ["Ferrari", "Ferrari", "BMW"];
        const actual = dealership.carManufacturers();
        expect(actual).toStrictEqual(expected);

    });

    test('can find all the cars from a given manufacturer', () => {
        const expected = [ferrariOne, ferrariTwo];
        const actual = dealership.allCarsFromOneManufacturer();
        expect(actual).toStrictEqual(expected);

    })

    test('can find the total value of all cars in stock', () => {
        const expected = 520000;
        const actual = dealership.totalValueOfAllCars();
        expect(actual).toBe(expected);
    })


})
