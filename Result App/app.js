var ara = {
    name:'Ali',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 0
}
var arb = {
    name:'Imran',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 1
}
var arc = {
    name:'Kamran',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 0
}
var ard = {
    name:'Kamlesh',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 1
}
var are = {
    name:'Zeeshan',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 0
}
var arf = {
    name:'Kaghan',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 1
}
var arg = {
    name:'Naran',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 0
}
var arh = {
    name:'Furqan',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 1
}
var ari = {
    name:'Faiza',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 0
}
var arj = {
    name:'Faizi',
    age:18,
    contact: 0123456,
    institute: 'SAIMS',
    result: 1
}
var arr = [ara, arb, arc, ard, are, arf, arg, arh, ari, arj]
console.log (arr)

for (let i = 0; i<10; i++){
    arr[i].rollNumber = i+1                                               
}
for (let i = 0; i<arr.length; i++){
    if (arr[i].result == '0') {
        console.log ('Fail')
    }  else {
        console.log ('Pass')
    }                                         
}


var inp = document.getElementById('rollNumber')
var dName = document.getElementById('displayName')
var dResult = document.getElementById('displayResult')
function searchRes(){
    for(var j=0; j<arr.length; j++){
        if(arr[j].rollNumber == inp.value){
            if(arr[j].result){
                dName.innerHTML = arr[j].name
                dResult.innerHTML = 'Pass'
            } else {
                dName.innerHTML = arr[j].name
                dResult.innerHTML = 'Fail'
            }
        }
    }
}
