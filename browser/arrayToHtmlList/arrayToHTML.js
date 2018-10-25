function arrayToHtml(arr, id) {
    var elem = document.getElementById(id);
    var childElems = arr.map((curr, item, i) => {
        return `<li>${curr}</li>`
    }).join('')

    elem.innerHTML += childElems;
    return elem
}


module.exports = arrayToHtml;
