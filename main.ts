import * as PromptSync from 'prompt-sync'
import * as PromptSyncHistory from 'prompt-sync-history'
import { Color } from './source/constants/color'
import { MortalKombatCardGame } from './source/classes/mortal-kombat-card-game'
import { GamePlayer } from './source/classes/game-player'
import { Mana } from './source/classes/mana'
import { Fighter } from './source/classes/fighter'
import { Player } from './source/interfaces/player'

export class Main {
    private cardGame: MortalKombatCardGame
    private prompt: PromptSync

    constructor() {
        console.log('Game Started.')
        this.prompt = PromptSync({
            history: PromptSyncHistory(),
            sigint: false
        })

        this.cardGame = new MortalKombatCardGame(
            new GamePlayer('Jefferson'),
            new GamePlayer('Juliana'))

        this.createDeck(this.cardGame.firstPlayer)
        this.conjureManaCards(this.cardGame.firstPlayer)
        this.conjureFighterCards(this.cardGame.firstPlayer)

        this.createDeck(this.cardGame.secondPlayer)
        this.conjureManaCards(this.cardGame.secondPlayer)
        this.conjureFighterCards(this.cardGame.secondPlayer)
    }

    private createDeck(player: Player) {
        console.log(`First Player ${player.name} is oppening deck...`)

        let fighter1 = new Fighter('Sonya Blade', '', 4, Color.BLUE_COLOR, 2)
        let fighter2 = new Fighter('Sub-Zero', '', 3, Color.BLUE_COLOR, 3)
        let fighter3 = new Fighter('Scorpion', '', 1, Color.RED_COLOR, 1)
        let fighter4 = new Fighter('Kung Lao', '', 2, Color.RED_COLOR, 3)
        let fighter5 = new Fighter('Jax Briggs', '', 3, Color.BLUE_COLOR, 4)
        let fighter6 = new Fighter('Kano', '', 5, Color.BLUE_COLOR, 2)
        let fighter7 = new Fighter('Liu Kang', '', 2, Color.RED_COLOR, 3)
        let fighter8 = new Fighter('Noob Saibot', '', 4, Color.RED_COLOR, 3)
        let fighter9 = new Fighter('Shang Tsung', '', 1, Color.BLUE_COLOR, 4)
        let fighter10 = new Fighter('Smoke', '', 2, Color.BLUE_COLOR, 5)
        let fighter11 = new Fighter('Cyrax', '', 3, Color.RED_COLOR, 2)
        let fighter12 = new Fighter('Kabal', '', 2, Color.RED_COLOR, 6)
        let fighter13 = new Fighter('Sektor', '', 3, Color.BLUE_COLOR, 5)
        let fighter14 = new Fighter('Sheeva', '', 5, Color.BLUE_COLOR, 6)
        let fighter15 = new Fighter('Sindel', '', 6, Color.RED_COLOR, 2)
        let fighter16 = new Fighter('Kurtis Stryker', '', 2, Color.RED_COLOR, 3)
        let fighter17 = new Fighter('Motaro', '', 8, Color.BLUE_COLOR, 5)
        let fighter18 = new Fighter('Shao Kahn', '', 9, Color.RED_COLOR, 7)
        
        player.fighterDeck.push(fighter1)
        player.fighterDeck.push(fighter2)
        player.fighterDeck.push(fighter3)
        player.fighterDeck.push(fighter4)
        player.fighterDeck.push(fighter5)
        player.fighterDeck.push(fighter6)
        player.fighterDeck.push(fighter7)
        player.fighterDeck.push(fighter8)
        player.fighterDeck.push(fighter9)
        player.fighterDeck.push(fighter10)
        player.fighterDeck.push(fighter11)
        player.fighterDeck.push(fighter12)
        player.fighterDeck.push(fighter13)
        player.fighterDeck.push(fighter14)
        player.fighterDeck.push(fighter15)
        player.fighterDeck.push(fighter16)
        player.fighterDeck.push(fighter17)
        player.fighterDeck.push(fighter18)

        let mana1 = new Mana(1, Color.BLUE_COLOR)
        let mana2 = new Mana(1, Color.BLUE_COLOR)
        let mana3 = new Mana(1, Color.BLUE_COLOR)
        let mana4 = new Mana(1, Color.BLUE_COLOR)
        let mana5 = new Mana(1, Color.BLUE_COLOR)
        let mana6 = new Mana(1, Color.RED_COLOR)
        let mana7 = new Mana(1, Color.RED_COLOR)
        let mana8 = new Mana(1, Color.RED_COLOR)
        let mana9 = new Mana(1, Color.RED_COLOR)
        let mana10 = new Mana(1, Color.RED_COLOR)
        let mana11 = new Mana(1, Color.BLUE_COLOR)
        let mana12 = new Mana(1, Color.BLUE_COLOR)
        let mana13 = new Mana(1, Color.BLUE_COLOR)
        let mana14 = new Mana(1, Color.BLUE_COLOR)
        let mana15 = new Mana(1, Color.BLUE_COLOR)
        let mana16 = new Mana(1, Color.RED_COLOR)
        let mana17 = new Mana(1, Color.RED_COLOR)
        let mana18 = new Mana(1, Color.RED_COLOR)
        let mana19 = new Mana(1, Color.RED_COLOR)
        let mana20 = new Mana(1, Color.RED_COLOR)
        player.manaDeck.push(mana1)
        player.manaDeck.push(mana2)
        player.manaDeck.push(mana3)
        player.manaDeck.push(mana4)
        player.manaDeck.push(mana5)
        player.manaDeck.push(mana6)
        player.manaDeck.push(mana7)
        player.manaDeck.push(mana8)
        player.manaDeck.push(mana9)
        player.manaDeck.push(mana10)
        player.manaDeck.push(mana11)
        player.manaDeck.push(mana12)
        player.manaDeck.push(mana13)
        player.manaDeck.push(mana14)
        player.manaDeck.push(mana15)
        player.manaDeck.push(mana16)
        player.manaDeck.push(mana17)
        player.manaDeck.push(mana18)
        player.manaDeck.push(mana19)
        player.manaDeck.push(mana20)
    }

    private conjureManaCards(player: Player) {
        let hasManaCardToConjure: boolean
        do {
            hasManaCardToConjure = true
            /*Show Mana and Fighter Deck Then Show remaining Mana*/
            player.manaDeck.forEach((card, index) => console.info(`Card number ${index + 1} ~> ${card.toString()}`))
            player.fighterDeck.forEach((fighter, index) => console.info(`Card number ${index + 1} ~> ${fighter.toString()}`))

            console.info('BLUE Mana: ', player.manaAmountBlue)
            console.info('RED Mana: ', player.manaAmountRed)

            let choosedMana = this.prompt('Choose mana by typing number between 1 and 20: ')
            if (choosedMana > 0 && choosedMana <= 20) {
                this.cardGame.conjureManaCard(player, choosedMana - 1)
                player.manaDeck.forEach((card, index) => console.info(`Card number ${index + 1} ~> ${card.toString()}`))
            }

            let amountManaCardConjured = 0
            player.manaDeck.forEach(manaCard => {
                if (manaCard.conjured) amountManaCardConjured++
            })
            console.info('amountManaCardConjured ===>', amountManaCardConjured)
            if (amountManaCardConjured === 10) {
                hasManaCardToConjure = false
            }
        } while (hasManaCardToConjure)
    }

    private conjureFighterCards(player: Player) {
        let hasFighterToConjure: boolean
        do {
            hasFighterToConjure = false
            if (player.manaAmountRed === 0 && player.manaAmountBlue === 0) {
                hasFighterToConjure = false
            } else {
                player.fighterDeck.forEach(fighter => {
                    if (fighter.conjured === undefined || fighter.conjured === false) {
                        if (fighter.color === Color.RED_COLOR && player.manaAmountRed >= fighter.manaNeeded) {
                            hasFighterToConjure = true
                            return
                        }
                        if (fighter.color === Color.BLUE_COLOR && player.manaAmountBlue >= fighter.manaNeeded) {
                            hasFighterToConjure = true
                            return
                        }
                    }
                })
            }

            if (hasFighterToConjure) {
                /*Show Mana and Fighter Deck Then Show remaining Mana*/
                player.manaDeck.forEach((card, index) => console.info(`Card number ${index + 1} ~> ${card.toString()}`))
                player.fighterDeck.forEach((fighter, index) => console.info(`Card number ${index + 1} ~> ${fighter.toString()}`))

                console.info('BLUE Mana: ', player.manaAmountBlue)
                console.info('RED Mana: ', player.manaAmountRed)

                player.fighterDeck.forEach((fighter, index) => console.info(`Card number ${index + 1} ~> ${fighter.toString()}`))
                let choosedFighteer = this.prompt('Choose fighter by typing number between 1 and 18: ')
                if (choosedFighteer > 0 && choosedFighteer <= 18) {
                    this.cardGame.conjureFighterCard(player, player.fighterDeck[choosedFighteer - 1])
                }
            }
        } while (hasFighterToConjure)
    }
}

new Main()