import { Game } from '../interfaces/game'
import { GamePlayer } from './game-player'
import { Mana } from './mana'
import { Fighter } from './fighter'
import { Color } from '../constants/color'

export class MortalKombatCardGame implements Game {
    firstPlayer: GamePlayer
    secondPlayer: GamePlayer
    private readonly INITIAL_MANA_AMOUNT: number = 0

    constructor(
        player: GamePlayer, 
        challangerPlayer: GamePlayer) {
        this.firstPlayer = player
        this.secondPlayer = challangerPlayer
    }
    
    public conjureManaCard(player: GamePlayer, index: number) {
        player.manaDeck[index].conjured = true
        player.manaDeck[index].color === Color.BLUE_COLOR? player.manaAmountBlue += player.manaDeck[index].amount : player.manaAmountRed += player.manaDeck[index].amount
    }

    public conjureFighterCard(player: GamePlayer, fighter: Fighter) {
        if(fighter.color === Color.BLUE_COLOR && player.manaAmountBlue > 0 && player.manaAmountBlue >= fighter.manaNeeded) {
            fighter.conjured = true
            player.manaAmountBlue = player.manaAmountBlue - fighter.manaNeeded
        }
        if(fighter.color === Color.RED_COLOR && player.manaAmountRed > 0 && player.manaAmountRed >= fighter.manaNeeded) {
            fighter.conjured = true
            player.manaAmountRed = player.manaAmountRed - fighter.manaNeeded
        }
    }

    public startBattle(firstFighter: Fighter, secondFighter: Fighter) {
        if(firstFighter.manaNeeded >= secondFighter.defence) {
            secondFighter.defeated = true
            console.info(`Second Player: Fighter ${secondFighter.name} has defeated.`)
        } else if (firstFighter.manaNeeded < secondFighter.defence) {
            secondFighter.defence -= firstFighter.manaNeeded
            console.info(`Second Player: Fighter ${secondFighter.name} has defended and has ${secondFighter.defence} defence points remaining.`)
        }
    }

    public showChoosedDeck(player: GamePlayer) {
        console.log(`Player ${player.name} started with ${player.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Player can conjure this four creature card: ${player.fighterDeck.map((fighter, index) => `
                ____________________________________________________
                Card ${index + 1} (A: ${fighter.manaNeeded}, D: ${fighter.defence}) Mana needed: ${fighter.manaNeeded}
                Fighter color: ${fighter.color} ~<>~ Fighter name: ${fighter.name}${fighter.conjured? '^' : '*'}
                Fighter attack: ${fighter.manaNeeded} ~<>~ Fighter defence: ${fighter.defence}
                ____________________________________________________`)}
        `)
    }

    public showConjuredDeck(player: GamePlayer) {
        console.log(`Player ${player.name} started with ${player.manaDeck.reduce((accumulator, initial, index, array) => accumulator + initial.amount, this.INITIAL_MANA_AMOUNT)} amount of mana.
            Player owns creature cards: ${player.fighterDeck.map((fighter, index) => `
                ____________________________________________________
                Card ${index + 1} (A: ${fighter.manaNeeded}, D: ${fighter.defence}) Mana needed: ${fighter.manaNeeded}
                Creature color: ${fighter.color} ~<>~ Fighter name: ${fighter.name}${fighter.conjured? '^' : '*'}
                Creature attack: ${fighter.manaNeeded} ~<>~ Fighter defence: ${fighter.defence}
                ____________________________________________________`)}
        `)
    }
    
    public renderManaCard(mana: Mana): string {
        let renderedCard: string = ''
        renderedCard = `${mana.color} ~<>~ ${mana.color} ~<>~ ${mana.conjured? '^': '*'}`
        return renderedCard
    }
}