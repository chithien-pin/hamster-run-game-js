import {System} from '../engine/system.js';
import {LevelOpening} from '../levels/opening.js';
import {LevelHome} from '../levels/home.js';
import {LevelGame} from '../levels/game.js';
import {Director} from '../plugins/director.js';

import {Player} from '../entities/player.js';
import {Obstacle} from '../entities/obstacle.js';
import {Cookie} from '../entities/cookie.js';
import {BgObject} from '../entities/bgObject.js';
import {HamsterGame} from './HamsterGame.js';

const canvasId = 'game-canvas';
const system = new System(canvasId, 800, 450, 1, 60);
const game = new HamsterGame();

// Setup entity mapping
game.entityMap = {Player, Obstacle, Cookie, BgObject};

// Setup level manager
const director = new Director(game);
director.addLevel('opening', LevelOpening);
director.addLevel('home', LevelHome);
director.addLevel('game', LevelGame);

// Load first level
director.gotoLevel('opening');

// Start game loop
system.start(game);
