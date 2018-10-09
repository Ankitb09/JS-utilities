const reduce = require('./reduce');

let arr = [1,2,3,4,5,6,7,8]

test('adds array arr to equal 36', () => {
    expect(reduce(arr)).toBe(36);
});
