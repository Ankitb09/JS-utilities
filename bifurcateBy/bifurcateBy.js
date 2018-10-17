
const bifurcateBy = (arr, filter) => {
    return arr.reduce((acc, curr, i) => {
        acc[filter(curr) ? 0 : 1].push(curr);
        return acc;
    }, [[], []])
}


module.exports = bifurcateBy;
