var time = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
var buttons = $(".saveBtn");
var taskHour = $("hour");
var inputValue = $("input")
var amSection = $(".am");
var pmSection = $(".pm");
var rows = $(".rows")

function displayTime() {
    time = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(time);
    setTimeout(displayTime, 1000);
}
$(document).ready(function() {
    displayTime();
});

function colorChanger() {
    // var nineAm = $("#nineAm")
    // var tenAm = $("#tenAm")
    // var elevenAm = $("#elevenAm")
    // var twelveAm = $("#twelveAm")
    // var onePm = $("#onePm")
    // var twoPm = $("#twoPm")
    // var threePm = $("#threePm")
    // var fourPm = $("#fourPm")
    // var fivePm = $("#fivePm")
    // var colorTime = [nineAm, tenAm, elevenAm, twelveAm, onePm, twoPm, threePm, fourPm, fivePm] 
    // console.log(colorTime)
 
    var eachAmSection = 
    
    var hourColor = moment().format("hh")
    var amOrPm = moment().format("a")

    console.log(hourColor);

    //if time is am
    //for loop to cycle through all div's with class am. if section is greater than time, set class to future
    // else if section is same as time, set class to present, else set class to past
    // else if
    //for loop to cycle through all div's with class pm. if section is greater than time, set class to future
    // else if section is same as time, set class to present, else set class to past
    //else set class to future
    if(amOrPm == "am"){
        for(var i = 0; i <amSection.length; i++) {
            if(colorTime[i] === && amSection) {
                if(amOrPm == "am") {
                    
                } else {
                colorTime[i].addClass("past")
                }
            }
            
        }
    }
    
}

colorChanger();

function saveTasks() {

    function registerTask(){
    localStorage.setItem("")
    }

    function lastRegistered(){
        localStorage.getItem("")
    }
}

buttons.on("click", saveTasks)