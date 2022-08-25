var todaysDate = document.querySelector('#currentDay');
var currentTime = moment().hour();

var setDate = function () {
todaysDate.innerHTML = moment().format('dddd, MMMM Do');
}

setDate();

$('.container').on('click', 'button', function() {
    var hourId = $(this).parent().attr('data-id');
    var todoText = $(this).prev().val();

    localStorage.setItem(hourId, todoText);
});

$('.todo').each(function() {
    var hourId = $(this).parent().attr('data-id');
    var todoText = localStorage.getItem(hourId);

    $(this).val(todoText);

    if(hourId < currentTime) {
        $(this).addClass('bg-secondary');
    };
    if(hourId == currentTime) {
        $(this).addClass('bg-danger')
    }
    if(hourId > currentTime) {
        $(this).addClass('bg-success')
    }
});