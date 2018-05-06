
var PhaserRpg = function() {}

PhaserRpg.prototype.constructor.Game = function(name, scene, options) {
    this.name = name;

    this.options = options || null;
    this.tools = {
        new PhaserRpg.Navigation(),
        new PhaserRpg.Scanner()
    }

    this.scene = scene;
};


PhaserRpg.prototype.constructor.Navigation = function(options) {
    this.options = options || "none";

};


PhaserRpg.prototype.constructor.Scanner = function(options) {
    this.options = options || "none";
}
