export function Class(base, def) {
    const cls = function (...args) {
        if (this.init) this.init(...args);
    };

    if (base) {
        const proto = Object.create(base.prototype);
        Object.assign(proto, def);
        cls.prototype = proto;
    } else {
        cls.prototype = def;
    }

    return cls;
}
