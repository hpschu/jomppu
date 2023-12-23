class PlayField {
    constructor(engine) {
        this.engine = engine;
        this.barrierOptions = {render: {strokeStyle: 'white'}, isStatic: true};
        this.ballOptions = { isStatic: true, restitution: 0.9 , label: 'ball', render: { strokeStyle: 'white', lineWidth: 3, fillStyle: 'darkBlue'}};
        this.ground = Bodies.rectangle(width/2, height-2, width, 20, { label: 'ground', isStatic: true });
        this.leftBorder = Bodies.rectangle(2, height/2, 20, height, { isStatic: true });
        this.rightBorder = Bodies.rectangle(width-2, height/2, 20, height, { isStatic: true });
        this.topBorder = Bodies.rectangle(width/2, 2, width, 20, { isStatic: true });
        this.startPosX = 35;
        this.startPosY = 50;
        this.ballRadius = 20;
        this.ball = null;
        this.dropped = false;
    }

    getBall() {
        return this.ball;
    }

    setBall(newBall) {
        this.ball = newBall;
    }

    getDropped() {
        return this.dropped;
    }

    setDropped(value) {
        this.dropped = value;
        Matter.Body.setStatic(this.getBall().body, !value);
    }

    newBall(posX) {
        this.setDropped(false);
        Matter.Composite.remove(this.engine.world, this.getBall().body);
        this.setBall(new Ball(this.startPosX, this.startPosY, this.ballRadius, this.ballOptions));
        Matter.Composite.add(this.engine.world, this.ball.body);
    }

    addBaselinePlayfield() {
        Matter.Composite.add(this.engine.world, [this.rightBorder, this.leftBorder, this.topBorder, this.ground]);
    }
}