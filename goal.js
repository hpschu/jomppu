class Goal {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show() {
        fill('#A251FA');
        rect(this.x, this.y, this.w, this.h);
    }
}
