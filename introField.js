class IntroField extends PlayField {
    constructor(engine) {
        super(engine);
        this.ball = new Ball(this.startPosX, this.startPosY, this.ballRadius, this.ballOptions);


        // Actual game field
        
        this.endCup = new EndCup(width/3, height-100);

        var arrowOptions = {render: { fillStyle: '#36454F', lineWidth: 6, strokeStyle: '#36454F' }, isStatic: true}
        var arrowBody = Bodies.rectangle(220, 450, 20, 50, arrowOptions);
        var arrowHead = Bodies.trapezoid(220, 400, 50, 30, 1, arrowOptions);

        var arrow = Matter.Body.create({ parts: [arrowBody, arrowHead], isStatic: true });
        Matter.Body.rotate(arrow, 10);


        var arrowBody2 = Bodies.rectangle(120, 450, 20, 50, arrowOptions);
        var arrowHead2 = Bodies.trapezoid(120, 400, 50, 30, 1, arrowOptions);

        var arrow2 = Matter.Body.create({ parts: [arrowBody2, arrowHead2], isStatic: true });
        Matter.Body.rotate(arrow2, 3);

        arrow.collisionFilter = {
            'group': -1,
            'category': 2,
            'mask': 0,
        };
        arrow2.collisionFilter = {
            'group': -1,
            'category': 2,
            'mask': 0,
        };


        Matter.Composite.add(this.engine.world,
            [
                this.ground,
                this.leftBorder,
                this.rightBorder,
                this.topBorder, 
                this.endCup.body,
                this.ball.body,
                arrow,
                arrow2
            ]
        );
    }
}