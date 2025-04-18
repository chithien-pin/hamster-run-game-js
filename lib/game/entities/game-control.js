ig.module("game.entities.game-control").requires("impact.entity", "game.entities.game-ui", "game.entities.game-character", "game.entities.game-bgObject", "game.entities.game-obstacle", "game.entities.game-pickup", "game.entities.game-hiteffect").defines(function () {
    EntityGameControl = ig.Entity.extend({
        zIndex: 100,
        cityImage: new ig.Image("media/graphics/game/backgrounds/cityscape.png"),
        cityPos: {x: 0, y: 122},
        cloudImage: [new ig.Image("media/graphics/game/backgrounds/cloud0.png"), new ig.Image("media/graphics/game/backgrounds/cloud1.png"),
            new ig.Image("media/graphics/game/backgrounds/cloud2.png")],
        cloudPos: [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}],
        gameStarting: !0,
        gameEnding: !1,
        gamePaused: !1,
        gameOver: !1,
        ui: null,
        character: null,
        gameStartTime: 0,
        gameTime: 0,
        gameOverTime: 0,
        tutorialMode: !1,
        tutorialPauseMode: !1,
        tutorialStage: 0,
        tutorialStopDistance: 0,
        tutorialPausedTime: 0,
        vanishingPoint: {x: 240, y: 80},
        horizonLine: {x: 0, y: 164},
        distanceFogHeight: 22,
        sidewalk1ScreenPoints: Array(4),
        sidewalk2ScreenPoints: Array(4),
        roadScreenPoints: Array(4),
        roadLine1ScreenPoints: Array(4),
        roadLine2ScreenPoints: Array(4),
        laneLine1ScreenPoints: Array(4),
        laneLine2ScreenPoints: Array(4),
        grass1ScreenPoints: Array(4),
        grass2ScreenPoints: Array(4),
        cameraPos: {x: 0, y: 0, z: 0},
        sidewalkPos: {x: 0, y: 0},
        sidewalkWidth: 950,
        sidewalkColor: {r: 214, g: 220, b: 230},
        sidewalk1Pos: {x: -373, y: 0},
        sidewalk1Width: 200,
        sidewalk2Pos: {x: 373, y: 0},
        sidewalk2Width: 200,
        roadPos: {x: 0, y: 0},
        roadWidth: 526,
        roadColor: {r: 89, g: 100, b: 106},
        roadLine1Pos: {x: 268, y: 0},
        roadLine1Width: 10,
        roadLine1Color: {r: 120, g: 141, b: 175},
        roadLine2Pos: {x: -268, y: 0},
        roadLine2Width: 10,
        roadLine2Color: {r: 120, g: 141, b: 175},
        laneLine1Pos: {x: -95, y: 0, z: 0},
        laneLine1Width: 15,
        laneLine1Color: {r: 255, g: 255, b: 255},
        laneLine2Pos: {x: 95, y: 0, z: 0},
        laneLine2Width: 15,
        laneLine2Color: {r: 255, g: 255, b: 255},
        roadZOffset: 0,
        laneLineLength: 4,
        cameraDistance: 10,
        vanishingPointOffset: {x: 0, y: 0},
        runSpeed: 15,
        maxRunSpeed: 20,
        acceleration: 1 / 60,
        jumpGravity: 2E3,
        jumpAmt: 0,
        canSlide: !0,
        isSliding: !1,
        slideDuration: 1,
        slideTime: 0,
        objects: [],
        effects: [],
        segments: [],
        bgSets: [],
        segmentSize: 30,
        bgSetSize: 90,
        segmentSizeVariable: 5,
        totalDistance: 0,
        lastBgSetDistance: 0,
        lastSegmentDistance: 0,
        bgSetDefinitions: [[{id: 11, x: -350, y: 0, z: 0}, {id: 6, x: -350, y: 0, z: 3}, {
            id: 12,
            x: -300,
            y: 10,
            z: 7
        }, {id: 7, x: -350, y: 0, z: 9}, {id: 10, x: -350, y: -10, z: 12}, {id: 13, x: -360, y: 0, z: 16.95}, {
            id: 8,
            x: -350,
            y: 0,
            z: 17
        }, {id: 9, x: -350, y: 0, z: 21}, {id: 27, x: -350, y: 0, z: 24}, {id: 26, x: -350, y: 0, z: 27}, {
            id: 11,
            x: -350,
            y: 0,
            z: 30
        }, {id: 6, x: -350, y: 0, z: 33}, {id: 12, x: -300, y: 10, z: 37}, {id: 7, x: -350, y: 0, z: 39}, {
            id: 10,
            x: -350,
            y: -10,
            z: 42
        }, {id: 13, x: -360, y: 0, z: 46.95}, {id: 8, x: -350, y: 0, z: 47}, {
            id: 9, x: -350, y: 0,
            z: 51
        }, {id: 27, x: -350, y: 0, z: 54}, {id: 26, x: -350, y: 0, z: 57}, {id: 11, x: -350, y: 0, z: 60}, {
            id: 6,
            x: -350,
            y: 0,
            z: 63
        }, {id: 12, x: -300, y: 10, z: 67}, {id: 7, x: -350, y: 0, z: 69}, {id: 10, x: -350, y: -10, z: 72}, {
            id: 13,
            x: -360,
            y: 0,
            z: 76.95
        }, {id: 8, x: -350, y: 0, z: 77}, {id: 9, x: -350, y: 0, z: 81}, {id: 27, x: -350, y: 0, z: 84}, {
            id: 26,
            x: -350,
            y: 0,
            z: 87
        }, {id: 1, x: -550, y: 0, z: 8}, {id: 4, x: -550, y: 0, z: 10}, {id: 0, x: -650, y: 0, z: 19}, {
            id: 3,
            x: -570,
            y: 0,
            z: 20
        }, {id: 1, x: -1E3, y: 0, z: 27}, {id: 5, x: -550, y: 0, z: 28}, {id: 1, x: -550, y: 0, z: 38}, {
            id: 4,
            x: -550,
            y: 0,
            z: 40
        }, {id: 0, x: -650, y: 0, z: 49},
            {id: 3, x: -570, y: 0, z: 50}, {id: 1, x: -1E3, y: 0, z: 57}, {id: 5, x: -550, y: 0, z: 58}, {
                id: 1,
                x: -550,
                y: 0,
                z: 68
            }, {id: 4, x: -550, y: 0, z: 70}, {id: 0, x: -650, y: 0, z: 79}, {id: 3, x: -570, y: 0, z: 80}, {
                id: 1,
                x: -1E3,
                y: 0,
                z: 87
            }, {id: 5, x: -550, y: 0, z: 88}, {id: 23, x: 350, y: 0, z: 0}, {id: 19, x: 350, y: 0, z: 3}, {
                id: 25,
                x: 300,
                y: 0,
                z: 7
            }, {id: 20, x: 350, y: 0, z: 8}, {id: 22, x: 350, y: 0, z: 11}, {id: 17, x: 350, y: 0, z: 14}, {
                id: 24,
                x: 350,
                y: 0,
                z: 19
            }, {id: 21, x: 350, y: 0, z: 22}, {id: 18, x: 350, y: 0, z: 26}, {id: 23, x: 350, y: 0, z: 30}, {
                id: 19,
                x: 350,
                y: 0,
                z: 33
            }, {id: 25, x: 300, y: 0, z: 37}, {id: 20, x: 350, y: 0, z: 38},
            {id: 22, x: 350, y: 0, z: 41}, {id: 17, x: 350, y: 0, z: 44}, {id: 24, x: 350, y: 0, z: 49}, {
                id: 21,
                x: 350,
                y: 0,
                z: 52
            }, {id: 18, x: 350, y: 0, z: 56}, {id: 23, x: 350, y: 0, z: 60}, {id: 19, x: 350, y: 0, z: 63}, {
                id: 25,
                x: 300,
                y: 0,
                z: 67
            }, {id: 20, x: 350, y: 0, z: 68}, {id: 22, x: 350, y: 0, z: 71}, {id: 17, x: 350, y: 0, z: 74}, {
                id: 24,
                x: 350,
                y: 0,
                z: 79
            }, {id: 21, x: 350, y: 0, z: 82}, {id: 18, x: 350, y: 0, z: 86}, {id: 2, x: 500, y: 0, z: 8}, {
                id: 14,
                x: 550,
                y: 0,
                z: 9
            }, {id: 15, x: 600, y: 0, z: 19}, {id: 16, x: 550, y: 0, z: 23}, {id: 2, x: 500, y: 0, z: 38}, {
                id: 14,
                x: 550,
                y: 0,
                z: 39
            }, {id: 15, x: 600, y: 0, z: 49}, {id: 16, x: 550, y: 0, z: 53},
            {id: 2, x: 500, y: 0, z: 68}, {id: 14, x: 550, y: 0, z: 69}, {id: 15, x: 600, y: 0, z: 79}, {
                id: 16,
                x: 550,
                y: 0,
                z: 83
            }]],
        segmentDefinitions: [[{id: 5, x: -170, y: 0, z: 17}, {id: 0, x: -170, y: 0, z: 12}, {
            id: 4,
            x: -170,
            y: 0,
            z: 14
        }, {id: 3, x: 0, y: 0, z: 11}, {id: 8, x: 170, y: 0, z: 12}, {id: 9, x: 170, y: 0, z: 17}, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        }, {type: 2, id: 1, x: 0, y: 0, z: 11}, {type: 2, id: 0, x: 0, y: 0, z: 17}, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        }, {type: 2, id: 0, x: -175, y: 0, z: 25}, {type: 2, id: 0, x: 175, y: 0, z: 25}], [{
            id: 5,
            x: -170,
            y: 0,
            z: 17
        }, {id: 0, x: -170, y: 0, z: 14}, {id: 4, x: -170, y: 0, z: 12}, {
            id: 8, x: 170, y: 0,
            z: 12
        }, {id: 9, x: 170, y: 0, z: 17}, {type: 2, id: 0, x: 0, y: 0, z: 15}, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 17
        }, {type: 2, id: 0, x: 0, y: 0, z: 19}, {type: 2, id: 0, x: -175, y: 0, z: 25}, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 25
        }], [{id: 3, x: -90, y: 0, z: 11}, {id: 8, x: 170, y: 0, z: 10}, {id: 9, x: 170, y: 0, z: 15}, {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 11
        }, {type: 2, id: 0, x: 0, y: 200, z: 11}, {type: 2, id: 0, x: 0, y: 0, z: 20}, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 24
        }, {type: 2, id: 0, x: 175, y: 0, z: 27}, {type: 2, id: 0, x: 175, y: 0, z: 30}], [{
            id: 3,
            x: -90,
            y: 0,
            z: 11
        }, {id: 0, x: -170, y: 0, z: 15}, {id: 8, x: 170, y: 0, z: 10}, {id: 9, x: 170, y: 0, z: 15}, {
            type: 2,
            id: 0, x: -175, y: 0, z: 11
        }, {type: 2, id: 1, x: -175, y: 200, z: 15}, {type: 2, id: 0, x: 0, y: 0, z: 11}, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 23
        }, {type: 2, id: 0, x: 0, y: 0, z: 25}, {type: 2, id: 0, x: 0, y: 0, z: 27}, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 30
        }], [{id: 3, x: 90, y: 0, z: 11}, {id: 5, x: -170, y: 0, z: 10}, {id: 5, x: -170, y: 0, z: 15}, {
            type: 2,
            id: 1,
            x: 175,
            y: 0,
            z: 11
        }, {type: 2, id: 0, x: 0, y: 200, z: 11}, {type: 2, id: 0, x: -175, y: 0, z: 24}, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 26
        }, {type: 2, id: 0, x: -175, y: 0, z: 28}], [{id: 3, x: 90, y: 0, z: 11}, {id: 5, x: -170, y: 0, z: 10}, {
            id: 5,
            x: -170,
            y: 0,
            z: 15
        }, {id: 8, x: 170, y: 0, z: 20}, {
            id: 0,
            x: 0, y: 0, z: 22
        }, {type: 2, id: 1, x: 0, y: 200, z: 22}, {type: 2, id: 0, x: 0, y: 0, z: 11}, {
            type: 2,
            id: 0,
            x: -175,
            y: 0,
            z: 24
        }, {type: 2, id: 0, x: -175, y: 0, z: 26}, {type: 2, id: 0, x: -175, y: 0, z: 28}], [{
            id: 0,
            x: -170,
            y: 0,
            z: 10
        }, {id: 5, x: -170, y: 0, z: 15}, {id: 3, x: 90, y: 0, z: 11}, {type: 2, id: 0, x: 0, y: 200, z: 11}, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 24
        }, {type: 2, id: 0, x: 0, y: 0, z: 26}, {type: 2, id: 0, x: 175, y: 0, z: 28}, {
            type: 2,
            id: 1,
            x: -175,
            y: 0,
            z: 24
        }], [{id: 0, x: -170, y: 0, z: 20}, {id: 5, x: -170, y: 0, z: 25}, {id: 3, x: 90, y: 0, z: 21}, {
            id: 0,
            x: 170,
            y: 0,
            z: 10
        }, {id: 0, x: 0, y: 0, z: 10}, {
            type: 2, id: 0, x: 0,
            y: 200, z: 10
        }, {type: 2, id: 0, x: 175, y: 200, z: 10}, {type: 2, id: 1, x: 0, y: 0, z: 21}, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 21
        }, {type: 2, id: 0, x: 0, y: 0, z: 30}], [{id: 8, x: 170, y: 0, z: 12}, {id: 9, x: 170, y: 0, z: 17}, {
            id: 3,
            x: 0,
            y: 0,
            z: 11
        }, {id: 5, x: -170, y: 0, z: 12}, {id: 5, x: -170, y: 0, z: 17}, {
            type: 2,
            id: 0,
            x: 0,
            y: 200,
            z: 11
        }, {type: 2, id: 1, x: 0, y: 0, z: 11}, {type: 2, id: 0, x: 0, y: 0, z: 17}, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 19
        }, {type: 2, id: 0, x: -175, y: 0, z: 25}, {type: 2, id: 0, x: 175, y: 0, z: 25}], [{
            id: 8,
            x: 170,
            y: 0,
            z: 22
        }, {id: 9, x: 170, y: 0, z: 27}, {id: 3, x: 0, y: 0, z: 21}, {id: 5, x: -170, y: 0, z: 22}, {
            id: 5,
            x: -170, y: 0, z: 27
        }, {id: 0, x: -170, y: 0, z: 7}, {id: 0, x: 0, y: 0, z: 7}, {type: 2, id: 0, x: 0, y: 200, z: 21}, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 21
        }, {type: 2, id: 0, x: 0, y: 0, z: 27}, {type: 2, id: 0, x: 0, y: 0, z: 29}, {
            type: 2,
            id: 0,
            x: 175,
            y: 0,
            z: 7
        }], [{id: 5, x: -170, y: 0, z: 11}, {id: 5, x: -170, y: 0, z: 16}, {id: 6, x: 0, y: 0, z: 10}, {
            type: 2,
            x: 175,
            y: 0,
            z: 12
        }, {type: 2, x: 175, y: 0, z: 14}, {type: 2, x: 0, y: 0, z: 20}, {type: 2, x: -175, y: 0, z: 24}, {
            type: 2,
            x: -175,
            y: 0,
            z: 26
        }], [{id: 5, x: -170, y: 0, z: 11}, {id: 5, x: -170, y: 0, z: 16}, {id: 6, x: 0, y: 0, z: 10}, {
            id: 6,
            x: 0,
            y: 0,
            z: 15
        }, {type: 2, x: 175, y: 0, z: 12}, {
            type: 2,
            x: 175, y: 0, z: 14
        }, {type: 2, x: 175, y: 0, z: 16}, {type: 2, x: 0, y: 0, z: 26}, {type: 2, x: -175, y: 0, z: 30}], [{
            id: 4,
            x: -170,
            y: 0,
            z: 11
        }, {id: 6, x: 0, y: 0, z: 10}, {id: 11, x: 170, y: 0, z: 12}, {type: 2, x: -175, y: 0, z: 16}, {
            type: 2,
            x: -175,
            y: 0,
            z: 18
        }, {type: 2, x: -175, y: 0, z: 20}, {type: 2, x: -175, y: 0, z: 22}, {type: 2, x: -175, y: 0, z: 24}], [{
            id: 4,
            x: -170,
            y: 0,
            z: 11
        }, {id: 4, x: -170, y: 0, z: 17}, {id: 5, x: -170, y: 0, z: 23}, {id: 5, x: -170, y: 0, z: 28}, {
            id: 6,
            x: 0,
            y: 0,
            z: 10
        }, {id: 11, x: 170, y: 0, z: 12}, {type: 2, id: 1, x: -175, y: 0, z: 14}, {
            type: 2,
            x: -175,
            y: 0,
            z: 20
        }, {type: 2, x: 175, y: 0, z: 23}, {
            type: 2,
            x: 175, y: 0, z: 26
        }, {type: 2, x: 175, y: 0, z: 29}], [{id: 5, x: -170, y: 0, z: 10}, {id: 6, x: 0, y: 0, z: 13}, {
            id: 6,
            x: 0,
            y: 0,
            z: 18
        }, {id: 7, x: 170, y: 0, z: 12}, {id: 7, x: 170, y: 0, z: 20}, {type: 2, x: -175, y: 0, z: 26}, {
            type: 2,
            x: -175,
            y: 0,
            z: 28
        }, {type: 2, x: 175, y: 0, z: 16}, {type: 2, x: 175, y: 0, z: 24}, {type: 2, x: 175, y: 0, z: 26}], [{
            id: 5,
            x: -170,
            y: 0,
            z: 10
        }, {id: 10, x: 170, y: 0, z: 13}, {id: 11, x: 170, y: 0, z: 20}, {id: 0, x: 0, y: 0, z: 12}, {
            id: 0,
            x: 0,
            y: 0,
            z: 20
        }, {type: 2, x: 0, y: 0, z: 26}, {type: 2, x: 0, y: 0, z: 28}, {type: 2, x: 0, y: 0, z: 30}]],
        tutorialDefinitions: [[{id: 5, x: -170, y: 0, z: 7}, {
            id: 0, x: -170,
            y: 0, z: 12
        }, {id: 4, x: -170, y: 0, z: 14}, {id: 3, x: 0, y: 0, z: 6}, {id: 8, x: 170, y: 0, z: 7}, {
            id: 9,
            x: 170,
            y: 0,
            z: 12
        }, {type: 2, id: 1, x: 0, y: 200, z: 6}, {type: 2, id: 0, x: 0, y: 0, z: 12}, {
            type: 2,
            id: 0,
            x: 0,
            y: 0,
            z: 14
        }, {type: 2, id: 0, x: 175, y: 0, z: 20}, {id: 5, x: -170, y: 0, z: 26}, {id: 5, x: -170, y: 0, z: 31}, {
            id: 6,
            x: 0,
            y: 0,
            z: 25
        }, {type: 2, x: 175, y: 0, z: 27}, {type: 2, x: 175, y: 0, z: 29}, {type: 2, x: 0, y: 0, z: 39}, {
            type: 2,
            x: -175,
            y: 0,
            z: 43
        }, {type: 2, x: -175, y: 0, z: 45}, {id: 3, x: -90, y: 0, z: 50}, {id: 6, x: 0, y: 0, z: 51}, {
            id: 6,
            x: 0,
            y: 0,
            z: 56
        }, {id: 11, x: 170, y: 0, z: 52}, {
            type: 2, id: 1, x: -175, y: 0,
            z: 50
        }, {type: 2, x: -175, y: 0, z: 56}, {type: 2, x: -175, y: 0, z: 58}, {type: 2, x: -175, y: 0, z: 60}]],
        charIsMoving: !1,
        charIsMovingLeft: !1,
        charMoveTargetX: 0,
        touchTime: 0,
        touchPos: {x: 0, y: 0},
        touchThreshold: 1,
        lifeCount: 3,
        coinsCollected: 0,
        powerLevel: 0,
        powerLevelUsage: 0.1,
        init: function (b, c, d) {
            this.parent(b, c, d);
            this.vanishingPoint.x = ig.system.width / 2;
            b = ig.system.context;
            this.bgSkyLinGrad = b.createLinearGradient(0, 0, 0, this.horizonLine.y);
            this.bgSkyLinGrad.addColorStop(0, "rgba(102,190,223,1)");
            this.bgSkyLinGrad.addColorStop(1,
                "rgba(203,232,196,1)");
            this.bgGroundLinGrad = b.createLinearGradient(0, this.horizonLine.y, 0, ig.system.height);
            this.bgGroundLinGrad.addColorStop(0, "rgba(166,212,74,1)");
            this.bgGroundLinGrad.addColorStop(1, "rgba(110,170,70,1)");
            this.bgHorizonLinGrad = b.createLinearGradient(0, 121, 0, 195);
            this.bgHorizonLinGrad.addColorStop(0, "rgba(255,255,194,0)");
            this.bgHorizonLinGrad.addColorStop(0.5, "rgba(255,255,194,0.5)");
            this.bgHorizonLinGrad.addColorStop(1, "rgba(255,255,194,0)");
            this.cityPos.x = ig.system.width / 2 - this.cityImage.width /
                2;
            this.cloudPos[0].x = ig.system.width / 2 - 30;
            this.cloudPos[0].y = 20;
            this.cloudPos[1].x = ig.system.width / 2 - 120;
            this.cloudPos[1].y = 45;
            this.cloudPos[2].x = ig.system.width / 2 + 60;
            this.cloudPos[2].y = 60;
            ig.game.cookies = 0;
            this.ui = ig.game.spawnEntity(EntityGameUi, 0, 0);
            ig.game.doTutorialFlag && (this.tutorialMode = !0)
        },
        ready: function () {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            var b = this.cameraDistance / 13,
                b = this.cameraPos.y * b + ig.system.height - (1 - b) * (ig.system.height - this.vanishingPoint.y);
            this.character =
                ig.game.spawnEntity(EntityGameCharacter, ig.system.width / 2, b);
            this.character.startY = b;
            this.character.ready();
            this.ui.ready();
            this.spawnStartingObjects();
            ig.game.sortEntities();
            this.recalculateScreenPoints();
            this.gameStartTime = ig.system.clock.delta();
            this.tutorialMode && (this.character.run(), 0 == this.tutorialStopDistance && (this.tutorialPauseMode = !0, this.doNextTutorialStage()))
        },
        draw: function () {
            ig.system.context.scale(1, 1);
            var b = ig.system.context, c = null, d = null, c = this.sidewalkColor;
            b.fillStyle = "rgba(" +
                c.r + "," + c.g + "," + c.b + ",1)";
            d = this.sidewalk1ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            d = this.sidewalk2ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            c = this.roadColor;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            d = this.roadScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            c = this.roadLine1Color;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            d = this.roadLine1ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            d = this.roadLine2ScreenPoints;
            b.beginPath();
            b.moveTo(d[0].x, d[0].y);
            for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
            b.closePath();
            b.fill();
            c = this.laneLine1Color;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            var d = 7, e = {};
            e.x = this.laneLine1Pos.x;
            e.y = this.laneLine1Pos.y;
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++) e.z += 4 * this.laneLineLength,
                this.drawPerspectiveLine(e, this.laneLineLength, this.laneLine1Width, this.laneLine1Color);
            e.x = this.laneLine2Pos.x;
            e.y = this.laneLine2Pos.y;
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++) e.z += 4 * this.laneLineLength, this.drawPerspectiveLine(e, this.laneLineLength, this.laneLine2Width, this.laneLine2Color);
            c = this.roadLine1Color;
            b.fillStyle = "rgba(" + c.r + "," + c.g + "," + c.b + ",1)";
            d = 24;
            e = {x: -373, y: 0};
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++) e.z += this.laneLineLength, this.drawPerspectiveLine(e, 0.05, 200, this.roadLine1Color);
            e = {
                x: 373,
                y: 0
            };
            e.z = this.roadZOffset;
            for (c = 0; c < d; c++) e.z += this.laneLineLength, this.drawPerspectiveLine(e, 0.05, 200, this.roadLine2Color);
            this.drawGround();
            this.cityImage.draw(this.cityPos.x, this.cityPos.y)
        },
        update: function () {
            if (this.gameStarting) 0.25 < ig.system.clock.delta() - this.gameStartTime && (this.gameStarting = !1, this.gameStartTime = ig.system.clock.delta()); else if (this.gameEnding) 0.25 < ig.system.clock.delta() - this.gameEndTime && this.endGame(); else if (!this.gamePaused && !this.gameOver && (this.gameTime += ig.system.tick,
            this.character.state != this.character.STATES.INTRO && (this.updatePlayerInput(), !this.tutorialPauseMode))) {
                var b = this.runSpeed * ig.system.tick;
                if (this.tutorialMode && this.totalDistance + b >= this.tutorialStopDistance) {
                    b = this.tutorialStopDistance - this.totalDistance;
                    if (0 < b) for (var c = 0; c < this.objects.length; c++) this.objects[c].moveForward(-b);
                    this.doNextTutorialStage()
                }
                0 < b && (this.totalDistance += b, this.roadZOffset -= b, this.roadZOffset < 4 * -this.laneLineLength && (this.roadZOffset += 4 * this.laneLineLength));
                0 != this.jumpAmt ?
                    (this.character.jumpOffset -= this.jumpAmt * ig.system.tick, 0 <= this.character.jumpOffset ? (this.jumpAmt = this.character.jumpOffset = 0, this.character.run(), this.canSlide = !0) : this.jumpAmt -= this.jumpGravity * ig.system.tick) : 0 > this.character.jumpOffset && (this.jumpAmt -= this.jumpGravity * ig.system.tick);
                this.isSliding && (this.slideTime += ig.system.tick, this.slideTime > this.slideDuration && (this.isSliding = !1, this.canSlide = !0, this.character.run()));
                this.charIsMoving && (this.charIsMovingLeft ? (this.character.pos.x -= 800 *
                    ig.system.tick, this.character.pos.x < this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX, this.charIsMoving = !1)) : (this.character.pos.x += 800 * ig.system.tick, this.character.pos.x > this.charMoveTargetX && (this.character.pos.x = this.charMoveTargetX, this.charIsMoving = !1)));
                this.updateBgSets();
                this.updateSegments();
                this.updateCollisions();
                this.runSpeed += this.acceleration * ig.system.tick;
                this.runSpeed > this.maxRunSpeed && (this.runSpeed = this.maxRunSpeed);
                this.character.state == this.character.STATES.POWERED &&
                (this.powerLevel -= this.powerLevelUsage * ig.system.tick, 0 >= this.powerLevel && (this.powerLevel = 0, this.character.powerDown()))
            }
        },
        togglePauseGame: function () {
            this.gamePaused ? this.unpauseGame() : this.pauseGame()
        },
        pauseGame: function () {
            if (!this.gameOver && !this.gamePaused) {
                this.gamePaused = !0;
                this.character.anim.timer.pause();
                for (var b = 0; b < this.objects.length; b++) this.objects[b].anim && this.objects[b].anim.timer.pause();
                for (b = 0; b < this.effects.length; b++) this.effects[b].anim && this.effects[b].anim.timer.pause()
            }
        },
        unpauseGame: function () {
            if (this.gamePaused) {
                this.gamePaused = !1;
                this.character.anim.timer.unpause();
                for (var b = 0; b < this.objects.length; b++) this.objects[b].anim && this.objects[b].anim.timer.unpause();
                for (b = 0; b < this.effects.length; b++) this.effects[b].anim && this.effects[b].anim.timer.unpause()
            }
        },
        aabbCheck: function (b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        updatePlayerInput: function () {
            this.gamePaused || (ig.ua.mobile ? this.processTouchInput() : this.processKeyboardInput())
        },
        processKeyboardInput: function () {
            ig.input.state("left") ?
                this.characterMoveLeft() : ig.input.state("right") && this.characterMoveRight();
            ig.input.state("up") && this.characterJump();
            ig.input.state("down") && this.characterSlide()
        },
        processTouchInput: function () {
            if (ig.input.pressed("click")) {
                this.touchTime = ig.system.clock.delta();
                this.pointer.refreshPos();
                var b = this.pointer.pos.x - this.pointer.size.x / 2, c = this.pointer.pos.y - this.pointer.size.y / 2;
                this.touchPos = {x: b, y: c}
            } else if (ig.input.released("click") && ig.system.clock.delta() - this.touchTime < this.touchThreshold) {
                this.pointer.refreshPos();
                var b = this.pointer.pos.x - this.pointer.size.x / 2, c = this.pointer.pos.y - this.pointer.size.y / 2,
                    d = 0, e = 0, d = b - this.touchPos.x, e = c - this.touchPos.y;
                300 > d * d + e * e ? b < this.character.pos.x ? this.characterMoveLeft() : this.characterMoveRight() : Math.abs(e) >= Math.abs(d) ? 0 > e ? this.characterJump() : this.characterSlide() : 0 > d ? this.characterMoveLeft() : this.characterMoveRight()
            }
        },
        characterMoveLeft: function () {
            if (this.tutorialMode) if (7 == this.tutorialStage || 9 == this.tutorialStage) {
                if (!this.doNextTutorialStage()) return
            } else return;
            !this.charIsMoving && this.character.pos.x > ig.system.width / 2 - 130 && (this.charIsMovingLeft = this.charIsMoving = !0, this.charMoveTargetX = this.character.pos.x > ig.system.width / 2 ? ig.system.width / 2 : ig.system.width / 2 - 130)
        },
        characterMoveRight: function () {
            if (this.tutorialMode) if (5 == this.tutorialStage) {
                if (!this.doNextTutorialStage()) return
            } else return;
            !this.charIsMoving && this.character.pos.x < ig.system.width / 2 + 130 && (this.charIsMoving = !0, this.charIsMovingLeft = !1, this.charMoveTargetX = this.character.pos.x < ig.system.width /
            2 ? ig.system.width / 2 : ig.system.width / 2 + 130)
        },
        characterJump: function () {
            if (this.tutorialMode) if (3 == this.tutorialStage) {
                if (!this.doNextTutorialStage()) return
            } else return;
            this.character.pos.y == this.character.startY && this.canSlide && (this.jumpAmt = 600, this.character.jump(), this.canSlide = !1)
        },
        characterSlide: function () {
            if (this.tutorialMode) if (11 == this.tutorialStage) {
                if (!this.doNextTutorialStage()) return
            } else return;
            0 == this.cameraPos.y && this.canSlide && (this.character.slide(), this.character.state == this.character.STATES.SLIDE &&
            (this.isSliding = !0, this.canSlide = !1, this.slideTime = 0))
        },
        spawnCollectEffect: function (b) {
            if (b) {
                var c = null, c = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
                return null != c ? (c.worldPos = {
                    x: b.worldPos.x,
                    y: b.worldPos.y,
                    z: b.zValue
                }, c.zValue = b.zValue, c.setEffectId(1), c.ready(), c.pos.x = b.pos.x, c.pos.y = b.pos.y - 10, c.zIndex = this.character.zIndex - 15, c.pos.x < ig.system.width / 2 ? c.pos.x -= 10 : c.pos.x > ig.system.width / 2 && (c.pos.x += 10), ig.game.sortEntities(), this.effects.push(c), c) : null
            }
        },
        spawnHitEffect: function () {
            var b = null, b = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
            return null != b ? (b.worldPos = {
                x: this.character.pos.x - ig.system.width / 2,
                y: 0,
                z: this.character.zValue
            }, b.zValue = this.character.zValue, b.ready(), b.pos.x = this.character.pos.x, b.pos.y = this.character.pos.y - 60, ig.game.sortEntitiesDeferred(), this.effects.push(b), b) : null
        },
        drawPerspectiveInfinite: function (b, c, d) {
            var e = this.cameraPos.y + ig.system.height, f = ig.system.width / 2 - this.cameraPos.x + b.x -
                    c / 2, j = (e - this.vanishingPoint.y) / (f - this.vanishingPoint.x), n = this.horizonLine.y,
                j = (n - (this.vanishingPoint.y - j * this.vanishingPoint.x)) / j,
                p = this.cameraPos.y + ig.system.height;
            b = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            var q = (p - this.vanishingPoint.y) / (b - this.vanishingPoint.x);
            c = this.horizonLine.y;
            var q = (c - (this.vanishingPoint.y - q * this.vanishingPoint.x)) / q, v = ig.system.context;
            v.fillStyle = "rgba(" + d.r + "," + d.g + "," + d.b + ",1)";
            v.beginPath();
            v.moveTo(f, e);
            v.lineTo(j, n);
            v.lineTo(q, c);
            v.lineTo(b, p);
            v.closePath();
            v.fill()
        },
        drawPerspectiveLine: function (b, c, d) {
            var e = this.cameraDistance, f = b.z;
            if (!(f + c < e)) {
                var j = b.x;
                b = b.y;
                var n = f, p = n + c;
                f < e && (n = e);
                c = e / (n - this.cameraPos.z);
                f = e / (p - this.cameraPos.z);
                p = ig.system.width / 2 - this.cameraPos.x * c + j * c;
                e = this.cameraPos.y * c + ig.system.height - b * f - (1 - c) * (ig.system.height - this.vanishingPoint.y);
                n = ig.system.width / 2 - this.cameraPos.x * f + j * f;
                b = this.cameraPos.y * f + ig.system.height - b * f - (1 - f) * (ig.system.height - this.vanishingPoint.y);
                if (!(e <= this.horizonLine.y)) {
                    b < this.horizonLine.y && (j = (e -
                        b) / (p - n), b = this.horizonLine.y, n = (b - (e - j * p)) / j);
                    j = p - d * c / 2;
                    c = p + d * c / 2;
                    var p = n + d * f / 2, q = b;
                    d = n - d * f / 2;
                    f = b;
                    b = ig.system.context;
                    b.beginPath();
                    b.moveTo(j, e);
                    b.lineTo(c, e);
                    b.lineTo(p, q);
                    b.lineTo(d, f);
                    b.closePath();
                    b.fill()
                }
            }
        },
        drawGround: function () {
            var b = ig.system.context;
            b.save();
            b.fillStyle = this.bgSkyLinGrad;
            b.fillRect(0, 0, ig.system.width, this.horizonLine.y);
            for (var c = 0; c < this.cloudImage.length; c++) this.cloudImage[c].draw(this.cloudPos[c].x, this.cloudPos[c].y);
            b.fillStyle = this.bgGroundLinGrad;
            points = this.grass1ScreenPoints;
            b.beginPath();
            b.moveTo(points[0].x, points[0].y);
            for (c = 1; c < points.length; c++) b.lineTo(points[c].x, points[c].y);
            b.closePath();
            b.fill();
            points = this.grass2ScreenPoints;
            b.beginPath();
            b.moveTo(points[0].x, points[0].y);
            for (c = 1; c < points.length; c++) b.lineTo(points[c].x, points[c].y);
            b.closePath();
            b.fill()
        },
        spawnObject: function (type, id, worldPos) {
            const camDist = this.cameraDistance;
            let objectZ = worldPos.z;

            // Nếu vật thể nằm sau camera thì không cần render
            if (objectZ < camDist) return;

            // Đảm bảo object luôn nằm sau camera
            const adjustedWorldPos = { x: worldPos.x, y: worldPos.y, z: Math.max(worldPos.z, camDist) };

            // Tính tỷ lệ phối cảnh theo chiều Z
            const perspectiveScale = camDist / (adjustedWorldPos.z - this.cameraPos.z);

            // Tính vị trí hiển thị theo trục X và Y (với hiệu ứng phối cảnh)
            const screenX = ig.system.width / 2 - this.cameraPos.x * perspectiveScale + adjustedWorldPos.x * perspectiveScale;
            const screenY = this.cameraPos.y * perspectiveScale + ig.system.height + adjustedWorldPos.y -
                (1 - perspectiveScale) * (ig.system.height - this.vanishingPoint.y);

            // Khởi tạo thực thể theo loại
            let entity = null;
            switch (type) {
                case 0:
                    entity = ig.game.spawnEntity(EntityGameBgObject, screenX, screenY);
                    entity.setImageId(id);
                    break;
                case 1:
                    entity = ig.game.spawnEntity(EntityGameObstacle, screenX, screenY);
                    entity.setImageId(id);
                    break;
                case 2:
                    entity = ig.game.spawnEntity(EntityGamePickup, screenX, screenY);
                    entity.setPickupId(id);
                    break;
            }

            if (!entity) return null;

            // Gán thông tin phối cảnh
            entity.worldPos = adjustedWorldPos;
            entity.zValue = objectZ;
            entity.ready();

            this.objects.push(entity);
            ig.game.sortEntitiesDeferred();

            return entity;
        }
        ,
        cleanObjects: function () {
            for (var b = [], c = 0; c < this.objects.length; c++) {
                var d = this.objects[c];
                d.killed && (d.kill(),
                    b.push(d))
            }
            if (0 < b.length) {
                for (var e = [], d = this.objects.pop(); d;) {
                    for (var f = !1, c = 0; c < b.length; c++) if (b[c] == d) {
                        f = !0;
                        break
                    }
                    f || e.push(d);
                    d = this.objects.pop()
                }
                this.objects = e
            }
        },
        cleanEffects: function () {
            for (var b = [], c = 0; c < this.effects.length; c++) {
                var d = this.effects[c];
                d.killed && (d.kill(), b.push(d))
            }
            if (0 < b.length) {
                for (var e = [], d = this.effects.pop(); d;) {
                    for (var f = !1, c = 0; c < b.length; c++) if (b[c] == d) {
                        f = !0;
                        break
                    }
                    f || e.push(d);
                    d = this.effects.pop()
                }
                this.effects = e
            }
        },
        spawnStartingObjects: function () {
            // Tạo vị trí background đầu tiên với offset ngẫu nhiên
            const initialOffset = 30 * Math.random();
            this.lastBgSetDistance = -initialOffset;

            // Spawn 2 cụm background ban đầu
            for (let i = 0; i < 2; i++) {
                const randomBgSetIndex = Math.floor(Math.random() * this.bgSetDefinitions.length);
                const bgSet = this.bgSetDefinitions[randomBgSetIndex];
                const bgEntities = [];

                for (let j = 0; j < bgSet.length; j++) {
                    const bgDef = bgSet[j];
                    const entity = this.spawnObject(0, bgDef.id, {
                        x: bgDef.x,
                        y: bgDef.y,
                        z: this.lastBgSetDistance - this.totalDistance + bgDef.z
                    });
                    bgEntities.push(entity);
                }

                this.bgSets.push(bgEntities);
                this.lastBgSetDistance += this.bgSetSize;
            }

            // Spawn các object hướng dẫn hoặc đoạn đầu của level
            if (this.tutorialMode) {
                this.lastSegmentDistance = 10;
                const tutorialDefs = this.tutorialDefinitions[0];
                const tutorialSegment = [];

                for (let i = 0; i < tutorialDefs.length; i++) {
                    const def = tutorialDefs[i];
                    const objType = def.type != null ? def.type : 1;
                    const entity = this.spawnObject(objType, def.id, {
                        x: def.x,
                        y: def.y,
                        z: this.lastSegmentDistance + def.z
                    });
                    tutorialSegment.push(entity);
                }

                this.segments.push(tutorialSegment);
                this.lastSegmentDistance += 120;
            } else {
                this.lastSegmentDistance = 70;
                const randomSegmentIndex = Math.floor(Math.random() * this.segmentDefinitions.length);
                const segmentDef = this.segmentDefinitions[randomSegmentIndex];
                const segmentEntities = [];

                for (let i = 0; i < segmentDef.length; i++) {
                    const def = segmentDef[i];
                    const objType = def.type != null ? def.type : 1;
                    const entity = this.spawnObject(objType, def.id, {
                        x: def.x,
                        y: def.y,
                        z: this.lastSegmentDistance + def.z
                    });
                    segmentEntities.push(entity);
                }

                this.segments.push(segmentEntities);

                const segmentOffset = Math.floor(Math.random() * this.segmentSizeVariable);
                this.lastSegmentDistance += this.segmentSize + segmentOffset;
            }

            // Sắp xếp lại toàn bộ thực thể đã spawn
            ig.game.sortEntitiesDeferred();
        },
        updateBgSets: function () {
            if (!(this.totalDistance <= this.lastBgSetDistance - this.bgSetSize)) {
                this.bgSets.splice(0, 1);
                for (var b = [], c = this.bgSetDefinitions.length, c = Math.floor(Math.random() * c), c = this.bgSetDefinitions[c], d = 0; d < c.length; d++) {
                    var e = c[d], e = this.spawnObject(0, e.id, {
                        x: e.x,
                        y: e.y,
                        z: this.lastBgSetDistance - this.totalDistance + e.z
                    });
                    b.push(e)
                }
                this.bgSets.push(b);
                this.lastBgSetDistance += this.bgSetSize;
                ig.game.sortEntitiesDeferred()
            }
        },
        updateSegments: function () {
            for (var b = [], c = 0; c < this.segments.length; c++) {
                for (var d =
                    this.segments[c], e = !0, f = 0; f < d.length; f++) {
                    var j = d[f];
                    if (j && !j.killed) {
                        e = !1;
                        break
                    }
                }
                e && b.push(d)
            }
            if (0 < b.length) {
                d = [];
                for (j = this.segments.pop(); j;) {
                    e = !1;
                    for (c = 0; c < b.length; c++) if (b[c] == j) {
                        e = !0;
                        break
                    }
                    e || d.push(j);
                    j = this.segments.pop()
                }
                this.segments = d
            }
            if (!(this.totalDistance <= this.lastSegmentDistance - this.bgSetSize)) {
                c = this.segmentDefinitions.length;
                c = Math.floor(Math.random() * c);
                b = this.segmentDefinitions[c];
                d = [];
                for (c = 0; c < b.length; c++) j = b[c], e = j.type, null == e && (e = 1), j = this.spawnObject(e, j.id, {
                    x: j.x, y: j.y,
                    z: this.lastSegmentDistance - this.totalDistance + j.z
                }), d.push(j);
                this.segments.push(d);
                c = Math.floor(Math.random() * this.segmentSizeVariable);
                this.lastSegmentDistance += this.segmentSize + c;
                ig.game.sortEntitiesDeferred()
            }
        },
        updateCollisions: function () {
            var b = this.character.pos.x - ig.system.width / 2, c = 0;
            0 > this.character.jumpOffset && (c = 200);
            var d = {};
            d.w = this.character.charWidth;
            d.h = this.character.charHeight;
            d.x = this.character.worldPos.x + b - d.w / 2;
            d.y = -(this.character.worldPos.y + c) - d.h;
            for (b = 0; b < this.segments.length; b++) for (var c =
                this.segments[b], e = 0; e < c.length; e++) {
                var f = c[e];
                if (!f.hit) {
                    var j = this.character.zValue - this.character.zWidth, n = j + 2 * this.character.zWidth;
                    2 == f.objType && (j -= this.character.zWidth / 2, n += this.character.zWidth / 2);
                    if (f.zValue + f.zWidth >= j && f.zValue <= n && (!(1 == f.objType && f.slidable) || !this.isSliding)) j = {}, j.w = f.contactRect.w, j.h = f.contactRect.h, j.x = f.worldPos.x - j.w / 2, j.y = -f.worldPos.y - j.h, this.aabbCheck(d, j) && (f.hit = !0, 2 == f.objType ? (f.killed = !0, this.cleanObjects(), f.kill(), this.collectPickup(f.pickupId), this.spawnCollectEffect(f)) :
                        this.character.isInvulnerable || (this.hitObstacle(f), this.spawnHitEffect(), this.character.shake()))
                }
            }
        },
        recalculateScreenPoints: function () {
            var b = null, c = null, d, e, f, j, n, p = null, q = null, b = this.sidewalk1Pos, c = this.sidewalk1Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x +
                b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.sidewalk1ScreenPoints[0] = {x: this.bitwiseRound(d), y: this.bitwiseRound(e)};
            this.sidewalk1ScreenPoints[1] = {x: this.bitwiseRound(f), y: this.bitwiseRound(j)};
            this.sidewalk1ScreenPoints[2] = {x: this.bitwiseRound(n), y: this.bitwiseRound(b)};
            this.sidewalk1ScreenPoints[3] = {x: this.bitwiseRound(c), y: this.bitwiseRound(p)};
            this.grass1ScreenPoints[0] = {x: 0, y: this.horizonLine.y};
            this.grass1ScreenPoints[1] = {x: this.bitwiseRound(f) + 1, y: this.bitwiseRound(j)};
            this.grass1ScreenPoints[2] = {x: this.bitwiseRound(d) + 1, y: this.bitwiseRound(e)};
            this.grass1ScreenPoints[3] = {x: 0, y: ig.system.height};
            b = this.sidewalk2Pos;
            c = this.sidewalk2Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width /
                2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.sidewalk2ScreenPoints[0] = {x: this.bitwiseRound(d), y: this.bitwiseRound(e)};
            this.sidewalk2ScreenPoints[1] = {x: this.bitwiseRound(f), y: this.bitwiseRound(j)};
            this.sidewalk2ScreenPoints[2] = {x: this.bitwiseRound(n), y: this.bitwiseRound(b)};
            this.sidewalk2ScreenPoints[3] = {x: this.bitwiseRound(c), y: this.bitwiseRound(p)};
            this.grass2ScreenPoints[0] = {
                x: ig.system.width,
                y: this.horizonLine.y
            };
            this.grass2ScreenPoints[1] = {x: this.bitwiseRound(n) - 1, y: this.bitwiseRound(b)};
            this.grass2ScreenPoints[2] = {x: this.bitwiseRound(c) - 1, y: this.bitwiseRound(p)};
            this.grass2ScreenPoints[3] = {x: ig.system.width, y: ig.system.height};
            b = this.roadPos;
            c = this.roadWidth;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y +
                ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.roadScreenPoints[0] = {x: this.bitwiseRound(d), y: this.bitwiseRound(e)};
            this.roadScreenPoints[1] = {x: this.bitwiseRound(f), y: this.bitwiseRound(j)};
            this.roadScreenPoints[2] = {x: this.bitwiseRound(n), y: this.bitwiseRound(b)};
            this.roadScreenPoints[3] = {x: this.bitwiseRound(c), y: this.bitwiseRound(p)};
            b = this.roadLine1Pos;
            c = this.roadLine1Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.roadLine1ScreenPoints[0] = {
                x: this.bitwiseRound(d),
                y: this.bitwiseRound(e)
            };
            this.roadLine1ScreenPoints[1] = {x: this.bitwiseRound(f), y: this.bitwiseRound(j)};
            this.roadLine1ScreenPoints[2] = {x: this.bitwiseRound(n), y: this.bitwiseRound(b)};
            this.roadLine1ScreenPoints[3] = {x: this.bitwiseRound(c), y: this.bitwiseRound(p)};
            b = this.roadLine2Pos;
            c = this.roadLine2Width;
            e = this.cameraPos.y + ig.system.height;
            d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
            f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
            p = this.vanishingPoint.y - f * this.vanishingPoint.x;
            j = this.horizonLine.y;
            f = (j - p) / f;
            p = this.cameraPos.y + ig.system.height;
            c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
            n = (p - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
            q = this.vanishingPoint.y - n * this.vanishingPoint.x;
            b = this.horizonLine.y;
            n = (b - q) / n;
            this.roadLine2ScreenPoints[0] = {x: this.bitwiseRound(d), y: this.bitwiseRound(e)};
            this.roadLine2ScreenPoints[1] = {x: this.bitwiseRound(f), y: this.bitwiseRound(j)};
            this.roadLine2ScreenPoints[2] = {x: this.bitwiseRound(n), y: this.bitwiseRound(b)};
            this.roadLine2ScreenPoints[3] = {
                x: this.bitwiseRound(c),
                y: this.bitwiseRound(p)
            }
        },
        bitwiseRound: function (b) {
            return 0.5 + b << 0
        },
        collectPickup: function (b) {
            0 == b ? (ig.game.money += 1, this.coinsCollected += 1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.coin)) : 1 == b && (ig.game.cookies += 1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.crunch), this.powerLevel = (10 * this.powerLevel + 1) / 10, 1 <= this.powerLevel && (this.powerLevel = 1, this.character.queuePowerUp()))
        },
        hitObstacle: function (b) {
            this.character.state == this.character.STATES.POWERED ? (b.knockOut(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hit)) :
                (this.lifeCount -= 1, ig.soundHandler.playSound(ig.soundHandler.SOUNDID.hit), 0 > this.lifeCount ? (this.lifeCount = 0, this.finishGame()) : (this.character.invulnerableStartTime = this.gameTime, this.character.isInvulnerable = !0, b.knockOut()))
        },
        quitGame: function () {
            ig.game.restartGameFlag = !1;
            this.gameEndTime = ig.system.clock.delta();
            this.gameEnding = !0
        },
        finishGame: function () {
            this.gameOver = !0;
            this.gameOverTime = ig.system.clock.delta();
            ig.game.savePlayerStats();
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.chirp)
        },
        restartGame: function () {
            ig.game.doTutorialFlag = !1;
            ig.game.restartGameFlag = !0;
            this.gameEndTime = ig.system.clock.delta();
            this.gameEnding = !0
        },
        endGame: function () {
            // 1. Clear any pending inputs
            ig.input.clearPressed();
            // 2. Persist the player’s stats
            ig.game.savePlayerStats();

            var game     = ig.game;
            var director = game.director;

            if (game.visitedShop) {
                // If we came from the shop…
                if (game.restartGameFlag) {
                    // …and we need to restart the level
                    game.restartGameFlag = false;
                    director.jumpTo(LevelGame);
                } else {
                    // …otherwise go straight back “home”
                    director.jumpTo(LevelHome);
                }

            } else {
                // If we never visited the shop, force it next
                game.restartGameFlag = false;
                game.doShop          = true;
                director.jumpTo(LevelHome);
            }
        },
        doNextTutorialStage: function () {
            var b = ig.system.clock.delta() - this.tutorialPausedTime;
            if ((1 == this.tutorialStage || 2 == this.tutorialStage || 3 == this.tutorialStage || 5 == this.tutorialStage || 7 == this.tutorialStage || 9 == this.tutorialStage || 11 == this.tutorialStage || 13 == this.tutorialStage) && 0.5 > b) return !1;
            this.tutorialStage += 1;
            this.tutorialPausedTime = ig.system.clock.delta();
            switch (this.tutorialStage) {
                case 1:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(0);
                    break;
                case 2:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(1);
                    break;
                case 3:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(2) :
                        this.ui.showTutorialUI(3);
                    break;
                case 4:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 14;
                    break;
                case 5:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(4) : this.ui.showTutorialUI(5);
                    break;
                case 6:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 33.5;
                    break;
                case 7:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(6) : this.ui.showTutorialUI(7);
                    break;
                case 8:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance =
                        38;
                    break;
                case 9:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(8) : this.ui.showTutorialUI(9);
                    break;
                case 10:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 43;
                    break;
                case 11:
                    this.tutorialPauseMode = !0;
                    ig.ua.mobile ? this.ui.showTutorialUI(10) : this.ui.showTutorialUI(11);
                    break;
                case 12:
                    this.ui.hideTutorialUI();
                    this.tutorialPauseMode = !1;
                    this.tutorialStopDistance = 62;
                    break;
                case 13:
                    this.tutorialPauseMode = !0;
                    this.ui.showTutorialUI(12);
                    break;
                case 14:
                    this.ui.hideTutorialUI(),
                        this.tutorialMode = this.tutorialPauseMode = !1, this.characterMoveRight()
            }
            return !0
        }
    })
});
