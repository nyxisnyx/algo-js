/*Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases.*/

class Rectangle {
    constructor(topLeftXPos, topLeftYPost, width, length) {
        this.topLeftXPos = topLeftXPos
        this.topLeftYPost = topLeftYPost
        this.width = width
        this.length = length
    };

    get topLeft() {
        return [this.topLeftXPos, this.topLeftYPost];
    };

    get topRight() {
        return [this.topLeftXPos + this.length, this.topLeftYPost];
    };

    get bottomLeft() {
        return [this.topLeftXPos, this.topLeftYPost + this.width];
    };

    collides(otherRectangle) {
        let xCollision = (otherRectangle.topLeft[0] >= this.topLeft[0] && otherRectangle.topLeft[0] <= this.topRight[0]) || 
        (otherRectangle.topRight[0] >= this.topLeft[0] && otherRectangle.topRight[0] <= this.topRight[0])
        let yCollision = (otherRectangle.topLeft[1] >= this.topLeft[1] && otherRectangle.topLeft[1] <= this.bottomLeft[1]) || 
        (otherRectangle.bottomLeft[1] >= this.topLeft[1] && otherRectangle.bottomLeft[1] <= this.bottomLeft[1])
        return xCollision && yCollision ?true : false;
    };
};

