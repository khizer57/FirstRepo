// Chapter 1 Start

alert ('Hello')
alert ('Error! Please Enter a valid Password.')
alert ('Welcome to JS Land')
alert ('Happy Coding')
console.log ('Hello... I can run JS through my web browser console')

// Chapter 1 End


// Chapter 2 Start

var userName 
var myName = 'Khizer Awan'
var message = 'Hello World'
alert (message)
var marks = prompt('Enter your Marks')
alert (marks)

var pizza = 'pizza'
alert (pizza)
var email = 'khizer.awan57@gmail.com'
alert (email)
var book = 'A smarter way to learn Java Script'
alert('I am trying to learn from the book')
alert(book)
alert('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”')
console.log ('Yah I can write HTML content through Javascript')

// Chapter 2 End


// Chapter 3 Start


var age = 21
alert(age)
var birthYear = 'my birth year is 2000'
var vname = prompt('Visitors name')
document.write(vname)
document.write('ordered')
var ptitle = prompt('Product Title')
document.write(ptitle)
var q = prompt('Quantity')

// Chapter 3 End

// Chapter 5 Start


var a = 1 + 1
var b = 1 * 1
var c = 1 - 1
var d = 1 / 1
console.log (a)
console.log (b)
console.log (c)
console.log (d)

var initial = 5
var dec = 'Value after variable declaration is ' + initial
console.log (dec)
var afinitial = 5 + 1
console.log ('Value after increment is ' + afinitial)
var increment = afinitial + 7
console.log ('Value after addition is ' + increment)
var decrement = increment - 1
console.log ('Value after decrement is ' + decrement)
var div = decrement / 3
console.log ('The output is ' + div)


var ticketprompt = prompt('Enter Tickets')
var ticketprice = 600 * ticketprompt
console.log ('Total cost of ticket is ' + ticketprice)


var table = prompt('Enter Table Number')
for (i = 1 ; i <=10 ; i++ ) {
    console.log (table + " X " + i + " = " +  i * table)
}

var fahreheit = prompt("Enter Fahrenheit")
var celsius = prompt("Enter Celsius")

var ftoc = (fahreheit - 32) * 5/9
var ctof = (celsius * 9/5) + 32

console.log (ftoc)
console.log (ctof)


var pofitem1 = prompt("Price of Item 1")
var pofitem2 = prompt("Price of Item 2")
var oqofitem1 = prompt("Ordered Quantity of Item 1")
var oqofitem2 = prompt("Ordered Quantity of Item 2")
var shipping = 100

var Total = pofitem1 * oqofitem1 + pofitem2 * oqofitem2 + shipping
console.log ("The total cost is " + Total) 



var marks = prompt("Enter Marks")
var totalmarks = 100
var per = marks / totalmarks * 100
console.log ("The percentage is " +  per)


var totalcurrency = 10 * 104.80 + 25 * 28
console.log ('The total PKR is ' + totalcurrency)



var randomnumber = prompt("Enter some number") + 5 * 10 / 12
console.log (randomnumber)



var currentyear = 2021
var yourbirth = prompt("Enter Birth Year")
var age =  2021 - yourbirth
console.log ("Your age is " + age)


var radius = prompt('Enter Radius')
var circum = 2 * 3.142 * radius
var totalcircum = "The total circumference is " + circum
console.log (totalcircum)

var area = 3.142 * radius * 2
var totalarea = "The total area is " + area
console.log (totalarea)


var favsnack = prompt("Favourite Snack")
var currentage = prompt("Current Age")
var maximumage = prompt("Maximum Age")
var eamount = prompt("Estimated Amount")
var totaleat = prompt("How many eat")

console.log ('You will need ' + eamount + ' of ' + favsnack + ' until the ripe old age of ' + maximumage)

// Chapter 5 End 

// Chapter 6-9 Start 

var a = 10
console.log ("The value of a is " + a)

var before = ++a
console.log('Now the value of a is ' + before)

var after = a++
console.log ('Now the value a is ' + after)

var d = --a
console.log ('Now the value a is ' + d)

var e = a--
console.log ('Now the value a is ' + e)



var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log (result)

var greeting = prompt("Enter Name")
console.log ("Hello " + greeting)

// Multiplication Table already done above


var sub1 = prompt("Enter Subject 1")
var sub2 = prompt("Enter Subject 2")
var sub3 = prompt("Enter Subject 3")
var sub1marks = prompt("Enter Sub 1 Marks")
var sub2marks = prompt("Enter Sub 2 Marks")
var sub3marks = prompt("Enter Sub 3 Marks")
var ormarks = 100
var finalmarks = sub1marks + sub2marks + sub3marks 
var percentage = finalmarks / ormarks * 100
console.log (finalmarks)
console.log (percentage)


// Chapter 6-9 End

// Chapter 9-11 Start

var city = prompt ("Enter City Name")
if (city == "Karachi") {
    console.log ("Welcome to the City of Lights")
}

var gender = prompt ("Enter Gender ")
if (gender == "Male") {
    console.log ("Good Morning Sir")
} else {
    console.log ("Good Morning Madam")
}

var signal = prompt ("Enter Signal")
if (signal == "Red" ) {
    console.log ('Must Stop')
} else if (signal == "Yellow") {
    console.log ("Ready to Move")
} else if (signal == "Green") {
    console.log ("Move Now")
}


var fuel = prompt("Enter Fuel")
if (fuel <= 0.25 ) {
    console.log ("Please Refill")
} else {
    console.log ("Fuel Fine")
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true) {
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }    

// Marks and Percentage Calculated Twice Above

var secret = 3
var guess = prompt ("Guess the secret number")
if (guess === 3) {
    console.log ("Bingo! Correct Answer")
} else if (guess == 4) {
    console.log ("Close enough")
}

if (guess / 3 ) {
    console.log ("Yes it is Divisible")
} else {
    console.log ("No it is not Divisible")
}

if (guess = 2,4,6,8,10) {
    console.log ("Even")
} else if (guess = 1,3,5,7,9) {
    console.log ("Odd")
}


var temperature = prompt("Enter Temperature")
if (temperature > 40) {
    console.log ("It is too Hot Outside")
} else if (temperature > 30) {
    console.log ("The weather today is normal")
} else if (temperature > 20) {
    console.log ("Today weather is cool")
} else if (temperature >10) {
    console.log ("OMG Today weather is so cool")
}


var fc = prompt("Enter first number")
var sc = prompt ("Enter second number")
var tc = prompt ("Enter sign")
if (tc === "+") {
    console.log (fc + sc)
} else if (tc === "-") {
    console.log (fc - sc)
}
else if (tc === "*") {
    console.log (fc * sc)
} else if (tc === "/") {
    console.log (fc / sc)
}

// Chapter 9-11 End

// Chapter 12-13 Start





