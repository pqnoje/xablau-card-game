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
        player: BackToSchoolGamePlayer, challangerPlayer: BackToSchoolGamePlayer) {
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
                Creature name: ${creature.name}
                Creature attack: ${creature.atack}
                Creature defence: ${creature.defence}
                Creature color: ${creature.color}
                Creature conjured: ${creature.isConjured? 'in field and ready.' : 'not yet!'}`)}
        `)
    }
}

class Main {
    private game: Game

    private generateColor(): string {
        let colors = new Array<string>()
        colors.push(Color.RED_COLOR)
        colors.push(Color.BLUE_COLOR)
        let color = colors.sort(() => .5 - Math.random())[0]
        return color
    }

    constructor () {
        console.log('Game Started.')
        this.game = new Game(
            new BackToSchoolGamePlayer('Jefferson'),
            new BackToSchoolGamePlayer('Icognito'))
        
        this.game.player.manaDeck.push(new Mana(1, this.generateColor()))
        this.game.player.manaDeck.push(new Mana(2, this.generateColor()))
        this.game.player.manaDeck.push(new Mana(3, this.generateColor()))
        this.game.player.manaDeck.push(new Mana(4, this.generateColor()))



        this.game.player.creatureDeck.push(new Creature(
            'Vampire',
            '',
            4,
            Color.RED_COLOR,
            4,
            2
        ))

        this.game.player.creatureDeck.push(new Creature(
            'Banshee',
            '',
            3,
            Color.RED_COLOR,
            3,
            5
        ))

        this.game.player.creatureDeck.push(new Creature(
            'Troll',
            '',
            1,
            Color.BLUE_COLOR,
            1,
            2
        ))

        this.game.player.creatureDeck.push(new Creature(
            'Orc',
            '',
            2,
            Color.BLUE_COLOR,
            3,
            3
        ))

        this.game.start()
    }
    
}

new Main()
