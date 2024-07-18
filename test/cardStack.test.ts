import { CardStack } from '../src/cardStack.js'

describe('Card Stack', () => {
  it('should return empty array if card does not match', () => {
    const stack = new CardStack(1)

    const output = stack.putCard(2)

    expect(output).toEqual([])
  })

  it('should return all previous card when card matches', () => {
    const stack = new CardStack(1)
    stack.putCard(2)
    stack.putCard(3)
    stack.putCard(4)
    stack.putCard(5)

    const output = stack.putCard(1)

    expect(output).toEqual([2, 3, 4, 5])
  })

  it('should throw if the stack is solved', () => {
    const stack = new CardStack(1)
    stack.putCard(1)

    expect(() => stack.putCard(1)).toThrow()
  })
})
