import yargs from 'yargs/yargs'

import { Klockan } from "./klockan"

const argv = yargs(process.argv.slice(2))
  .options({
    cardCount: {
      alias: 'card-count',
      type: 'number',
      default: 12
    },
    cardCopies: {
      alias: 'card-copies',
      type: 'number',
      default: 4
    },
    rounds: {
      alias: 'rounds',
      default: 1000
    },
  })
  .usage('$0 --card-count <integer> --card-copies <integer> --rounds <intger')
  .help()
  .parseSync()

const cardCount = argv.cardCount
const cardCopies = argv.cardCopies
const rounds = argv.rounds


const instance = new Klockan(cardCount)

let wins = 0
for (let i = 0; i < rounds; i++) {
  if (instance.runSimulation(cardCopies)) {
    wins++
  }
}
console.log(`You won ${wins} out of ${rounds} rounds. In total you won ${(wins / rounds * 100).toFixed(2)}% of all rounds.`)
