
function starRating(elem) {
    let elemUL = document.createElement('ul');
    elemUL.classList.add('starRating');

    let starSvg = '<svg height="25" width="23" class="star rating" data-rating="4">\
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>\
  </svg>';

    for (var i = 5; i > 0; i--) {
        var elemLi = document.createElement('li');
        elemLi.title = `${i}/5 rating`
        elemLi.dataset.value = i;
        elemLi.innerHTML = starSvg;
        elemUL.appendChild(elemLi);
        addEvents(elemLi);
    }
    elem.appendChild(elemUL)
}

function addEvents(elem) {

    elem.addEventListener('click', function () {
        for (var child of this.parentElement.children) {
            child.classList.remove('active')
        }
        clickedElem = this;
        this.classList.add('active')
    });

    elem.addEventListener('mouseover', function () {
        for (var child of this.parentElement.children) {
            child.classList.remove('hover')
        }
        console.log(this.previousSibling);
        this.classList.add('hover')
    });

    elem.addEventListener('mouseout', function () {
        for (var child of this.parentElement.children) {
            child.classList.remove('hover')
        }
        
    })
}

function starRateInit(elem, type=5){

}

