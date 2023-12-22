class Paddle {
    constructor(x, y, w, h) {
        this.body = Matter.Bodies.rectangle(x, y, w, h);
        this.body.restitution = 1;
        Matter.World.add(world, this.body);
        this.body.isStatic = true;
        this.w = w;
        this.h = h;
    }

    show() {
        const pos = this.body.position;
        fill(123);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
    }
}