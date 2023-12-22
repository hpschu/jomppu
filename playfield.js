class PlayField {
    constructor(engine, startCup, endCup, ball) {
        var ground = Bodies.rectangle(width/2, height-2, width, 20, { label: 'ground', isStatic: true });
        var leftBorder = Bodies.rectangle(2, height/2, 20, height, { isStatic: true });
        var rightBorder = Bodies.rectangle(width-2, height/2, 20, height, { isStatic: true });
        var topBorder = Bodies.rectangle(width/2, 2, width, 20, { isStatic: true });

        Matter.Composite.add(engine.world, [ground, leftBorder, rightBorder, topBorder, startCup.body, endCup.body, ball.body]);
    }
}
