class Ball {
    constructor(x, y, r) {
        this.body = Matter.Bodies.circle(x, y, r, { label: 'ball' });
        this.r = r;
        this.first = true;
    }
}
