const Car = require('./car'); //imports car.js 

let car;
beforeEach(() => {
    car = new Car("Ferrari", 170000, "V8");
})


describe('testing Car', () => {
    test('Can return name of manufacturer', () => {
        const expected = "Ferrari";
        const actual = car["manufacturer"];
        expect(actual).toBe(expected);

    })

    test('Can return price', () => {
        const expected = 170000;
        const actual = car["price"];
        expect(actual).toBe(expected);

    })

})