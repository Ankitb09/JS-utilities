function attempt(fn, arg) {
    var args = Array.prototype.slice.call(arguments);
    args = args.splice(1)
    try {
        fn(args)
    }
    catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
}


module.exports = attempt;