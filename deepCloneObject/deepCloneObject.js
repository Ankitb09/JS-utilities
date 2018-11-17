const deepClone = (obj,newObj) => {
    Object.keys(obj).map((key) => {
        if(Object.prototype.toString.call(obj[key]) == '[object object]'){
            return deepClone(obj[key],newObj[key]);
        }
        newObj[key] = obj[key]
    })
    return newObj;
}

module.exports = deepClone;