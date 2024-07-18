# Introduction

Klockan (or The Clock) is a solitaire where the player has no option to affect the outcome. You shuffle the deck, place one card at a time in a circle matching the hour positions. If a card matches the hour position you retrieve all the cards at that position and leave the matching card at the position. This position gets ignored in future rounds. You keep rotating until you either have fulfilled all positions (you win!) or you run out of cards (you lose!).

I was curious what the probably of winning with a standard card deck was. The Kings get discarded and the Ace represents 1, Knight 11 and Queen 12. There are four copies of each card.

# How to use

Install the dependencies

```
yarn install --immutable
```

Run the script

```
yarn simulate
```

Or with custom properties

```
yarn simulate --card-count 4 --card-copies 3 --rounds 1000000
```

# Conclusion

The win percentage seems to be around 17.5%.
