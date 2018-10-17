const arrayToCSV = require('./arraytocsv');

var arr = [['a', 'b'],['c', 'd']];


test('comma seprated values', () => {
    expect(arrayToCSV(arr)).toBe('"a","b"\n"c","d"');
});