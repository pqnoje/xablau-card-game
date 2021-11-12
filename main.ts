enum Color {
    RED_COLOR = 'RED',
    BLUE_COLOR = 'BLUE'
}

class Card {
    color: string
}

class Mana extends Card {
    amount: number
    private readonly RED_COLOR: string = Color.RED_COLOR
    private readonly BLUE_COLOR: string = Color.BLUE_COLOR
    private readonly FIRST_ELEMENT: number = 0

    constructor (amount: number) {
        super()
        this.amount = amount
        this.color = this.generateColor()
    }

    private generateColor(): string {
        let colors = new Array<string>()
        colors.push(this.RED_COLOR)
        colors.push(this.BLUE_COLOR)
        let color = colors.sort(() => .5 - Math.random())[this.FIRST_ELEMENT]
        return color
    }
}

class Creature extends Card {
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
            super()
            this.name = name
            this.description = description
            this.manaNeeded = manaNeeded

            super.color = color
            this.atack = attack
            this.defence = defence
        }
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
    
    constructor (
        name: string
        ) {
        this.name = name
        this.manaDeck =  new Array<Mana>()
        this.creatureDeck =  new Array<Creature>()
        this.manaAmount = 0
    }

}

class Game {
    player: BackToSchoolGamePlayer
    chanllangePlayer: BackToSchoolGamePlayer
    private readonly INITIAL_MANA_AMOUNT: number = 0

    constructor(
        player: BackToSchoolGamePlayer, chanllangePlayer: BackToSchoolGamePlayer) {
        this.player = player
        this.chanllangePlayer = chanllangePlayer
    }

    public start() {
        console.log(`${this.player.name} vs ${this.chanllangePlayer.name}`)
        console.log(`Player ${this.player.name} has amount of mana ${this.player.manaAmount}
            and challange player
            ${this.player.name} has amount of mana ${this.player.manaAmount}
            started with ${this.player.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
        `)
    }
}

class Main {
    private game: Game

    constructor () {
        console.log('Game Started.')
        this.game = new Game(
            new BackToSchoolGamePlayer('Jefferson'),
            new BackToSchoolGamePlayer('Icognito'))
        
        this.game.player.manaDeck.push(new Mana(1))
        this.game.player.manaDeck.push(new Mana(2))
        this.game.player.manaDeck.push(new Mana(3))
        this.game.player.manaDeck.push(new Mana(4))

        this.game.player.creatureDeck.push(new Creature(
            'Vampire',
            '',
            1,
            Color.RED_COLOR,
            4,
            2
        ))

        this.game.player.creatureDeck.push(new Creature(
            'Banshee',
            '',
            1,
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
            1,
            Color.BLUE_COLOR,
            3,
            3
        ))

        this.game.start()
    }
    
}

new Main()
