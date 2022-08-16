var WORLD_LIST = ['Frontend', 'Backend', 'Mobile', 'Desktop'];
var CURRENT_WORD = 0;
var CURRENT_PROMPT = WORLD_LIST[CURRENT_WORD].length;
var WRITING = false;
window.onload = function () {
    // const type_element = document.getElementById('first-section-title')!;
    // type_element.innerHTML = WORLD_LIST[CURRENT_WORD];
    // updateAnimation(type_element);
    document.getElementsByClassName('fa-instagram')[0].addEventListener('click', elementOnClick('https://www.instagram.com/fabio_dipilato/'));
    document.getElementsByClassName('fa-github')[0].addEventListener('click', elementOnClick('https://github.com/geiker'));
    document.getElementsByClassName('fa-phone')[0].addEventListener('click', elementOnClick('tel:+393807665609'));
    document.getElementsByClassName('fa-envelope')[0].addEventListener('click', elementOnClick('mailto:me@fabiodipilato.com'));
};
var elementOnClick = function (url) {
    return function () { return window.open(url, '_blank'); };
};
var updateAnimation = function (element) {
    var sleep_time = (Math.random() * 320) + 100;
    console.log('Time');
    if (WRITING) {
        CURRENT_PROMPT++;
    }
    else {
        CURRENT_PROMPT--;
        sleep_time = Math.max(0, sleep_time - 150);
    }
    element.innerHTML = WORLD_LIST[CURRENT_WORD].substring(0, CURRENT_PROMPT);
    if (CURRENT_PROMPT == 0) {
        WRITING = true;
        CURRENT_WORD = (CURRENT_WORD + 1) % WORLD_LIST.length;
    }
    if (CURRENT_PROMPT == WORLD_LIST[CURRENT_WORD].length) {
        WRITING = false;
        sleep_time += Math.random() * 2000;
    }
    setTimeout(function () {
        updateAnimation(element);
    }, sleep_time);
};
