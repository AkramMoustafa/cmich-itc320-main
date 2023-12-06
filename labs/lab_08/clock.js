"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
   
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours -= 12;
        ampm = "PM";
    } else if(hours == 0 ){ // adjust 12 noon and 12 midnight
        hours = 12;

    }

    const hoursElement = $("#hours");
    const minutesElement = $("#minutes");
    const secondsElement = $("#seconds");
    const ampmElement = $("#ampm");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    ampmElement.textContent = ampm;
};
const displayStopwatch = () => {
    const sMinutesElement = $("#s_minutes");
    const sSecondsElement = $("#s_seconds");
    const sMsElement = $("#s_ms");

    sMinutesElement.textContent = padSingleDigit(elapsedMinutes);
    sSecondsElement.textContent = padSingleDigit(elapsedSeconds);
    sMsElement.textContent = padSingleDigit(elapsedMilliseconds);
};



//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 10;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsedMilliseconds >= 1000) {
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsedSeconds === 60) {
        elapsedMinutes++;
        elapsedSeconds = 0;
    }

    //display new stopwatch time
    displayStopwatch();
};

// event handler functions
const startStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();    

    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
    // variable so next two functions can stop timer.
    
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    displayStopwatch();
    stopwatchTimer = setInterval(tickStopwatch, 10);
    
    stopStopwatch();
};

const stopStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();

    // stop timer
    clearInterval(stopwatchTimer);


};

const resetStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();    
    // stop timer
    stopStopwatch(evt);        
    // reset elapsed variables and clear stopwatch display
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    displayStopwatch();
};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
	
	// set up stopwatch event handlers
    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);

});
