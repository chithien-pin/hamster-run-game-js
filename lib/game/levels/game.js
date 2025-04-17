ig.module("game.levels.game")
    .requires("impact.image", "game.entities.game-control", "game.entities.pointer-selector")
    .defines(function () {
        LevelGame = {
            entities: [{type: "EntityGameControl", x: 0, y: 0}, {type: "EntityPointerSelector", x: 0, y: 0}],
            layer: []
        }
    });