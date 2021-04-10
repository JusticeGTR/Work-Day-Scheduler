function displayTime() {
    var time = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(time);
    setTimeout(displayTime, 1000);
    // return time
}

$(document).ready(function() {
    displayTime();

    // return time
});

// function colorChanger(time) {
//     var nineAm = $("#nineAm").moment("dddd, MMMM Do YYYY, 09:mm:ss a")
//     var tenAm = $("#tenAm")
//     var elevenAm = $("#elevenAm")
//     var twelveAm = $("#twelveAm")
//     var onePm = $("#onePm")
//     var twoPm = $("#twoPm")
//     var threePm = $("#threePm")
//     var fourPm = $("#fourPm")
//     var fivePm = $("#fivePm")
//     var colorTime = [nineAm, tenAm, elevenAm, twelveAm, onePm, twoPm, threePm, fourPm, fivePm] 
//     // var colorTime = [$("#09"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")] 
  

//     var hourColor = moment().format("hh")
//     console.log(hourColor);
//     for(var i = 0; i <colorTime.length; i++) {
//         if(colorTime[i] === time) {
//             colorTime[i].
//         }
//     }
// }

// colorChanger()