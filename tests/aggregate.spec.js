/* eslint-env node, mocha */
import { expect } from 'chai'
import aggregateStatistics from '../src/statistics/aggregate'

describe('statistics > aggregate', () => {
  it('can calculate total auras count', () => {
    expect(aggregateStatistics({}).totalAuras).to.equal(null)
    expect(aggregateStatistics({nightfury: 1}).totalAuras).to.equal(null)
    expect(aggregateStatistics({
      nightfury: 0,
      wintersPresence: 1,
      legendaryItemsTrinket: 1,
      rimeRimmedRebreather: 1,

      abyssalInfusion: 1,
      baubleInfusions: 1,
      celebratoryBirthdayEnrichment: 1,
      celestialInfusionBlue: 1,
      celestialInfusionRed: 1,
      chakEggSacks: 1,
      crystalInfusions: 1,
      deldrimorStoneskinInfusions: 1,
      emberInfusions: 1,
      festiveConfettiInfusions: 1,
      frostLegionInfusion: 1,
      ghostlyInfusions: 1,
      heartOfTheKhanUr: 1,
      jormagEyeInfusions: 1,
      kodasWarmthEnrichment: 1,
      liquidAurillium: 1,
      luminescentRefractors: 1,
      mysticInfusions: 1,
      ottersBlessingEnrichment: 1,
      peerlessInfusions: 1,
      phospholuminescentInfusions: 1,
      polysaturatingInfusions: 1,
      preservedQueenBees: 1,
      primordusEyeInfusions: 1,
      snowDiamondInfusions: 1,
      toyShellInfusions: 1,
      wintersHeartInfusions: 1,
      imperialEverbloom: 1,
      clockworkInfusion: 1,
      jotunInfusion: 1,
      wurmsBlessingEnrichment: 1,
      echoOfTheDragonvoid: 1,
      moteOfDarkness: 1,
      possessionInfusion: 1,
      silentSymphony: 1,
      arcaneFlowInfusion: 1,
      mistwalkerInfusion: 1,
      bloodstoneInfusion: 1,
      heatCoreInfusion: 1,
      forestWispInfusion: 1,

      // (!) Has to be ignored, else it's counting double
      celestialInfusion: 999
    }).totalAuras).to.equal(43)
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

  it('can calculate raid token count', () => {
    expect(aggregateStatistics({}).raidTokenCount).to.equal(null)

    expect(aggregateStatistics({
      _legendaryInsightsFromItems: null,
      _legendaryDivinationsFromItems: 1,
      _legendaryInsightsFromWallet: 1
    }).raidTokenCount).to.equal(null)

    expect(aggregateStatistics({
      _legendaryInsightsFromItems: 1,
      _legendaryDivinationsFromItems: null,
      _legendaryInsightsFromWallet: 1
    }).raidTokenCount).to.equal(null)

    expect(aggregateStatistics({
      _legendaryInsightsFromItems: 1,
      _legendaryDivinationsFromItems: 1,
      _legendaryInsightsFromWallet: null
    }).raidTokenCount).to.equal(null)

    expect(aggregateStatistics({
      _legendaryInsightsFromItems: 65,
      _legendaryDivinationsFromItems: 1200,
      _legendaryInsightsFromWallet: 1
    }).raidTokenCount).to.equal(1266)
  })

  it('can calculate unstable fractal essence sum', () => {
    expect(aggregateStatistics({}).unstableCosmicEssences).to.equal(null)

    expect(aggregateStatistics({
      _unstableFractalEssenceFromWallet: null,
      _unstableFractalEssenceFromUnlocks: 1,
      _unstableFractalEssenceFromItems: 1
    }).unstableCosmicEssences).to.equal(null)

    expect(aggregateStatistics({
      _unstableFractalEssenceFromWallet: 1,
      _unstableFractalEssenceFromUnlocks: null,
      _unstableFractalEssenceFromItems: 1
    }).unstableCosmicEssences).to.equal(null)

    expect(aggregateStatistics({
      _unstableFractalEssenceFromWallet: 1,
      _unstableFractalEssenceFromUnlocks: 1,
      _unstableFractalEssenceFromItems: null
    }).unstableCosmicEssences).to.equal(null)

    expect(aggregateStatistics({
      _unstableFractalEssenceFromWallet: 1651,
      _unstableFractalEssenceFromUnlocks: 500,
      _unstableFractalEssenceFromItems: 1200
    }).unstableCosmicEssences).to.equal(1651 + 500 + 1200)
  })
})
