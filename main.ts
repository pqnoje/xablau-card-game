enum Color {
    RED_COLOR = 'RED',
    BLUE_COLOR = 'BLUE'
}

interface Card {
    color: string
    conjured: boolean
}

class Mana implements Card {
    amount: number
    color: string
    conjured: boolean
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
    conjured: boolean
    manaNeeded: number
    atack: number
    defence: number
    defeated: boolean

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
    conjured: boolean
}

interface Player {
    name: string
    manaDeck: Array<Mana>
    creatureDeck: Array<Creature>
    manaAmountBlue: number
    manaAmountRed: number
    choosedManaDeck: Array<Mana>
    choosedCreatureDeck:  Array<Creature>
}

class BackToSchoolGamePlayer implements Player {
    name: string
    manaDeck: Array<Mana>
    creatureDeck: Array<Creature>
    manaAmountBlue: number
    manaAmountRed: number
    choosedManaDeck: Array<Mana>
    choosedCreatureDeck:  Array<Creature>
    
    constructor (name: string) {
        this.name = name
        this.manaDeck =  new Array<Mana>()
        this.creatureDeck =  new Array<Creature>()
        this.manaAmountBlue = 0
        this.manaAmountRed = 0
        this.choosedManaDeck = new Array<Mana>()
        this.choosedCreatureDeck =  new Array<Creature>()
    }
}
interface Game {
    firstPlayer: BackToSchoolGamePlayer
    secondPlayer: BackToSchoolGamePlayer

    chooseManaCardToConjure(player: BackToSchoolGamePlayer, index: number): Mana
    chooseCreatureCardToConjure(player: BackToSchoolGamePlayer, index: number): Creature
    conjureManaCard(player: BackToSchoolGamePlayer, index: number): void
    conjureCreatureCard(player: BackToSchoolGamePlayer, index: number): void
}

class MortalKombatCardGame implements Game {
    firstPlayer: BackToSchoolGamePlayer
    secondPlayer: BackToSchoolGamePlayer
    private readonly INITIAL_MANA_AMOUNT: number = 0

    constructor(
        player: BackToSchoolGamePlayer, 
        challangerPlayer: BackToSchoolGamePlayer) {
        this.firstPlayer = player
        this.secondPlayer = challangerPlayer
    }
    public chooseManaCardToConjure(player: BackToSchoolGamePlayer, index: number) : Mana {
        let choosedManaCard = player.manaDeck[index]
        player.choosedManaDeck.push(choosedManaCard)
        return choosedManaCard
    }

    public chooseCreatureCardToConjure(player: BackToSchoolGamePlayer, index: number): Creature {
        let choosedCreatureCard = player.creatureDeck[index]
        player.choosedCreatureDeck.push(choosedCreatureCard)
        return choosedCreatureCard
    }

    
    public conjureManaCard(player: BackToSchoolGamePlayer, index: number) {
        player.choosedManaDeck[index].conjured = true
        player.choosedManaDeck[index].color === Color.BLUE_COLOR? player.manaAmountBlue += player.choosedManaDeck[index].amount : player.manaAmountRed += player.choosedManaDeck[index].amount
    }

    public conjureCreatureCard(player: BackToSchoolGamePlayer, index: number) {
        if(player.choosedCreatureDeck[index].color === Color.BLUE_COLOR) {
            player.choosedCreatureDeck[index].manaNeeded <= player.manaAmountBlue
            player.choosedCreatureDeck[index].conjured = true
            player.manaAmountBlue -= player.choosedCreatureDeck[index].manaNeeded
        } else {
            player.choosedCreatureDeck[index].manaNeeded <= player.manaAmountRed
            player.choosedCreatureDeck[index].conjured = true
            player.manaAmountRed -= player.choosedCreatureDeck[index].manaNeeded
        }
    }

    public start() {
        console.log(`${this.firstPlayer.name} vs ${this.secondPlayer.name}`)
        console.log(`Player ${this.firstPlayer.name} started with ${this.firstPlayer.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Player can conjure this four creature card: ${this.firstPlayer.creatureDeck.map((creature, index) => `
                ____________________________________________________
                Card ${index + 1} (A: ${creature.atack}, D: ${creature.defence})
                Creature color: ${creature.color} ~<>~ Creature name: ${creature.name}${creature.conjured? '^' : '*'}
                Creature attack: ${creature.atack} ~<>~ Creature defence: ${creature.defence}
                ____________________________________________________`)}
        `)

        console.log(`Challanger ${this.secondPlayer.name} started with ${this.secondPlayer.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Challanger player can conjure this four creature card: ${this.secondPlayer.creatureDeck.map((creature, index) => `
                ____________________________________________________
                Card ${index + 1} (A: ${creature.atack}, D: ${creature.defence})
                Creature color: ${creature.color} ~<>~ Creature name: ${creature.name}${creature.conjured? '^' : '*'}
                Creature attack: ${creature.atack} ~<>~ Creature defence: ${creature.defence}
                ____________________________________________________`)}
        `)
    }

    public showConjuredDeck() {
        console.log(`${this.firstPlayer.name} vs ${this.secondPlayer.name}`)
        console.log(`Player ${this.firstPlayer.name} started with ${this.firstPlayer.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Player owns creature cards: ${this.firstPlayer.choosedCreatureDeck.map((creature, index) => `
                ____________________________________________________
                Card ${index + 1} (A: ${creature.atack}, D: ${creature.defence})
                Creature color: ${creature.color} ~<>~ Creature name: ${creature.name}${creature.conjured? '^' : '*'}
                Creature attack: ${creature.atack} ~<>~ Creature defence: ${creature.defence}
                ____________________________________________________`)}
        `)

        console.log(`Challanger ${this.secondPlayer.name} started with ${this.secondPlayer.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Challanger owns creature cards: ${this.secondPlayer.choosedCreatureDeck.map((creature, index) => `
                ____________________________________________________
                Card ${index + 1} (A: ${creature.atack}, D: ${creature.defence})
                Creature color: ${creature.color} ~<>~ Creature name: ${creature.name}${creature.conjured? '^' : '*'}
                Creature attack: ${creature.atack} ~<>~ Creature defence: ${creature.defence}
                ____________________________________________________`)}
        `)
    }
}

class Main {
    private cardGame: MortalKombatCardGame

    constructor () {
        console.log('Game Started.')
        this.cardGame = new MortalKombatCardGame(
            new BackToSchoolGamePlayer('Jefferson'),
            new BackToSchoolGamePlayer('Juliana'))
        
        console.log(`First Player ${this.cardGame.firstPlayer.name} is oppening mana deck...`)
        this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.BLUE_COLOR))
        this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.BLUE_COLOR))
        this.cardGame.firstPlayer.manaDeck.push(new Mana(3, Color.BLUE_COLOR))
        this.cardGame.firstPlayer.manaDeck.push(new Mana(4, Color.BLUE_COLOR))
        this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))
        this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))

        console.log(`First Player ${this.cardGame.firstPlayer.name} is oppening creature deck...`)
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Sonia', '', 4, Color.BLUE_COLOR, 4, 2))
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Sub-Zero', '', 3, Color.BLUE_COLOR, 3, 5))
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Scorpion', '', 1, Color.RED_COLOR, 1, 2))
        this.cardGame.firstPlayer.creatureDeck.push(new Creature('Kung Lao', '', 2, Color.RED_COLOR, 3, 3))

        console.log(`Second Player ${this.cardGame.secondPlayer.name} is oppening mana deck...`)
        this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.BLUE_COLOR))
        this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.BLUE_COLOR))
        this.cardGame.secondPlayer.manaDeck.push(new Mana(3, Color.BLUE_COLOR))
        this.cardGame.secondPlayer.manaDeck.push(new Mana(4, Color.BLUE_COLOR))
        this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
        this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))
        this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))

        console.log(`Second Player ${this.cardGame.secondPlayer.name} is oppening creature deck...`)
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Jax Briggs', '', 4, Color.BLUE_COLOR, 7, 1))
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Liu Kang', '', 3, Color.BLUE_COLOR, 4, 3))
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Shang Tsung', '', 1, Color.RED_COLOR, 2, 1))
        this.cardGame.secondPlayer.creatureDeck.push(new Creature('Noob Saibot', '', 2, Color.RED_COLOR, 1, 8))

        this.cardGame.start()


        console.info('Choose four Mana Card and two Creature Card!')

        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 0)
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 1)
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 4)
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 5)
        this.cardGame.conjureManaCard(this.cardGame.firstPlayer, 0)
        this.cardGame.conjureManaCard(this.cardGame.firstPlayer, 1)

        console.info(`First Player has conjured a list of mana cards: 
            ${this.cardGame.firstPlayer.choosedManaDeck.map(card => card.conjured? `
                ${card.amount} ${card.color} mana point(s)` : '')}`)

        this.cardGame.chooseCreatureCardToConjure(this.cardGame.firstPlayer, 0)
        this.cardGame.chooseCreatureCardToConjure(this.cardGame.firstPlayer, 1)

        this.cardGame.conjureCreatureCard(this.cardGame.firstPlayer, 1)

        console.info(`First Player has conjured a list of creature cards: 
            ${this.cardGame.firstPlayer.choosedCreatureDeck.map(card => card.conjured? `
                ${card.name} ~<>~ ${card.color}` : '')}`)

        this.cardGame.showConjuredDeck()


        console.info('Second player: choose four Mana Card and two Creature Card!')

        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 0)
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 1)
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 4)
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 5)
        this.cardGame.conjureManaCard(this.cardGame.secondPlayer, 0)
        this.cardGame.conjureManaCard(this.cardGame.secondPlayer, 1)

        console.info(`First Player has conjured a list of mana cards: 
            ${this.cardGame.secondPlayer.choosedManaDeck.map(card => card.conjured? `
                ${card.amount} ${card.color} mana point(s)` : '')}`)

        this.cardGame.chooseCreatureCardToConjure(this.cardGame.secondPlayer, 0)
        this.cardGame.chooseCreatureCardToConjure(this.cardGame.secondPlayer, 1)

        this.cardGame.conjureCreatureCard(this.cardGame.secondPlayer, 1)

        console.info(`First Player has conjured a list of creature cards: 
            ${this.cardGame.secondPlayer.choosedCreatureDeck.map(card => card.conjured? `
                ${card.name} ~<>~ ${card.color}` : '')}`)

    }
}

console.info('connecting to the game!')

new Main()
