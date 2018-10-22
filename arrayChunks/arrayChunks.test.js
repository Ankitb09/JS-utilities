const arrayChunks = require('./arrayChunks');

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];


test('comma seprated values', () => {
    expect(arrayChunks(arr, 3)).toBe([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k']]);
});