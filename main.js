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
        this.manaAmountBlue = 0;
        this.manaAmountRed = 0;
        this.choosedManaDeck = new Array();
        this.choosedCreatureDeck = new Array();
    }
    return BackToSchoolGamePlayer;
}());
var MortalKombatCardGame = /** @class */ (function () {
    function MortalKombatCardGame(player, challangerPlayer) {
        this.INITIAL_MANA_AMOUNT = 0;
        this.firstPlayer = player;
        this.secondPlayer = challangerPlayer;
    }
    MortalKombatCardGame.prototype.chooseManaCardToConjure = function (player, index) {
        var choosedManaCard = player.manaDeck[index];
        player.choosedManaDeck.push(choosedManaCard);
        return choosedManaCard;
    };
    MortalKombatCardGame.prototype.chooseCreatureCardToConjure = function (player, index) {
        var choosedCreatureCard = player.creatureDeck[index];
        player.choosedCreatureDeck.push(choosedCreatureCard);
        return choosedCreatureCard;
    };
    MortalKombatCardGame.prototype.conjureManaCard = function (player, index) {
        player.choosedManaDeck[index].conjured = true;
        player.choosedManaDeck[index].color === Color.BLUE_COLOR ? player.manaAmountBlue += player.choosedManaDeck[index].amount : player.manaAmountRed += player.choosedManaDeck[index].amount;
    };
    MortalKombatCardGame.prototype.conjureCreatureCard = function (player, index) {
        if (player.choosedCreatureDeck[index].color === Color.BLUE_COLOR) {
            player.choosedCreatureDeck[index].manaNeeded <= player.manaAmountBlue;
            player.choosedCreatureDeck[index].conjured = true;
            player.manaAmountBlue -= player.choosedCreatureDeck[index].manaNeeded;
        }
        else {
            player.choosedCreatureDeck[index].manaNeeded <= player.manaAmountRed;
            player.choosedCreatureDeck[index].conjured = true;
            player.manaAmountRed -= player.choosedCreatureDeck[index].manaNeeded;
        }
    };
    MortalKombatCardGame.prototype.startBattle = function (attackCreature, defenceCreature) {
        if (attackCreature.atack >= defenceCreature.defence) {
            defenceCreature.defeated = true;
            console.info("Second Player: Creature " + defenceCreature.name + " has defeated.");
        }
        else if (attackCreature.atack < defenceCreature.defence) {
            defenceCreature.defence -= attackCreature.atack;
            console.info("Second Player: Creature " + defenceCreature.name + " has defended and has " + defenceCreature.defence + " defence points remaining.");
        }
    };
    MortalKombatCardGame.prototype.showChoosedDeck = function (player) {
        console.log("Player " + player.name + " started with " + player.manaDeck.reduce(function (accumulator, initial, index, array) { return accumulator + initial.amount; }, this.INITIAL_MANA_AMOUNT) + " amount of mana.\n            Player can conjure this four creature card: " + player.creatureDeck.map(function (creature, index) { return "\n                ____________________________________________________\n                Card " + (index + 1) + " (A: " + creature.atack + ", D: " + creature.defence + ") Mana needed: " + creature.manaNeeded + "\n                Creature color: " + creature.color + " ~<>~ Creature name: " + creature.name + (creature.conjured ? '^' : '*') + "\n                Creature attack: " + creature.atack + " ~<>~ Creature defence: " + creature.defence + "\n                ____________________________________________________"; }) + "\n        ");
    };
    MortalKombatCardGame.prototype.showConjuredDeck = function (player) {
        console.log("Player " + player.name + " started with " + player.manaDeck.reduce(function (accumulator, initial, index, array) { return accumulator + initial.amount; }, this.INITIAL_MANA_AMOUNT) + " amount of mana.\n            Player owns creature cards: " + player.choosedCreatureDeck.map(function (creature, index) { return "\n                ____________________________________________________\n                Card " + (index + 1) + " (A: " + creature.atack + ", D: " + creature.defence + ") Mana needed: " + creature.manaNeeded + "\n                Creature color: " + creature.color + " ~<>~ Creature name: " + creature.name + (creature.conjured ? '^' : '*') + "\n                Creature attack: " + creature.atack + " ~<>~ Creature defence: " + creature.defence + "\n                ____________________________________________________"; }) + "\n        ");
    };
    MortalKombatCardGame.prototype.renderManaCard = function (mana) {
        var renderedCard = '';
        renderedCard = mana.color + " ~<>~ " + mana.color + " ~<>~ " + (mana.conjured ? '^' : '*');
        return renderedCard;
    };
    return MortalKombatCardGame;
}());
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        console.log('Game Started.');
        this.cardGame = new MortalKombatCardGame(new BackToSchoolGamePlayer('Jefferson'), new BackToSchoolGamePlayer('Juliana'));
        console.log("First Player " + this.cardGame.firstPlayer.name + " is oppening mana deck...");
        this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.BLUE_COLOR));
        this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.BLUE_COLOR));
        this.cardGame.firstPlayer.manaDeck.push(new Mana(3, Color.BLUE_COLOR));
        this.cardGame.firstPlayer.manaDeck.push(new Mana(4, Color.BLUE_COLOR));
        this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR));
        this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR));
        this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR));
        this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR));
        console.log("First Player " + this.cardGame.firstPlayer.name + " is oppening creature deck...");
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Sonya Blade', '', 4, Color.BLUE_COLOR, 4, 2));
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Sub-Zero', '', 3, Color.BLUE_COLOR, 3, 5));
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Scorpion', '', 1, Color.RED_COLOR, 1, 2));
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Kung Lao', '', 2, Color.RED_COLOR, 3, 3));
        this.cardGame.showChoosedDeck(this.cardGame.firstPlayer);
        console.log("Second Player " + this.cardGame.secondPlayer.name + " is oppening mana deck...");
        this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.BLUE_COLOR));
        this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.BLUE_COLOR));
        this.cardGame.secondPlayer.manaDeck.push(new Mana(3, Color.BLUE_COLOR));
        this.cardGame.secondPlayer.manaDeck.push(new Mana(4, Color.BLUE_COLOR));
        this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR));
        this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR));
        this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR));
        this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR));
        this.cardGame.secondPlayer.manaDeck.forEach(function (manaCard) {
            console.log('mana card');
            console.log(_this.cardGame.renderManaCard(manaCard));
        });
        console.log("Second Player " + this.cardGame.secondPlayer.name + " is oppening creature deck...");
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Jax Briggs', '', 4, Color.BLUE_COLOR, 7, 1));
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Liu Kang', '', 3, Color.BLUE_COLOR, 4, 4));
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Shang Tsung', '', 1, Color.RED_COLOR, 2, 1));
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Noob Saibot', '', 2, Color.RED_COLOR, 1, 8));
        this.cardGame.showChoosedDeck(this.cardGame.secondPlayer);
        console.info('Choose four Mana Card and two Creature Card!');
        this.cardGame.renderManaCard(this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 0));
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 1);
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 4);
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 5);
        this.cardGame.conjureManaCard(this.cardGame.firstPlayer, 0);
        this.cardGame.conjureManaCard(this.cardGame.firstPlayer, 1);
        console.info("First Player has conjured a list of mana cards: \n            " + this.cardGame.firstPlayer.choosedManaDeck.map(function (card) { return card.conjured ? "\n                " + card.amount + " " + card.color + " mana point(s)" : ''; }));
        this.cardGame.chooseCreatureCardToConjure(this.cardGame.firstPlayer, 0);
        this.cardGame.chooseCreatureCardToConjure(this.cardGame.firstPlayer, 1);
        this.cardGame.conjureCreatureCard(this.cardGame.firstPlayer, 1);
        console.info("First Player has conjured a list of creature cards: \n            " + this.cardGame.firstPlayer.choosedCreatureDeck.map(function (card) { return card.conjured ? "\n                " + card.name + " ~<>~ " + card.color : ''; }));
        this.cardGame.showConjuredDeck(this.cardGame.firstPlayer);
        console.info('Second Player: choose four Mana Card and two Creature Card!');
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 1);
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 1);
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 4);
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 5);
        this.cardGame.conjureManaCard(this.cardGame.secondPlayer, 0);
        this.cardGame.conjureManaCard(this.cardGame.secondPlayer, 1);
        console.info("Second Player has conjured a list of mana cards: \n            " + this.cardGame.secondPlayer.choosedManaDeck.map(function (card) { return card.conjured ? "\n                " + card.amount + " " + card.color + " mana point(s)" : ''; }));
        this.cardGame.chooseCreatureCardToConjure(this.cardGame.secondPlayer, 0);
        this.cardGame.chooseCreatureCardToConjure(this.cardGame.secondPlayer, 1);
        this.cardGame.conjureCreatureCard(this.cardGame.secondPlayer, 1);
        console.info("Second Player has conjured a list of creature cards: \n            " + this.cardGame.secondPlayer.choosedCreatureDeck.map(function (card) { return card.conjured ? "\n                " + card.name + " ~<>~ " + card.color : ''; }));
        this.cardGame.showConjuredDeck(this.cardGame.secondPlayer);
        console.log('First Player choose one card to start the battle.');
        this.cardGame.startBattle(this.cardGame.firstPlayer.choosedCreatureDeck[1], this.cardGame.secondPlayer.choosedCreatureDeck[1]);
        console.log('Second Player choose one card to start the battle.');
        this.cardGame.startBattle(this.cardGame.secondPlayer.choosedCreatureDeck[1], this.cardGame.firstPlayer.choosedCreatureDeck[1]);
        console.log('First Player choose one card to start the battle.');
        this.cardGame.startBattle(this.cardGame.firstPlayer.choosedCreatureDeck[1], this.cardGame.secondPlayer.choosedCreatureDeck[1]);
    }
    return Main;
}());
console.info('connecting to the game!');
new Main();
