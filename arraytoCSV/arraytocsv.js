const arrayToCSV = (arr, delimiter = ",") => {
    return arr.map((item) => {
        return item.map((curr) => {
            return `"${curr}"`
        }).join(delimiter)
    }).join('\n')
}


module.exports = arrayToCSV;
