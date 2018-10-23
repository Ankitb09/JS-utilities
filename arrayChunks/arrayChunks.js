function chunk(arr, size) {
    var len = Math.ceil(arr.length / size);
    var arra = [];
    for (var i = 0; i < len; i++) {
        var x = arr.slice(i * size, i * size + size);
        arra.push(x)
    }
    return arra;
}


module.exports = chunk;
