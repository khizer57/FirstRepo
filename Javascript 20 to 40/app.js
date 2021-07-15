var a = prompt("Enter First Name")
var b = prompt("Enter Last Name")

var fullName = a + b
alert ("Welcome " + "Mr. " + fullName)


var phone = prompt("Favourite Phone")
console.log (phone.length)


var pak = "Pakistani"
console.log (pak.indexOf("n"))


var hello = "Hello World"
console.log (hello.lastIndexOf("l"))

var pak2 = "Pakistani"
var pak3 = pak2.charAt(3)
console.log(pak3)


var str1 = prompt("Enter First Name");
var str2 = prompt("Enter Last Name");
var res = str1.concat(str2);
alert ("Welcome " + "Mr. " + res)


var city = "Hyderabad"
console.log (city.replace("Hyder","Islam"))

var message = "Ali and Sami are best friends. They play cricket and football together"
console.log (message.replace(/and/g, "&"))

var number = parseInt("472")
console.log (num)

var peanuts = prompt("Enter Peanuts")
console.log (peanuts.toUpperCase())

var result =prompt("Enter Random").replace(/\b[a-z]/g, (x) => x.toUpperCase())
console.log(result)



var num = 35.36 ;
console.log (num.toString().replace(".",""))


var userName=prompt("Enter your Username");
const checkValidName = (username) => username.match(/[\@\.\,\!]/)===null;
while (!checkValidName(userName)){
    alert("please enter a valid userName");   
    userName=prompt("Enter your Input: ");
};

var search = prompt("Enter snack");
search = search.toLowerCase();
var snacks = ["cake", "apple pie", "cookie", "chips", "patties"];
for (var i = 0; i <= 4; i++) {
if (search === snacks[i]) {
alert("Snack found");
}else{
    alert("Snack not found");
}break
}




