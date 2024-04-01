/*Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)*/

const chosenNumber = new Number(prompt("Please pick a number from 1 to 7."));
const roundedNumber = Math.floor(chosenNumber);
let day

if (chosenNumber < 1 || chosenNumber > 7) {
    alert('This number is not a valid choice. Refresh and try again.')
}

switch (roundedNumber) {
    case 1:
        day = 'Monday';
        break;
    case 2: 
        day = 'Tuesday';
        break;
    case 3: 
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    case 7:
        day = 'Sunday';
        break;
}

console.log(`That's ${day}!`);