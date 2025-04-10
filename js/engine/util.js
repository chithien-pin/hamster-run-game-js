export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

export function chance(percent) {
    return Math.random() * 100 < percent;
}
