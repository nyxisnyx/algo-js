/*Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.*/

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    };

    get surface() {
        return Math.pow(radius, 2) * Math.PI;
    };

    move(xOffset,yOffset) {
        this.xPos = xOffset + this.xPos;
        this.yPos = yOffset + this.yPos;
    };

    get xPosition() {
        return this.xPos;
    };

    get yPosition() {
        return this.yPos;
    };
};

let testCircle = new Circle(2, 3, 1);
testCircle.move(1,1);
console.log(testCircle.xPosition, testCircle.yPosition);