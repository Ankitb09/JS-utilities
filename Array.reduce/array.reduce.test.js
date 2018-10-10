const reduce2 = require('./array.reduce');

let arr = [1,2,3,4,5,6,7,8]


test('adds array arr to equal 36', () => {
    expect(arr.reduce2((a,b)=>(a+b))).toBe(36);
});
