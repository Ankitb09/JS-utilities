var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [2, 2, 3, 9, 7];

const difference = (arr1, arr2) => {
    return arr1.filter((curr, i, arr) => {
        return arr2.indexOf(curr) < 0
    })
}

module.exports = difference;