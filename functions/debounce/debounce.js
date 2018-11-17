<<<<<<< HEAD
const debounce = (fn, ms = 0) => {
    let timeOutId;

    return function (...args) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => fn.apply(this, args), ms)
    }
}
=======
function debounce(fn, ms = 0) {
    clearTimeout(timer);
    var timer = setTimeout(fn, ms)
}

module.exports = debounce;
>>>>>>> 5433067b0e375e2a18ed21f100f34750f7e33df4
