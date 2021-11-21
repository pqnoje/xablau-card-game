import { GamePlayer } from "../classes/game-player"
import { Mana } from "../classes/mana"
import { Fighter } from "../classes/fighter"

export interface Game {
    firstPlayer: GamePlayer
    secondPlayer: GamePlayer

    chooseManaCardToConjure(player: GamePlayer, index: number): Mana
    chooseFighterCardToConjure(player: GamePlayer, index: number): Fighter
    conjureManaCard(player: GamePlayer, index: number): void
    conjureFighterCard(player: GamePlayer, index: number): void
    startBattle(firstPlayerFighter: Fighter, secondPlayerFighter: Fighter): void
    renderManaCard(mana: Mana): string
}