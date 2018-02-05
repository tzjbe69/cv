window.addEventListener('load', onHtmlLoad);

function onHtmlLoad() {
    let expand = document.getElementsByClassName('expand');
    let shrink = document.getElementsByClassName('shrink');
    for (let i = 0; i < expand.length; i++) {
        expand[i].addEventListener('click', function(event) {
            event.path[1].lastElementChild.className = 'show';
            event.path[0].className = 'hide expand';
        });
    }
    for (let i = 0; i < shrink.length; i++) {
        shrink[i].addEventListener('click', function(event) {
            event.path[1].className = 'hide';
            event.path[2].firstElementChild.className = 'show expand';
        });
    }
}