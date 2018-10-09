const getElementsByClassName = require('./getElementByClassName');


test('adds 1 + 2 to equal 3', () => {
    expect(getElementByClassName(1, 2)).toBe(3);
});
