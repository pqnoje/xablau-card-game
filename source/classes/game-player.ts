import { Player } from '../interfaces/player'
import { Mana } from './mana'
import { Fighter } from './fighter'

export class GamePlayer implements Player {
    name: string
    manaDeck: Array<Mana>
    fighterDeck: Array<Fighter>
    manaAmountBlue: number
    manaAmountRed: number
    choosedManaDeck: Array<Mana>
    choosedFighterDeck:  Array<Fighter>
    
    constructor (name: string) {
        this.name = name
        this.manaDeck =  new Array<Mana>()
        this.fighterDeck =  new Array<Fighter>()
        this.manaAmountBlue = 0
        this.manaAmountRed = 0
        this.choosedManaDeck = new Array<Mana>()
        this.choosedFighterDeck =  new Array<Fighter>()
    }
}