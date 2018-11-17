<<<<<<< HEAD
const bifurcateBy = require('./bifurcateBy');

var arr = ['beep', 'boop', 'foo', 'bar'];
var filter = (item) => { return item.indexOf('b') == 0 };

test('comma seprated values', () => {
    expect(bifurcateBy(arr, filter)).toEqual([['beep', 'boop', 'bar'], ['foo']]);
});
=======
const attempt = require('./attempt');

>>>>>>> 5433067b0e375e2a18ed21f100f34750f7e33df4
