class EndCup {
    constructor (x, y, scale = 1) {
        var palette = {render: {strokeStyle: 'white', lineWidth: 1, fillStyle: "#E3651D"}};
        this.leftSide = Matter.Bodies.rectangle(x, y, 5*scale, 50*scale, palette);
        this.rightSide = Matter.Bodies.rectangle(x+50*scale, y, 5*scale, 50*scale, palette);
        this.bottom = Matter.Bodies.rectangle(x+25*scale, y+27.5*scale, 55*scale, 5*scale, palette);
        this.goalBottom = Matter.Bodies.rectangle(x+25*scale, y+20*scale, 50*scale, 5*scale, { label: 'goal', ...palette });
        this.body = Matter.Body.create({ parts: [this.leftSide, this.rightSide, this.bottom, this.goalBottom], isStatic: true });
    }
}