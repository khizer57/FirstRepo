var miliSec = 0
var sec = 0
var min = 0
var displaymiliSec = document.getElementById('displaymiliSec')
var displaySec = document.getElementById('displaySec')
var displayMin = document.getElementById('displayMin')

function timer(){
    miliSec++
    displaymiliSec.innerHTML = miliSec  
    if(miliSec == 100){
        sec++
        displaySec.innerHTML = sec
        miliSec = 0
        if(sec == 60){
            min++
            sec = 0
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




// console.log(1)
// setTimeout(function(){
//     console.log(2)
// },1000)
// console.log(3)

// function time(){
//     console.log(1)
// }
// var interval = setInterval(time,1000)
// function start(){
//     clearInterval(interval)
// }