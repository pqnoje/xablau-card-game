import { Player } from '../interfaces/player'
import { Mana } from './mana'
import { Fighter } from './fighter'

export class GamePlayer implements Player {
    name: string
    manaDeck: Array<Mana>
    fighterDeck: Array<Fighter>
    manaAmountBlue: number
    manaAmountRed: number
    
    constructor (name: string) {
        this.name = name
        this.manaDeck =  new Array<Mana>()
        this.fighterDeck =  new Array<Fighter>()
        this.manaAmountBlue = 0
        this.manaAmountRed = 0
    }
}