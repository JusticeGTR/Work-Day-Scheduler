function displayTime() {
    var time = moment().format('dddd, MMMM Do YYYY, hh:mm:ss a');
    $('#currentDay').text(time);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});