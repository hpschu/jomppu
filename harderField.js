class HarderField extends PlayField {
    constructor(engine) {
        super(engine);
        this.startPosX = 35;
        this.startPosY = 50;
        this.ballRadius = 20;
        this.endCup = new EndCup(250, 500);
        this.ball = new Ball(this.startPosX, this.startPosY, this.ballRadius, this.ballOptions);
        var bar = Bodies.rectangle(200, 400, 10, 120, this.barrierOptions);
        var block = Bodies.polygon(340, 423, 6, 8, this.barrierOptions);
        Matter.Body.rotate(bar, 45);
        Matter.Composite.add(this.engine.world, [
            this.endCup.body,
            this.ball.body,
            bar,
            block
        ]);
    }
}