export const Storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key, def = null) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : def;
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};