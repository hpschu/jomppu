class Ball {
    constructor(x, y, r, options) {
        this.body = Matter.Bodies.circle(x, y, r, { label: 'ball', ...options });
        this.body.restitution = 0.6;
        this.r = r;
        this.first = true;
    }
}
