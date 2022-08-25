var todaysDate = document.querySelector('#currentDay');

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
});