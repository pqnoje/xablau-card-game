import { Card } from '../interfaces/card'
import { Color } from '../constants/color'

export class Mana implements Card {
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