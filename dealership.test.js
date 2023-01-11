const Dealership = require('./dealership');


let dealership;
beforeEach(() => {
    dealership = new Dealership("Fatimah's Dealership", 6, null);
})

describe('testing dealership', () => {
    test('return name of dealership', () => {
        const expected = "Fatimah's Dealership";
        const actual = dealership["name"];
        expect(actual).toBe(expected);


    })


})
