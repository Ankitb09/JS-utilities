
function createRating(elem, type = 5) {
    let starSvg = '<svg height="25" width="23" class="star rating" data-rating="4">\
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;"/>\
  </svg>';
    var ul = document.createElement('ul');
    elem.append(ul)
    for (var i = 1; i <= type; i++) {
        var li = document.createElement('li');
        li.innerHTML = starSvg;
        li.dataset.value = i
        addEventListners(li);
        ul.append(li)
    }
}

function addEventListners(ele) {
    ele.addEventListener('click', function () {
        this.classList.add('active');
        var node = this;
        while(node.previousElementSibling !== null){
            node.previousElementSibling.classList.add('active');
            node = node.previousElementSibling;
        }
    });
}