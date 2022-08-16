const { stringLength, reverseString, Calculator} = require('./UnitTesting.js');

describe('thi swill test for all the first and second conditions',() => {
    test('It sould return number betwwen 1 and 10',() => {
        const result = "hello";
        const testing = stringLength(result);
        expect(testing).toBe(5);
    });
    test('hello should be ollh',() => {
        expect(reverseString('hello')).toBe('olleh');
    });
});
describe('this is the calculator testing face',() => {
    const tester = new Calculator(5,2);
    test('it shouls add 5 + 2 = 7',() =>{
        expect(tester.add()).toBe(7);
    });
    test('it shouls subtract 5 - 2 = 3',() =>{
        expect(tester.subtract()).toBe(3);
    });
    test('it shouls divide 5 / 2 = 2.5',() =>{
        expect(tester.divide()).toBe(2.5);
    });
    test('it shouls multiply 5 * 2 = 10',() =>{
        expect(tester.multiply()).toBe(10);
    });
});