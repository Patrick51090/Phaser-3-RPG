

var phaser_rpg;
class GameScene extends Phaser.Scene {
    constructor() {
        super({key: "GameScene"});
    }


    init() {

    }


    preload() {
        this.load.script('plugin-phaser-rpg', './assets/plugins/Phaser-Rpg.js');
    }


    create() {
        phaser_rpg = new PhaserRpg.Game("Phaser Rpg Test Game", this);


    }


    update() {

    }
}
