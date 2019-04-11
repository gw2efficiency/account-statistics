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
      phospholuminescentInfusions: 2,
      legendaryItemsTrinket: 1,
      liquidAurillium: 1,
      celestialInfusion: 2,
      festiveConfettiInfusions: 1,
      snowDiamondInfusions: 1
    }).totalAuras).to.equal(24)
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

  it('can calculate fractal relic sum', () => {
    expect(aggregateStatistics({}).fractalRelics).to.equal(null)

    expect(aggregateStatistics({
      _fractalRelicsFromWallet: 1,
      _fractalRelicsFromTitles: null
    }).fractalRelics).to.equal(null)

    expect(aggregateStatistics({
      _fractalRelicsFromWallet: null,
      _fractalRelicsFromTitles: 1
    }).fractalRelics).to.equal(null)

    expect(aggregateStatistics({
      _fractalRelicsFromWallet: 1651,
      _fractalRelicsFromTitles: 60000
    }).fractalRelics).to.equal(61651)
  })

  it('can calculate pristine fractal relic sum', () => {
    expect(aggregateStatistics({}).pristineFractalRelics).to.equal(null)

    expect(aggregateStatistics({
      _pristineFractalRelicsFromWallet: 1,
      _pristineFractalRelicsFromTitles: null
    }).pristineFractalRelics).to.equal(null)

    expect(aggregateStatistics({
      _pristineFractalRelicsFromWallet: null,
      _pristineFractalRelicsFromTitles: 1
    }).pristineFractalRelics).to.equal(null)

    expect(aggregateStatistics({
      _pristineFractalRelicsFromWallet: 65,
      _pristineFractalRelicsFromTitles: 1200
    }).pristineFractalRelics).to.equal(1265)
  })

  it('can calculate luck sum', () => {
    expect(aggregateStatistics({}).luck).to.equal(null)

    expect(aggregateStatistics({
      _luckFromAccount: 1,
      _luckFromItems: null
    }).luck).to.equal(null)

    expect(aggregateStatistics({
      _luckFromAccount: null,
      _luckFromItems: 1
    }).luck).to.equal(null)

    expect(aggregateStatistics({
      _luckFromAccount: 65,
      _luckFromItems: 1200
    }).luck).to.equal(1265)
  })
})
