export class Timer {
    constructor(duration = 0) {
        this.target = duration;
        this.reset();
    }

    set(duration) {
        this.target = duration;
        this.reset();
    }

    reset() {
        this.start = Date.now();
    }

    delta() {
        return (Date.now() - this.start) / 1000 - this.target;
    }

    elapsed() {
        return (Date.now() - this.start) / 1000;
    }

    expired() {
        return this.delta() >= 0;
    }
}
