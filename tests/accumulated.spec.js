/* eslint-env node, mocha */
const expect = require('chai').expect
import accumulatedStatistics from '../src/statistics/accumulated'

describe('statistics > accumulated', () => {
  it('can calculate total auras count', () => {
    expect(accumulatedStatistics({}).totalAuras).to.equal(null)
    expect(accumulatedStatistics({nightfury: 1}).totalAuras).to.equal(null)
    expect(accumulatedStatistics({
      chakEggSacks: 1,
      preservedQueenBees: 5,
      ghostlyInfusions: 2,
      baubleInfusions: 3,
      luminescentRefractors: 0,
      wintersPresence: 1,
      nightfury: 0
    }).totalAuras).to.equal(12)
  })
})
