const bifurcate = require('./bifurcate');

var arr = ['beep', 'boop', 'foo', 'bar'];
var filter = [true, true, false, true];

test('divide array into seprate groups', () => {
    expect(bifurcate(arr, filter)).toEqual([['beep', 'boop', 'bar'], ['foo']]);
});