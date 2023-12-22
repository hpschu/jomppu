class StartCup {
    constructor (x, y) {
        this.leftSide = Matter.Bodies.rectangle(x, y, 5, 50);
        this.rightSide = Matter.Bodies.rectangle(x+50, y, 5, 50);
        this.bottom = Matter.Bodies.rectangle(x+25, y+27.5, 55, 5);
        this.body = Matter.Body.create({ parts: [this.leftSide, this.rightSide, this.bottom], isStatic: true });
    }
}