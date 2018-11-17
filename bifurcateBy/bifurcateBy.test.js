const bifurcateBy = require('./bifurcateBy');

var arr = ['beep', 'boop', 'foo', 'bar'];
var filter = (item) => { return item.indexOf('b') == 0 };

test('divide array into seprate groups', () => {
    expect(bifurcateBy(arr, filter)).toEqual([['beep', 'boop', 'bar'], ['foo']]);
});