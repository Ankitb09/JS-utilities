const arrayToHtmlList = (arr, id, elemTag) => {
    let parentElem = document.getElementById(id);
    parentElem.innerHTML += arr.map((item) => {
        return `<${elemTag}>${item}</${elemTag}>`
    }).join('')
}

module.exports = arrayToHtmlList;
