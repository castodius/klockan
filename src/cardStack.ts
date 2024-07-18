import type { Card, Deck } from './types'

export class CardStack {
  public targetCard: Card
  #cards: Deck = []
  solved: boolean = false

  constructor(value: Card){
    this.targetCard = value
  }

  public putCard(card: Card): Deck {
    if(this.solved){
      throw new Error('Card stack already solved')
    }

    if(this.targetCard !== card){
      this.#cards.push(card)
      return []
    }

    this.solved = true
    return this.#cards
  }
}
