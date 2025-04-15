ig.module("game.levels.home")
    .requires("impact.image", "game.entities.home-control", "game.entities.pointer-selector")
    .defines(function () {
    LevelHome = {
        entities: [{type: "EntityHomeControl", x: 0, y: 0}, {type: "EntityPointerSelector", x: 0, y: 0}],
        layer: []
    }
});