import { Color } from './source/constants/color'
import { MortalKombatCardGame } from './source/classes/mortal-kombat-card-game'
import { GamePlayer } from './source/classes/game-player'
import { Mana } from './source/classes/mana'
import { Fighter } from './source/classes/fighter'

export class Main {
    private cardGame: MortalKombatCardGame

    constructor () {
        console.log('Game Started.')
        this.cardGame = new MortalKombatCardGame(
            new GamePlayer('Jefferson'),
            new GamePlayer('Juliana'))
        
        {
            console.log(`First Player ${this.cardGame.firstPlayer.name} is oppening mana deck...`)
            this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.BLUE_COLOR))
            this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.BLUE_COLOR))
            this.cardGame.firstPlayer.manaDeck.push(new Mana(3, Color.BLUE_COLOR))
            this.cardGame.firstPlayer.manaDeck.push(new Mana(4, Color.BLUE_COLOR))
            this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
            this.cardGame.firstPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
            this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))
            this.cardGame.firstPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))

            console.info('First Player Choose four Mana Card and two Fighter Card!')
            this.cardGame.secondPlayer.manaDeck.forEach((manaCard: Mana) => console.log(this.cardGame.renderManaCard(manaCard)))

            console.log(`First Player ${this.cardGame.firstPlayer.name} is oppening fighter deck...`)
            this.cardGame.firstPlayer.fighterDeck.push(new Fighter('Sonya Blade', '', 4, Color.BLUE_COLOR, 2))
            this.cardGame.firstPlayer.fighterDeck.push(new Fighter('Sub-Zero', '', 3, Color.BLUE_COLOR, 3))
            this.cardGame.firstPlayer.fighterDeck.push(new Fighter('Scorpion', '', 1, Color.RED_COLOR, 1))
            this.cardGame.firstPlayer.fighterDeck.push(new Fighter('Kung Lao', '', 2, Color.RED_COLOR, 3))

            this.cardGame.showChoosedDeck(this.cardGame.firstPlayer)

            console.log(`Second Player ${this.cardGame.secondPlayer.name} is oppening mana deck...`)
            this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.BLUE_COLOR))
            this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.BLUE_COLOR))
            this.cardGame.secondPlayer.manaDeck.push(new Mana(3, Color.BLUE_COLOR))
            this.cardGame.secondPlayer.manaDeck.push(new Mana(4, Color.BLUE_COLOR))
            this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
            this.cardGame.secondPlayer.manaDeck.push(new Mana(1, Color.RED_COLOR))
            this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))
            this.cardGame.secondPlayer.manaDeck.push(new Mana(2, Color.RED_COLOR))

            console.log(`Second Player ${this.cardGame.secondPlayer.name} is oppening fighter deck...`)
            this.cardGame.secondPlayer.fighterDeck.push(new Fighter('Jax Briggs', '', 4, Color.BLUE_COLOR, 7))
            this.cardGame.secondPlayer.fighterDeck.push(new Fighter('Liu Kang', '', 3, Color.BLUE_COLOR, 4))
            this.cardGame.secondPlayer.fighterDeck.push(new Fighter('Shang Tsung', '', 1, Color.RED_COLOR, 2))
            this.cardGame.secondPlayer.fighterDeck.push(new Fighter('Noob Saibot', '', 2, Color.RED_COLOR, 8))

            this.cardGame.showChoosedDeck(this.cardGame.secondPlayer)
        }

        console.info('Player One: Choose four Mana Card and two Fighter Card!')

        this.cardGame.secondPlayer.manaDeck.forEach((manaCard: Mana) => console.log(this.cardGame.renderManaCard(manaCard)))

        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 0)
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 1)
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 4)
        this.cardGame.chooseManaCardToConjure(this.cardGame.firstPlayer, 5)
        this.cardGame.conjureManaCard(this.cardGame.firstPlayer, 0)
        this.cardGame.conjureManaCard(this.cardGame.firstPlayer, 1)
        
        console.info(`Player One has conjured a list of mana cards: 
        ${this.cardGame.firstPlayer.choosedManaDeck.map(card => card.conjured? `
        ${card.amount} ${card.color} mana point(s)` : '')}`)
        
        this.cardGame.chooseFighterCardToConjure(this.cardGame.firstPlayer, 0)
        this.cardGame.chooseFighterCardToConjure(this.cardGame.firstPlayer, 1)

        this.cardGame.conjureFighterCard(this.cardGame.firstPlayer, 1)
        
        console.info(`Player One has conjured a list of fighter cards: 
        ${this.cardGame.firstPlayer.choosedFighterDeck.map(card => card.conjured? `
        ${card.name} ~<>~ ${card.color}` : '')}`)
            
        this.cardGame.showConjuredDeck(this.cardGame.firstPlayer)
        
        console.info('Player Two: choose four Mana Cards and two Fighter Cards.')
        
        this.cardGame.secondPlayer.manaDeck.forEach((manaCard: Mana) => console.log(this.cardGame.renderManaCard(manaCard)))
        
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 0)
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 2)
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 4)
        this.cardGame.chooseManaCardToConjure(this.cardGame.secondPlayer, 5)
        this.cardGame.conjureManaCard(this.cardGame.secondPlayer, 0)
        this.cardGame.conjureManaCard(this.cardGame.secondPlayer, 1)
        
        
        console.info(`Player Two has conjured a list of mana cards: 
        ${this.cardGame.secondPlayer.choosedManaDeck.map(card => card.conjured? `
                ${card.amount} ${card.color} mana point(s)` : '')}`)
                
                this.cardGame.chooseFighterCardToConjure(this.cardGame.secondPlayer, 0)
        this.cardGame.chooseFighterCardToConjure(this.cardGame.secondPlayer, 1)
        
        this.cardGame.conjureFighterCard(this.cardGame.secondPlayer, 1)
        
        console.info(`Player Two has conjured a list of fighter card: 
        ${this.cardGame.secondPlayer.choosedFighterDeck.map(card => card.conjured? `
        ${card.name} ~<>~ ${card.color}` : '')}`)
        
        this.cardGame.showConjuredDeck(this.cardGame.secondPlayer)
        
        console.log('Player One choose one card to start the battle.')
        this.cardGame.startBattle(this.cardGame.firstPlayer.choosedFighterDeck[1], this.cardGame.secondPlayer.choosedFighterDeck[1])
        console.log('Player Two choose one card to start the battle.')
        this.cardGame.startBattle(this.cardGame.secondPlayer.choosedFighterDeck[1], this.cardGame.firstPlayer.choosedFighterDeck[1])
        console.log('Player One choose one card to start the battle.')
        this.cardGame.startBattle(this.cardGame.firstPlayer.choosedFighterDeck[1], this.cardGame.secondPlayer.choosedFighterDeck[1])
    }
}

new Main()