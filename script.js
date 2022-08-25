var todaysDate = document.querySelector('#currentDay');

var setDate = function () {
todaysDate.innerHTML = moment().format('dddd, MMMM Do');
}

setDate();