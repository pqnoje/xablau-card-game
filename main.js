var Color;
(function (Color) {
    Color["RED_COLOR"] = "RED";
    Color["BLUE_COLOR"] = "BLUE";
})(Color || (Color = {}));
var Mana = /** @class */ (function () {
    function Mana(amount, color) {
        this.RED_COLOR = Color.RED_COLOR;
        this.BLUE_COLOR = Color.BLUE_COLOR;
        this.FIRST_ELEMENT = 0;
        this.amount = amount;
        this.color = color;
    }
    return Mana;
}());
var Creature = /** @class */ (function () {
    function Creature(name, description, manaNeeded, color, attack, defence) {
        this.name = name;
        this.description = description;
        this.manaNeeded = manaNeeded;
        this.color = color;
        this.atack = attack;
        this.defence = defence;
    }
    return Creature;
}());
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    return Weapon;
}());
var BackToSchoolGamePlayer = /** @class */ (function () {
    function BackToSchoolGamePlayer(name) {
        this.name = name;
        this.manaDeck = new Array();
        this.creatureDeck = new Array();
        this.manaAmount = 0;
    }
    return BackToSchoolGamePlayer;
}());
var Game = /** @class */ (function () {
    function Game(player, challangerPlayer) {
        this.INITIAL_MANA_AMOUNT = 0;
        this.player = player;
        this.challangerPlayer = challangerPlayer;
    }
    Game.prototype.start = function () {
        console.log(this.player.name + " vs " + this.challangerPlayer.name);
        console.log("Player " + this.player.name + " has amount of mana " + this.player.manaAmount + "\n            and challange player\n            " + this.player.name + " has amount of mana " + this.player.manaAmount + "\n            started with " + this.player.manaDeck.reduce(function (accumulator, initial, index, array) { return accumulator + initial.amount; }, this.INITIAL_MANA_AMOUNT) + " amount of mana.\n            Player can conjure this four creature card: " + this.player.creatureDeck.map(function (creature) { return "\n                Creature name: " + creature.name + "\n                Creature attack: " + creature.atack + "\n                Creature defence: " + creature.defence + "\n                Creature color: " + creature.color + "\n                Creature conjured: " + (creature.isConjured ? 'in field and ready.' : 'not yet!'); }) + "\n        ");
    };
    return Game;
}());
var Main = /** @class */ (function () {
    function Main() {
        console.log('Game Started.');
        this.game = new Game(new BackToSchoolGamePlayer('Jefferson'), new BackToSchoolGamePlayer('Icognito'));
        this.game.player.manaDeck.push(new Mana(1, this.generateColor()));
        this.game.player.manaDeck.push(new Mana(2, this.generateColor()));
        this.game.player.manaDeck.push(new Mana(3, this.generateColor()));
        this.game.player.manaDeck.push(new Mana(4, this.generateColor()));
        this.game.player.creatureDeck.push(new Creature('Vampire', '', 4, Color.RED_COLOR, 4, 2));
        this.game.player.creatureDeck.push(new Creature('Banshee', '', 3, Color.RED_COLOR, 3, 5));
        this.game.player.creatureDeck.push(new Creature('Troll', '', 1, Color.BLUE_COLOR, 1, 2));
        this.game.player.creatureDeck.push(new Creature('Orc', '', 2, Color.BLUE_COLOR, 3, 3));
        this.game.start();
    }
    Main.prototype.generateColor = function () {
        var colors = new Array();
        colors.push(Color.RED_COLOR);
        colors.push(Color.BLUE_COLOR);
        var color = colors.sort(function () { return .5 - Math.random(); })[0];
        return color;
    };
    return Main;
}());
new Main();
