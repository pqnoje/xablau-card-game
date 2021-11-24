
import { Card } from '../interfaces/card'

export class Fighter implements Card {
    color: string
    name: string
    description: string
    conjured: boolean
    manaNeeded: number
    defence: number
    defeated: boolean

    constructor(
        name: string,
        description: string,
        manaNeeded: number,
        color: string,
        defence: number) {
            this.name = name
            this.description = description
            this.manaNeeded = manaNeeded
            this.color = color
            this.defence = defence
        }

    toString(): string {
        let card: string = ''
        card = `name: ${this.name} ~<>~ mana needed: ${this.manaNeeded} ~<>~ defence: ${this.defence} ~<>~ color: ${this.color} ~<>~ conjured: ${this.conjured? 'yes': 'no'} ~<>~ defeated: ${this.defeated ? 'yes' : 'no'}`
        return card
    }
}