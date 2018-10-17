
const bifurcate = (arr, filter) => {
    return arr.reduce((acc, curr, i) => {
        acc[filter[i] ? 0 : 1].push(curr);
        return acc;
    }, [[], []])
}


module.exports = bifurcate;
