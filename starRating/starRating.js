let previousClickedElem = null;

function createRating(elem, type = 5) {
    let starSvg = '<svg height="25" width="23" class="star rating" data-rating="4">\
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>\
  </svg>';
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'starRating');
    elem.append(ul);

    for (var i = 1; i <= type; i++) {
        var li = document.createElement('li');
        li.innerHTML = starSvg;
        li.dataset.value = i
        addEventListners(li);
        ul.append(li);
    }
}

function addEventListners(ele) {
    ele.addEventListener('click', function () {
        var val = clickHandler(this)
        console.log(val);
    });
}

function clickHandler(ele) {
    let clickedElem = ele;
    let node = ele;
    let sameEle = false;

    if (previousClickedElem == clickedElem) {
        sameEle = true;
    }

    if (sameEle) {
        node.classList.remove('active');
        while (node !== null) {
            node.classList.remove('active');
            node = node.previousElementSibling;
        }
        previousClickedElem = null;
        sameEle = false;
        return '0';
    } else {
        Array.from(node.parentElement.children).map((ele) => {
            ele.classList.remove('active')
        });
        node.classList.add('active');
        while (node !== null) {
            node.classList.add('active');
            node = node.previousElementSibling;
        }
        previousClickedElem = clickedElem;
        return clickedElem.dataset.value
    }
}