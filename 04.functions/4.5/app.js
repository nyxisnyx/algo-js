/*Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

Examples results:

Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
Create a program to use that function.

Write a documentation for the calcDistance function.

Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...*/

let ax = 1;
let ay = 1;
let bx = 3;
let by = 1;

/**
*
* @param {number} ax - the position of a on the x axis
* @param {number} ay - the position of a on the y axis
* @param {number} bx - the position of b on the x axis
* @param {number} by - the position of b on the y axis
* @returns {number} - the distance between point a and point b on a 2D place
*
*/

function calcDistance(ax, ay, bx, by){
    return Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
}

console.log(calcDistance(2, -2, -2, 2));