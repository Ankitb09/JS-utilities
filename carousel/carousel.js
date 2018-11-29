var carousel = carousel || {};

carousel.createStructure = function (elem) {
    var eleme = document.querySelector(`#${elem}`)
    let liLeft = document.createElement('li');
    liLeft.classList.add('left');
    liLeft.innerHTML = 'left';

    function createArrow(position) { // pass "left" for left arrow and "right" for right arrow
        var li = document.createElement('li').classList.add(position);
        li.innerHTML = position == "left" ? "left" : "right";
        eleme.append(li);
    }
}