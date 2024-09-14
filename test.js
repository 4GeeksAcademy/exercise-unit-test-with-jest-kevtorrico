// Import the function from app.js
const { oneEuroIs, fromEuroToDollar,fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs.USD; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar is (156.5/1.07) yen", function() {

    const yen = fromDollarToYen(3.5);
    const auxiliar = 3.5 * (1/oneEuroIs.USD);
    const expected = auxiliar * oneEuroIs.JPY;
    expect(yen).toBe(expected);
})

test("One yen is (0.87/156.5) pound", function(){
    const pound = fromYenToPound(5);
    const auxiliar = 5 * (1/oneEuroIs.JPY);
    const expected = auxiliar * oneEuroIs.GBP;
    expect(pound).toBe(expected)

})