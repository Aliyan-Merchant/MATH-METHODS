var number = +prompt("Enter a Negative Decimal Number")

if (number < 0){
var rounded = Math.round(number);
var floor = Math.floor(number);
var ceil = Math.ceil(number);

document.write(`Number: ${number} <br>
Rounded Value: ${rounded} <br>
Floor Value: ${floor} <br>
Ceil Value: ${ceil} <br>`)
}
else{
    document.write("Enter a negative number")
}



