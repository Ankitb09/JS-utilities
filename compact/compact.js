function compact(arr) {
    return arr.filter((curr)=>{
       return Boolean(curr)
    })
}


module.exports = compact;
