// - CreateMainElement
// - Create whole structre in main Element

// - configurable(5 / 10 star)
// - if 5 star then - 5 star with complete hover effect

function starRating(elem, ratingType = 5) {
    let elemUL = document.createElement('ul');

    for (var i = 0; i < 5; i++) {
        var elemLi = document.createElement('li');
        elemLi.innerHTML = i + 1;
        elemUL.appendChild(elemLi);
        addEvents(elemLi)
    }
    elem.appendChild(elemUL)
}

function addEvents(elem) {
    elem.addEventListener('click', function () {
        console.log(this)
    });
}


