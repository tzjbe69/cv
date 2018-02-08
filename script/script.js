/* global $ */
let description = document.getElementsByClassName('description');
$('.description-content').hide();
for (let i = 0; i < description.length; i++) {
    description[i].addEventListener('click', populate);
}

function populate(event) {
    $('.description-content').slideUp('slow');
    $('#' + event.path[0].textContent).slideDown('slow');
}