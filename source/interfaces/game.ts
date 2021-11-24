import { GamePlayer } from "../classes/game-player"
import { Mana } from "../classes/mana"
import { Fighter } from "../classes/fighter"

export interface Game {
    firstPlayer: GamePlayer
    secondPlayer: GamePlayer
    
    conjureManaCard(player: GamePlayer, index: number): void
    conjureFighterCard(player: GamePlayer, fighter: Fighter): void
    startBattle(firstPlayerFighter: Fighter, secondPlayerFighter: Fighter): void
    renderManaCard(mana: Mana): string
}