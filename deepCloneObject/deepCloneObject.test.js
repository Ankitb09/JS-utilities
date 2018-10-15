const deepClone = require('./deepCloneObject');


test('adds 1 + 2 to equal 3', () => {
    expect(deepClone(1, 2)).toBe([]);
});
