ig.module("game.levels.opening")
    .requires("impact.image", "game.entities.opening-kitty")
    .defines(function () {
        LevelOpening = {entities: [{type: "EntityOpeningKitty", x: 520, y: 212}], layer: []}
    });
