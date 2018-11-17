const debounce = (fn, ms = 0) => {
    let timeOutId;

    return function (...args) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => fn.apply(this, args), ms)
    }
}