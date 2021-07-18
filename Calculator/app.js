var a = document.getElementById("value1")

function cal(num){
    a.value += num
}

function result(){
    var final = eval(a.value)
    a.value = final
}