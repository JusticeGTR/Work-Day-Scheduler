var time = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");

function displayTime() {
    time = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(time);
    setTimeout(displayTime, 1000);
}
$(document).ready(function() {
    displayTime();
});

function colorChanger() {
    var nineAm = $("#nineAm").moment("dddd, MMMM Do YYYY, 09:mm:ss am")
    var tenAm = $("#tenAm").moment("dddd, MMMM Do YYYY, 10:mm:ss am")
    var elevenAm = $("#elevenAm").moment("dddd, MMMM Do YYYY, 11:mm:ss am")
    var twelveAm = $("#twelveAm").moment("dddd, MMMM Do YYYY, 12:mm:ss am")
    var onePm = $("#onePm").moment("dddd, MMMM Do YYYY, 01:mm:ss pm")
    var twoPm = $("#twoPm").moment("dddd, MMMM Do YYYY, 02:mm:ss pm")
    var threePm = $("#threePm").moment("dddd, MMMM Do YYYY, 03:mm:ss pm")
    var fourPm = $("#fourPm").moment("dddd, MMMM Do YYYY, 04:mm:ss pm")
    var fivePm = $("#fivePm").moment("dddd, MMMM Do YYYY, 05:mm:ss pm")
    var colorTime = [nineAm, tenAm, elevenAm, twelveAm, onePm, twoPm, threePm, fourPm, fivePm] 
    console.log(colorTime)
    
    var hourColor = moment().format("hh")
    console.log(hourColor);
    for(var i = 0; i <colorTime.length; i++) {
        while(colorTime[i] > time) {
            colorTime[i].addClass("past")
        }
        while(colorTime[i] === time) {
            colorTime[i].addClass("present")
        }
        while(colorTime[i] < time) {
            colorTime[i].addClass("future")
        }
    }
}

// colorChanger();