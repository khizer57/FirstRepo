var miliSec = 0
var sec = prompt("Enter Second")
var min = prompt("Enter Minute")
var displaymiliSec = document.getElementById('displaymiliSec')
var displaySec = document.getElementById('displaySec')
var displayMin = document.getElementById('displayMin')

function timer(){
    miliSec++
    displaymiliSec.innerHTML = miliSec  
    if(miliSec == 100){
        sec--
        displaySec.innerHTML = sec
        miliSec = 0
        if(sec == 0){
            min--
            sec = 60
            displayMin.innerHTML = min
        }
    }
    console.log(miliSec)
    console.log(sec)
    console.log(min)
}


var interval;
function start(){
    interval = setInterval(timer, 10);
  
}
function pause(){
    clearInterval(interval)
}
function reset(){
    pause()
    miliSec = 0
    sec = 0
    min = 0
    displaymiliSec.innerHTML = miliSec
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
}



