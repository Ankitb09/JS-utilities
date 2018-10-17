const bifurcate = require('./bifurcate');

var arr = ['beep', 'boop', 'foo', 'bar'];
var filter = [true, true, false, true];


test('comma seprated values', () => {
    expect(bifurcate(arr, filter)).toEqual([['beep', 'boop', 'bar'], ['foo']]);
});