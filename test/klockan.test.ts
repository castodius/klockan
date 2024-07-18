import { Klockan } from '../src/klockan.js'

describe('Klockan', () => {
  describe('Two cards', () => {
    const klockan = new Klockan(2)

    it('should compute success - short', () => {
      const output = klockan.runSimulationWithDeck([1, 2])

      expect(output).toEqual(true)
    })

    it('should compute success - long', () => {
      const output = klockan.runSimulationWithDeck([2, 1, 2, 1, 2, 1, 1, 2])

      expect(output).toEqual(true)
    })

    it('should compute failure', () => {
      const output = klockan.runSimulationWithDeck([2, 1])

      expect(output).toEqual(false)
    })
  })

  describe('Three cards', () => {
    const klockan = new Klockan(3)

    it('should compute success', () => {
      const output = klockan.runSimulationWithDeck([2, 2, 1, 3, 3, 2, 1, 1, 3, 3, 2, 1])

      expect(output).toEqual(true)
    })

    it('should compute failure', () => {
      const output = klockan.runSimulationWithDeck([1, 1, 1, 1, 2, 3, 2, 3, 2, 3, 2, 3])

      expect(output).toEqual(false)
    })
  })
})
