function reduce(fn, initialVal) {
    var acc = initialVal;
    for (var i = 0; i < this.length; i++) {
        if (acc !== undefined) {
            acc = fn.call(undefined, this[i], i, this)
        } else {
            acc = this[i]
        }
    }
    return acc;
}

module.exports = reduce;




