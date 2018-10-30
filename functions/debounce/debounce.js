function debounce(fn, ms = 0) {
    clearTimeout(timer);
    var timer = setTimeout(fn, ms)
}

module.exports = debounce;