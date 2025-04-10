# 🎮 Hamster Run (ES6 Module Version)

## Game Description

**Hamster Run** is a 2D endless runner game refactored from ImpactJS. The project has been modernized to use **pure JavaScript with ES6 modules** and HTML5 Canvas — no game engine dependencies.

The game includes:

- Smooth animation and character movement
- Endless obstacles, parallax background, pickups
- Multiple levels (Opening, Home, Game)
- Splash intro, game UI, and sound system
- Modern, scalable file structure

---

## 📁 Folder Structure

```
project/
├── index.html                  ← Main HTML entry
├── js/
│   ├── engine/                 ← Core engine systems (formerly impact.*)
│   ├── core/                   ← Game loop and abstract Game class
│   ├── game/                   ← Game logic and entry point
│   ├── entities/               ← All entity classes (player, obstacle, UI...)
│   ├── plugins/                ← Utility systems (tween, storage, jukebox...)
│   ├── levels/                 ← Level data in JS
│   ├── extensions.js           ← Prototype extensions (map, clamp, etc)
│   └── config.js               ← Game strings and settings (if applicable)
├── media/
│   ├── graphics/               ← All image assets
│   └── sound/                  ← All sound assets (MP3, WAV...)
```

---

## 🚀 Getting Started

1. **Clone or extract the project:**

   ```
   git clone https://github.com/your-repo/hamster-run-es6.git
   ```

2. **Open the game in a browser:**

   Just open `index.html` directly in your browser (Chrome/Firefox/Edge).

3. **Ensure local file loading is allowed**  
   For full functionality (e.g., sound preload), it’s best to run a local server:

   ```bash
   # Using Python 3.x
   python -m http.server

   # Or using Node.js (http-server)
   npm install -g http-server
   http-server
   ```

4. **Go to** `http://localhost:8000/`  
   The game will launch in your browser.

---

## 🎯 Features

- ✅ Rewritten from `impact.module()` to clean `import/export` modules
- ✅ All assets load using modern `Image`, `Audio` and ES6 class logic
- ✅ Compatible with any browser that supports ES6 modules (2020+)
- ✅ Easily extensible with custom entities or new levels

---

## 🛠 Development Tips

- Each entity lives in its own module inside `entities/`
- The game loop and spawn logic is in `js/game/game.js`
- To create a new level, add a file to `js/levels/` and register it in `main.js` via `Director.addLevel(...)`

---

## 🔉 Sound & Music

- Sound is handled via `sound.js` and `jukebox.js`
- Toggle music via `AudioToggle` entity
- All `.mp3` files should be placed inside `media/sound/`

---

## 🧩 Plugins Included

- `url.js`: query string reader
- `storage.js`: localStorage wrapper
- `tween.js`: smooth transition of values
- `jukebox.js`: music playlist player
- `director.js`: level switching manager

---

## ✅ Credits

- Original game concept: MarketJS / ImpactJS
- Refactored by: You + ChatGPT 🚀
- Assets: Preloaded in `media/graphics` and `media/sound`

---

## 📄 License

This game is provided as a learning/development project. You are free to modify and expand it for personal or commercial use (check asset licenses if using in production).