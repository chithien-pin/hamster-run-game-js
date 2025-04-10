import {Animation, AnimationSheet} from '../engine/animation.js';
import {GameEntity} from './entity-base.js';

export class Character extends GameEntity {
    constructor(x, y) {
        super(x, y);

        this.size = {x: 64, y: 64};
        this.vel = {x: 0, y: 0};
        this.gravity = 1000;
        this.jumpForce = -500;
        this.groundY = y;
        this.state = 'run';

        this.animations = {
            run: new Animation(
                new AnimationSheet('media/graphics/game/character/run_7x2.png', 64, 64),
                0.1,
                [0, 1, 2, 3, 4, 5, 6]
            ),
            jump: new Animation(
                new AnimationSheet('media/graphics/game/character/jump_9x2.png', 64, 64),
                0.08,
                [0, 1, 2, 3, 4, 5, 6, 7, 8]
            ),
            slide: new Animation(
                new AnimationSheet('media/graphics/game/character/slide_5x4.png', 64, 64),
                0.07,
                [0, 1, 2, 3, 4]
            ),
            grow: new Animation(
                new AnimationSheet('media/graphics/game/character/grow_6x2.png', 64, 64),
                0.1,
                [0, 1, 2, 3, 4, 5]
            )
        };
    }

    update(dt) {
        if (this.state === 'jump') {
            this.vel.y += this.gravity * dt;
            this.pos.y += this.vel.y * dt;

            if (this.pos.y >= this.groundY) {
                this.pos.y = this.groundY;
                this.vel.y = 0;
                this.state = 'run';
            }
        }

        this.animations[this.state]?.update(dt);
    }

    draw(ctx) {
        const anim = this.animations[this.state];
        if (anim) anim.draw(ctx, this.pos.x, this.pos.y);
    }

    jump() {
        if (this.state !== 'jump') {
            this.vel.y = this.jumpForce;
            this.state = 'jump';
        }
    }

    slide() {
        if (this.state === 'run') {
            this.state = 'slide';
        }
    }

    grow() {
        this.state = 'grow';
    }

    resetState() {
        if (this.state !== 'jump') {
            this.state = 'run';
        }
    }
}