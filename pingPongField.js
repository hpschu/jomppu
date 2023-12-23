class PingPongField extends PlayField {
    constructor(engine) {
        super(engine);
        this.startPosX = 35;
        this.startPosY = 50;
        this.ballRadius = 20;
        this.endCup = new EndCup(100, 500, 1.2);
        this.ball = new Ball(this.startPosX, this.startPosY, this.ballRadius, this.ballOptions);

        Matter.Composite.add(
            this.engine.world,
            [
                this.ball.body,
                this.endCup.body,
                this.rightBorder,
                this.leftBorder,
                this.ground,
                this.topBorder,
                Matter.Bodies.trapezoid(width/2, height/3, 5, 20, 1, this.barrierOptions),
               
                Matter.Bodies.trapezoid(width/3, height/3 + 50, 5, 20, 1, this.barrierOptions),
                Matter.Bodies.trapezoid(width - width/3, height/3 + 50, 5, 20, 1, this.barrierOptions),
                
                Matter.Bodies.trapezoid(width/3, height/3 + 100, 5, 20, 1, this.barrierOptions),
                Matter.Bodies.trapezoid(width - width/3, height/3 + 100, 5, 20, 1, this.barrierOptions),

                Matter.Bodies.trapezoid(width/2, height/3 + 150, 5, 20, 1, this.barrierOptions),

                Matter.Bodies.trapezoid(width/2, height/3 + 200, 5, 20, 1, this.barrierOptions),

                Matter.Bodies.trapezoid(width/2, height/3 + 250, 5, 20, 1, this.barrierOptions),
            ]
        );
    }
}