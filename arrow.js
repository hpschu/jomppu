class ArrowRight {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
    }

    show() {
        fill(255)
        triangle(this.x, this.y-this.w*0.66, this.x, this.y+this.w*0.66, this.x+this.w, this.y);
        rect(this.x-this.w, this.y-this.w*0.33, this.w, this.w*0.66);
    }
}

class ArrowLeft {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
    }

    show() {
        fill(255)
        triangle(this.x, this.y-this.w*0.66, this.x, this.y+this.w*0.66, this.x-this.w, this.y);
        rect(this.x, this.y-this.w*0.33, this.w, this.w*0.66);
    }
}