/*Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).*/

let favNum = new Number(prompt("What is your favourite number?", " "))

while (favNum =! 42) {
    favNum = new Number(prompt("Are you sure?", " "))
};