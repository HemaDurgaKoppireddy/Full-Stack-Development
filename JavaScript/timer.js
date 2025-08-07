var time = 300;

var IntervalName = setInterval(function() {
    time = time-1;
    var hrs = document.getElementsByClassName("hours")[0].innerHTML = parseInt(time/600);
    var min = document.getElementsByClassName("minutes")[0].innerHTML = parseInt(time/60);
    var sec = document.getElementsByClassName("seconds")[0].innerHTML = time%60;

    if(sec==0) {
        clearInterval()
    }
}, 1000)

// setTimeout(function() {
//     console.log("Responding")
// }, 3000)