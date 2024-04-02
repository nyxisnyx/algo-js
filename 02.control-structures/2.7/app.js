//Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.
//Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.

const n = new Number(prompt('Please pick a number.'));
let sum;

for (i = 1; i <= n; i++) {
  const value = new Number(Prompt("Please enter another number."))
  sum += value
}



console.log(`Congratulations, you gave us numbers that, once added, totaled ${sum}! Such a huge number!`);
