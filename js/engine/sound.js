export class Sound {
    constructor(srcArray) {
        this.audio = new Audio();
        this.audio.src = srcArray[0]; // chỉ lấy 1 định dạng đầu tiên
        this.audio.preload = 'auto';
        this.audio.load();
    }

    play() {
        this.audio.currentTime = 0;
        this.audio.play().catch(() => {
        }); // fix autoplay
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    setVolume(vol) {
        this.audio.volume = vol;
    }

    setLoop(loop) {
        this.audio.loop = loop;
    }

    pause() {
        this.audio.pause();
    }

    resume() {
        this.audio.play();
    }
}

export class Music {
    constructor(srcArray) {
        this.tracks = srcArray.map((src) => new Audio(src));
        this.current = 0;
        this.loop = true;
    }

    play(index = 0) {
        this.stop();
        this.current = index;
        const track = this.tracks[this.current];
        track.loop = this.loop;
        track.play().catch(() => {
        });
    }

    stop() {
        this.tracks.forEach((t) => {
            t.pause();
            t.currentTime = 0;
        });
    }

    pause() {
        this.tracks[this.current]?.pause();
    }

    resume() {
        this.tracks[this.current]?.play().catch(() => {
        });
    }

    setVolume(vol) {
        this.tracks.forEach((t) => (t.volume = vol));
    }

    setLoop(val) {
        this.loop = val;
        this.tracks.forEach((t) => (t.loop = val));
    }
}
