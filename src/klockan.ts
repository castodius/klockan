import { shuffle } from 'underscore'

import { CardStack } from "./cardStack.js"
import { Card, Deck } from "./types"

export class Klockan {
  #cardCount: number

  constructor(cardCount: number) {
    this.#cardCount = cardCount
  }

  public runSimulationWithDeck(deck: Deck): boolean {
    return this._run(deck)
  }

  public runSimulation(cardCopies: number): boolean {
    return this._run(this.createRandomDeck(cardCopies))
  }

  private _run(deck: Deck): boolean {
    const stacks = this.createStacks()

    let completedStacks = 0
    let index = -1

    while (deck.length && completedStacks < this.#cardCount) {
      index++
      index%=this.#cardCount

      const stack = stacks[index]

      if (stack.solved) {
        continue
      }

      const card = deck.splice(0,1)[0]
      const returnedCards = stack.putCard(card)
      deck.push(...returnedCards)

      if (stack.solved) {
        completedStacks++
      }
    }

    return completedStacks === this.#cardCount
  }

  private createStacks() {
    const stacks: CardStack[] = []
    for (let i = 1; i <= this.#cardCount; i++) {
      stacks.push(new CardStack(i))
    }
    return stacks
  }

  private createRandomDeck(cardCopies: number) {
    const deck: Deck = []
    for (let i = 1; i <= this.#cardCount; i++) {
      for (let j = 0; j < cardCopies; j++) {
        deck.push(i)
      }
    }

    return shuffle(deck)
  }
}
