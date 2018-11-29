const compact = require('./compact');

var arr = [0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34];

test('Compact Values', () => {
    expect(compact(arr)).toEqual([1, 2, 3, "a", "s", 34]);
});