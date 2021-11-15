enum Color {
    RED_COLOR = 'RED',
    BLUE_COLOR = 'BLUE'
}

interface Card {
    color: string
}

class Mana implements Card {
    amount: number
    color: string
    private readonly RED_COLOR: string = Color.RED_COLOR
    private readonly BLUE_COLOR: string = Color.BLUE_COLOR
    private readonly FIRST_ELEMENT: number = 0

    constructor (
        amount: number, 
        color: string) {
        this.amount = amount
        this.color = color
    }
}

class Creature implements Card {
    color: string
    name: string
    description: string
    isConjured: boolean
    manaNeeded: number
    atack: number
    defence: number

    constructor(
        name: string,
        description: string,
        manaNeeded: number,
        color: string,
        attack: number,
        defence: number) {
            this.name = name
            this.description = description
            this.manaNeeded = manaNeeded
            this.color = color
            this.atack = attack
            this.defence = defence
        }
}

class Weapon implements Card {
    color: string
    aditionalAttack: number
}

interface Player {
    name: string
    manaDeck: Array<Mana>
    creatureDeck: Array<Creature>
    manaAmount: number
}

class BackToSchoolGamePlayer implements Player {
    name: string
    manaDeck: Array<Mana>
    creatureDeck: Array<Creature>
    manaAmount: number
    
    constructor (name: string) {
        this.name = name
        this.manaDeck =  new Array<Mana>()
        this.creatureDeck =  new Array<Creature>()
        this.manaAmount = 0
    }
}

class Game {
    player: BackToSchoolGamePlayer
    challangerPlayer: BackToSchoolGamePlayer
    private readonly INITIAL_MANA_AMOUNT: number = 0

    constructor(
        player: BackToSchoolGamePlayer, 
        challangerPlayer: BackToSchoolGamePlayer) {
        this.player = player
        this.challangerPlayer = challangerPlayer
    }

    public start() {
        console.log(`${this.player.name} vs ${this.challangerPlayer.name}`)
        console.log(`Player ${this.player.name} has amount of mana ${this.player.manaAmount}
            and challange player
            ${this.player.name} has amount of mana ${this.player.manaAmount}
            started with ${this.player.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Player can conjure this four creature card: ${this.player.creatureDeck.map(creature => `
                Creature color: ${creature.color} ~<>~ Creature name: ${creature.name}${creature.isConjured? '^' : '*'}
                Creature attack: ${creature.atack} ~<>~ Creature defence: ${creature.defence}`)}
        `)

        console.log(`Challanger ${this.challangerPlayer.name} has amount of mana ${this.challangerPlayer.manaAmount}
            and challange challangerPlayer
            ${this.challangerPlayer.name} has amount of mana ${this.challangerPlayer.manaAmount}
            started with ${this.challangerPlayer.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Challanger player can conjure this four creature card: ${this.challangerPlayer.creatureDeck.map(creature => `
                Creature color: ${creature.color} ~<>~ Creature name: ${creature.name}${creature.isConjured? '^' : '*'}
                Creature attack: ${creature.atack} ~<>~ Creature defence: ${creature.defence}`)}
        `)
    }
}

class Main {
    private game: Game

    constructor () {
        console.log('Game Started.')
        this.game = new Game(
            new BackToSchoolGamePlayer('Jefferson'),
            new BackToSchoolGamePlayer('Amanda'))
        
        console.log(`Player ${this.game.player.name} is oppening mana deck...`)
        this.game.player.manaDeck.push(new Mana(1, Color.BLUE_COLOR))
        this.game.player.manaDeck.push(new Mana(2, Color.BLUE_COLOR))
        this.game.player.manaDeck.push(new Mana(3, Color.BLUE_COLOR))
        this.game.player.manaDeck.push(new Mana(4, Color.BLUE_COLOR))
        this.game.player.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.game.player.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.game.player.manaDeck.push(new Mana(2, Color.RED_COLOR))
        this.game.player.manaDeck.push(new Mana(2, Color.RED_COLOR))

        console.log(`Player ${this.game.player.name} is oppening creature deck...`)
        this.game.player.creatureDeck.push(new Creature('Vampire', '', 4, Color.BLUE_COLOR, 4, 2))
        this.game.player.creatureDeck.push(new Creature('Banshee', '', 3, Color.BLUE_COLOR, 3, 5))
        this.game.player.creatureDeck.push(new Creature('Troll','', 1, Color.RED_COLOR, 1, 2))
        this.game.player.creatureDeck.push(new Creature('Orc','', 2, Color.RED_COLOR, 3, 3))

        console.log(`Player ${this.game.challangerPlayer.name} is oppening mana deck...`)
        this.game.challangerPlayer.manaDeck.push(new Mana(1, Color.BLUE_COLOR))
        this.game.challangerPlayer.manaDeck.push(new Mana(2, Color.BLUE_COLOR))
        this.game.challangerPlayer.manaDeck.push(new Mana(3, Color.BLUE_COLOR))
        this.game.challangerPlayer.manaDeck.push(new Mana(4, Color.BLUE_COLOR))
        this.game.challangerPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.game.challangerPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.game.challangerPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))
        this.game.challangerPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))

        console.log(`Challanger Player ${this.game.challangerPlayer.name} is oppening creature deck...`)
        this.game.challangerPlayer.creatureDeck.push(new Creature('Cyclops', '', 4, Color.BLUE_COLOR, 7, 1))
        this.game.challangerPlayer.creatureDeck.push(new Creature('Amazon', '', 3, Color.BLUE_COLOR, 4, 3))
        this.game.challangerPlayer.creatureDeck.push(new Creature('Djin','', 1, Color.RED_COLOR, 2, 1))
        this.game.challangerPlayer.creatureDeck.push(new Creature('Linch','', 2, Color.RED_COLOR, 1, 8))

        this.game.start()
    }
}

new Main()
