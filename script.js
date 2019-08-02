const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hourPosition = 360/12*hr + (360/60*min)/12;
    let minPosition = 360/60*min + (360/60*sec)/60;
    let secPosition = 360/60*sec;


setInterval(() => {
    
    hourPosition = hourPosition + 3/360;
    minPosition = minPosition + 6/60;
    secPosition = secPosition + 6; 

    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}, 1000);
