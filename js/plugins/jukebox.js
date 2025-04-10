export class Jukebox {
    constructor(tracks = []) {
        this.tracks = tracks.map(src => new Audio(src));
        this.index = 0;
        this.loop = true;
    }

    play(index = 0) {
        this.stop();
        this.index = index;
        const audio = this.tracks[index];
        audio.loop = this.loop;
        audio.play().catch(() => {
        });
    }

    stop() {
        this.tracks.forEach(track => {
            track.pause();
            track.currentTime = 0;
        });
    }

    pause() {
        this.tracks[this.index]?.pause();
    }

    resume() {
        this.tracks[this.index]?.play().catch(() => {
        });
    }

    next() {
        this.index = (this.index + 1) % this.tracks.length;
        this.play(this.index);
    }
}