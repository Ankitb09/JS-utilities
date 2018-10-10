Array.prototype.reduce2 = function (fn, initialVal) {
    var acc = initialVal;
    for (var i = 0; i < this.length; i++) {
        if (acc !== undefined) {
            acc = fn(acc, this[i], i, this)
        } else {
            acc = this[i]
        }
    }
    return acc;
}



module.exports = Array.prototype.reduce2;
