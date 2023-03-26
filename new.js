let userValueOne = prompt("user input data one");
let userValueTwo = prompt("user input data two");
userValueOne = parseInt(userValueOne);
userValueTwo = parseInt(userValueTwo);

let resultOne = userValueOne + userValueTwo;
let resultTwo = userValueOne - userValueTwo;
let resultThree = userValueOne * userValueTwo;
let resultFour = userValueOne / userValueTwo;
let resultFive = userValueOne % userValueTwo;
document.write("output:" + resultOne + "<br>");
document.write("output:" + resultTwo + "<br>")
document.write("output:" + resultThree + "<br>")
document.write("output:" + resultFour + "<br>")
document.write("output:" + resultFive + "<br>")


