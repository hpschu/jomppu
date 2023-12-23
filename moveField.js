class MoveField extends PlayField {
    constructor(engine) {
        super(engine);
        this.startPosX = 35;
        this.startPosY = 50;
        this.ballRadius = 20;
        this.endCup = new EndCup(width/2-20, 550, 1);
        this.ball = new Ball(this.startPosX, this.startPosY, this.ballRadius, this.ballOptions);

        var moveBall = Bodies.rectangle(width/2, height/3, 20, 20, this.barrierOptions);
        var moveBall2 = Bodies.rectangle(width/2, (height/3)+150, 20, 20, this.barrierOptions);
        var moveBall3 = Bodies.rectangle(width/2, (height/3)+300, 20, 20, this.barrierOptions);

        Events.on(engine, 'beforeUpdate', function() {
            var newX = (35 + ((Math.sin(engine.timing.timestamp * 0.003) + 1) * 150));
            Matter.Body.setPosition(moveBall, { x: newX, y: moveBall.position.y }, false);
            Matter.Body.rotate(moveBall, 0.1);
            newX = (30 + ((Math.sin(engine.timing.timestamp * 0.0035) + 1) * 150));
            Matter.Body.setPosition(moveBall2, { x: newX, y: moveBall2.position.y }, false);
            Matter.Body.rotate(moveBall2, 0.1);
            newX = (25 + ((Math.sin(engine.timing.timestamp * 0.0040) + 1) * 150));
            Matter.Body.setPosition(moveBall3, { x: newX, y: moveBall3.position.y }, false);
            Matter.Body.rotate(moveBall3, 0.1);
          });
          

        Matter.Composite.add(
            this.engine.world,
            [
                this.ball.body,
                this.endCup.body,
                this.rightBorder,
                this.leftBorder,
                this.ground,
                this.topBorder,
                moveBall,
                moveBall2,
                moveBall3
            ]
        );
    }
}