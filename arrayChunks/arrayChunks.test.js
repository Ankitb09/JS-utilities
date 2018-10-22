const chunk = require('./arrayChunks');

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];


test('comma seprated values', () => {
    expect(chunk(arr,3)).toEqual([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k']]);
});