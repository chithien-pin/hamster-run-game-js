export class Loader {
    constructor(resources = []) {
        this.resources = resources;
        this.loaded = 0;
        this.onComplete = () => {
        };
    }

    load(callback) {
        this.onComplete = callback;
        this.resources.forEach((res) => this._load(res));
    }

    _load(resource) {
        if (typeof resource === 'string' && resource.match(/\.(jpg|png|gif)$/)) {
            const img = new Image();
            img.onload = () => this._onItemLoaded();
            img.onerror = () => this._onItemLoaded();
            img.src = resource;
        } else if (resource instanceof Audio) {
            resource.oncanplaythrough = () => this._onItemLoaded();
            resource.load();
        } else {
            this._onItemLoaded(); // unsupported or already loaded
        }
    }

    _onItemLoaded() {
        this.loaded++;
        if (this.loaded === this.resources.length) {
            this.onComplete();
        }
    }
}
