import {Pointer} from './pointer.js';

export class PointerSelector extends Pointer {
    constructor(x, y) {
        super(x, y);
        this.zIndex = 5000;
        this.size = {x: 15, y: 15};
    }
}