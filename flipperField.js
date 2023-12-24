class FlipperField extends PlayField {
    constructor(engine) {
        super(engine);
        this.startPosX = 35;
        this.startPosY = 50;
        this.ballRadius = 20;
        this.endCup = new EndCup(250, 500, 1.2);
        var endCupThing = this.endCup;
        this.ball = new Ball(this.startPosX, this.startPosY, this.ballRadius, this.ballOptions);
        var firstBar = Matter.Bodies.rectangle(width/2 + 35, height/4, width - width/3, 5, this.barrierOptions);
        Matter.Body.rotate(firstBar, 2.8);

        var secondBar = Matter.Bodies.rectangle(width/3 - 10, height/4+150 , width/2, 5, this.barrierOptions);
        Matter.Body.rotate(secondBar, 0.3);

        Events.on(engine, 'beforeUpdate', function() {
            Matter.Body.rotate(endCupThing.body, 0.01);
        });

        Matter.Composite.add(
            this.engine.world,
            [
                this.ball.body,
                this.endCup.body,

                firstBar,
                secondBar,
            ]
        );
    }
}