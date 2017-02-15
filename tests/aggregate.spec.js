/* eslint-env node, mocha */
import { expect } from 'chai'
import aggregateStatistics from '../src/statistics/aggregate'

describe('statistics > aggregate', () => {
  it('can calculate total auras count', () => {
    expect(aggregateStatistics({}).totalAuras).to.equal(null)
    expect(aggregateStatistics({nightfury: 1}).totalAuras).to.equal(null)
    expect(aggregateStatistics({
      chakEggSacks: 1,
      preservedQueenBees: 5,
      ghostlyInfusions: 2,
      baubleInfusions: 3,
      luminescentRefractors: 0,
      wintersPresence: 1,
      nightfury: 0,
      wintersHeartInfusions: 3,
      kodasWarmthEnrichment: 1,
      phospholuminescentInfusions: 2
    }).totalAuras).to.equal(18)
  })

  it('can calculate death count per hour', () => {
    expect(aggregateStatistics({}).deathCountPerHour).to.equal(null)
    expect(aggregateStatistics({playtime: 123}).deathCountPerHour).to.equal(null)
    expect(aggregateStatistics({playtime: 1500, deathCount: 15}).deathCountPerHour).to.equal(null)
    expect(aggregateStatistics({
      playtime: 10603345,
      deathCount: 3942
    }).deathCountPerHour).to.equal(1.34)
  })
})
