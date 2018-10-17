const bifurcate = (arr, filter) => {
    return arr.reduce((acc, curr, i) => {
        return acc[filter[i] ? 0 : 1].push(curr),acc;
    }, [[], []])
}



module.exports = bifurcate;
