const difference = require('./array-difference');

var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [2, 2, 3, 9, 7];

test('comma seprated values', () => {
    expect(difference(arr1,arr2)).toEqual([1,4,5,6]);
});