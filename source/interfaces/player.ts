import { Mana } from "../classes/mana"
import { Fighter } from "../classes/fighter"

export interface Player {
    name: string
    manaDeck: Array<Mana>
    fighterDeck: Array<Fighter>
    manaAmountBlue: number
    manaAmountRed: number
}