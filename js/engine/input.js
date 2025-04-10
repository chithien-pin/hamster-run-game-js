// engine/input.js

export class Input {
    constructor() {
        this.bindings = {};
        this.states = {};
        this.presses = {};
        this.releases = {};

        window.addEventListener('keydown', (e) => this.keydown(e));
        window.addEventListener('keyup', (e) => this.keyup(e));
    }

    bind(keyCode, action) {
        this.bindings[keyCode] = action;
    }

    unbind(keyCode) {
        delete this.bindings[keyCode];
    }

    keydown(event) {
        const action = this.bindings[event.code];
        if (!action) return;

        if (!this.states[action]) {
            this.presses[action] = true;
        }
        this.states[action] = true;
    }

    keyup(event) {
        const action = this.bindings[event.code];
        if (!action) return;

        this.states[action] = false;
        this.releases[action] = true;
    }

    pressed(action) {
        return this.presses[action];
    }

    released(action) {
        return this.releases[action];
    }

    state(action) {
        return !!this.states[action];
    }

    clearPressed() {
        this.presses = {};
        this.releases = {};
    }
}
