/*Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

Write a documentation for the calcSurface function.*/

/**
 * Multiply two numbers together
 * @param  {Number} a The first number
 * @param  {Number} b The second number
 * @return {Number}   The result of the multiplication
 */

function calcSurface(a, b) {
    return a * b;
};

let rectangleWidth = new Number(prompt('Please enter a number that will serve as a rectangle\' width.'));
let rectangleLength = new Number(prompt('Please enter a number that will serve as a rectangle\' length.'));

let rectangleSurface = alert(`The surface of the rectangle you created equals ${calcSurface(rectangleWidth, rectangleLength)}.`);