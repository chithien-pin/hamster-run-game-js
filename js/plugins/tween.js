export class Tween {
    constructor(obj, prop, target, duration) {
        this.obj = obj;
        this.prop = prop;
        this.start = obj[prop];
        this.target = target;
        this.duration = duration;
        this.elapsed = 0;
        this.finished = false;
    }

    update(dt) {
        if (this.finished) return;

        this.elapsed += dt;
        const t = Math.min(this.elapsed / this.duration, 1);
        this.obj[this.prop] = this.start + (this.target - this.start) * t;

        if (t >= 1) this.finished = true;
    }
}