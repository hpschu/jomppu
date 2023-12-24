class BounceField extends PlayField {
    constructor(engine) {
        super(engine);
        this.startPosX = 35;
        this.startPosY = 50;
        this.ballRadius = 20;
        this.endCup = new EndCup(30, 500);
        this.ball = new Ball(this.startPosX, this.startPosY, this.ballRadius, this.ballOptions);

        var firstBar = Matter.Bodies.rectangle(width/3 - 50, height/12+150 , width/3, 5, this.barrierOptions);
        var secondBar = Matter.Bodies.rectangle(width/3 + 100, height/12+150 , width/3, 5, this.barrierOptions);
        var blockBall = Matter.Bodies.circle(width/12, 440, 4, this.barrierOptions);
        var moveBall = Bodies.rectangle(width/2, height/2, 20, 20, this.barrierOptions);
        
        Events.on(engine, 'beforeUpdate', function() {
            var newX = (35 + ((Math.sin(engine.timing.timestamp * 0.003) + 1) * 150));
            Matter.Body.setPosition(moveBall, { x: newX, y: moveBall.position.y }, false);
            Matter.Body.rotate(moveBall, 0.1);
          });
        
        Matter.Body.rotate(firstBar, 0.6);
        Matter.Body.rotate(secondBar, 1.6);

        Matter.Body.rotate(this.endCup.body, 0.6);

        /*
        Events.on(engine, 'beforeUpdate', function() {
            //Matter.Body.rotate(endCupThing.body, 0.01);
        });*/

        Matter.Composite.add(
            this.engine.world,
            [
                this.ball.body,
                this.endCup.body,

                firstBar,
                secondBar,
                blockBall,
                moveBall
            ]
        );
    }
}