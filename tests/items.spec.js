/* eslint-env node, mocha */
import { expect } from 'chai'
import itemsStatistics from '../src/statistics/items'

const generateAccount = (items) => {
  return {
    bank: items.slice(0, 1),
    characters: [{
      name: 'Holds items',
      equipment: [],
      bags: [
        {inventory: items.slice(1)}
      ]
    }]
  }
}

describe('statistics > items', () => {
  it('exits out when one of the permissions is missing', () => {
    const emptyObject = {
      baubleInfusions: null,
      brokenSpoons: null,
      chakEggSacks: null,
      fractalTonics: null,
      ghostlyInfusions: null,
      legendaryInsights: null,
      legendaryItems: null,
      luminescentRefractors: null,
      preservedQueenBees: null,
      permanentTools: null,
      whiteMantlePortalDevices: null,
      blackLionClaimTickets: null,
      instruments: null,
      chakEggs: null,
      fossilizedInsects: null,
      reclaimedMetalPlates: null,
      championBags: null,
      tripleTroubleChests: null,
      tequatlChests: null,
      uniqueTonics: null,
      bloodRubies: null,
      petrifiedWood: null,
      tomesOfKnowledge: null,
      permanentContracts: null,
      freshWinterberries: null,
      wintersHeartInfusions: null,
      kodasWarmthEnrichment: null,
      phospholuminescentInfusions: null,
      gemstoreToys: null,
      blackLionMiniatureClaimTickets: null,
      jadeShards: null,
      giftsOfExploration: null,
      giftsOfBattle: null,
      dragoniteOre: null,
      bloodstoneDust: null,
      empyrealFragments: null,
      crystallineOre: null,
      airshipOil: null,
      auricDust: null,
      leyLineSparks: null,
      legendarySpikes: null
    }

    const bothPermissions = {bank: null, characters: null}
    expect(itemsStatistics(bothPermissions)).to.deep.equal(emptyObject)

    const inventoriesPermission = {bank: null, characters: [{name: 'Yo'}]}
    expect(itemsStatistics(inventoriesPermission)).to.deep.equal(emptyObject)

    const charactersPermission = {bank: [{id: 30687}], characters: null}
    expect(itemsStatistics(charactersPermission)).to.deep.equal(emptyObject)
  })

  it('can calculate legendary count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 123, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 1, count: 1},
      {id: 7, count: 1}
    ])).legendaryItems).to.equal(2)
  })

  it('can calculate fractal tonic count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 49277, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 49277, count: 1},
      {id: 49277, count: 1}
    ])).fractalTonics).to.equal(3)
  })

  it('can calculate legendary insight count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 77302, count: 50},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 77302, count: 1},
      {id: 77302, count: 4}
    ])).legendaryInsights).to.equal(55)
  })

  it('can calculate white mantle portal device count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78978, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 78978, count: 1},
      {id: 78978, count: 1}
    ])).whiteMantlePortalDevices).to.equal(3)
  })

  it('can calculate chak egg sack count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 72021, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 72021, count: 1},
      {id: 72021, count: 1}
    ])).chakEggSacks).to.equal(3)
  })

  it('can calculate preserved queen bee count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 68440, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 68440, count: 1},
      {id: 68440, count: 1}
    ])).preservedQueenBees).to.equal(3)
  })

  it('can calculate ghostly infusion count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 77303, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 77316, count: 1},
      {id: 77394, count: 1}
    ])).ghostlyInfusions).to.equal(3)
  })

  it('can calculate bauble infusion count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78079, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 78028, count: 1},
      {id: 78097, count: 1}
    ])).baubleInfusions).to.equal(3)
  })

  it('can calculate luminescent refractor count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 67375, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 67370, count: 1},
      {id: 67372, count: 1}
    ])).luminescentRefractors).to.equal(3)
  })

  it('can calculate broken spoon count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 74996, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 74996, count: 1},
      {id: 74996, count: 1}
    ])).brokenSpoons).to.equal(3)
  })

  it('can calculate black lion claim ticket count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 43992, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 43998, count: 3},
      {id: 43998, count: 1}
    ])).blackLionClaimTickets).to.equal(1.4)

    expect(itemsStatistics(generateAccount([
      {id: 43992, count: 3},
      {id: 30687, count: 1},
      {id: 43998, count: 164}
    ])).blackLionClaimTickets).to.equal(19.4)
  })

  it('can calculate instrument count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 66323, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 38129, count: 1},
      {id: 43526, count: 1}
    ])).instruments).to.equal(2)
  })

  it('can calculate permanent tool count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78806, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 38129, count: 1},
      {id: 47897, count: 1}
    ])).permanentTools).to.equal(2)
  })

  it('can calculate chak egg count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 72205, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 72205, count: 1},
      {id: 72205, count: 1}
    ])).chakEggs).to.equal(3)
  })

  it('can calculate reclaimed metal plate count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 74356, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 74356, count: 1},
      {id: 74356, count: 1}
    ])).reclaimedMetalPlates).to.equal(3)
  })

  it('can calculate fossilized insects count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 66655, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 66646, count: 1},
      {id: 66642, count: 1}
    ])).fossilizedInsects).to.equal(3)
  })

  it('can calculate champion bag count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 44216, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 44226, count: 1},
      {id: 44199, count: 250}
    ])).championBags).to.equal(252)
  })

  it('can calculate triple trouble chest count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 49664, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 49664, count: 1},
      {id: 49664, count: 250}
    ])).tripleTroubleChests).to.equal(252)
  })

  it('can calculate tequatl chest count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 47836, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 47836, count: 1},
      {id: 47836, count: 250}
    ])).tequatlChests).to.equal(252)
  })

  it('can calculate unique tonic count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 68046, count: 3},
      {id: 2, count: 1},
      {id: 66768, count: 1},
      {id: 66926, count: 1},
      {id: 5, count: 250},
      {id: 68046, count: 100}
    ])).uniqueTonics).to.equal(2)
  })

  it('can calculate blood ruby count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 79280, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 79280, count: 1},
      {id: 79280, count: 250}
    ])).bloodRubies).to.equal(252)
  })

  it('can calculate petrified wood count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 79469, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 79469, count: 1},
      {id: 79469, count: 250}
    ])).petrifiedWood).to.equal(252)
  })

  it('can calculate tomes of knowledge count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 43741, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 43741, count: 1},
      {id: 43766, count: 250}
    ])).tomesOfKnowledge).to.equal(252)
  })

  it('can calculate permanent contract count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 35985, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 35984, count: 1},
      {id: 49501, count: 1}
    ])).permanentContracts).to.equal(3)
  })

  it('can calculate fresh winterberry count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 79899, count: 2},
      {id: 30687, count: 1},
      {id: 79899, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).freshWinterberries).to.equal(4)
  })

  it('can calculate winter\' heart infusion count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 79899, count: 2},
      {id: 79994, count: 1},
      {id: 79959, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).wintersHeartInfusions).to.equal(2)
  })

  it('can calculate kodas warmth enrichment count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 79899, count: 2},
      {id: 30687, count: 1},
      {id: 79926, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).kodasWarmthEnrichment).to.equal(1)
  })

  it('can calculate phospholuminescent infusions count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 79899, count: 2},
      {id: 30687, count: 1},
      {id: 79653, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).phospholuminescentInfusions).to.equal(1)
  })

  it('can calculate gemstore toys count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 79899, count: 2},
      {id: 30687, count: 1},
      {id: 49939, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).gemstoreToys).to.equal(1)
  })

  it('can calculate black lion miniature claim tickets count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 2},
      {id: 30687, count: 1},
      {id: 78474, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).blackLionMiniatureClaimTickets).to.equal(3)
  })

  it('can calculate jade shards count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 80332, count: 2},
      {id: 78474, count: 2},
      {id: 78474, count: 1},
      {id: 80332, count: 1},
      {id: 49501, count: 1}
    ])).jadeShards).to.equal(3)
  })

  it('can calculate gifts of exploration count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 19677, count: 2},
      {id: 78474, count: 2},
      {id: 78474, count: 1},
      {id: 19677, count: 1},
      {id: 49501, count: 1}
    ])).giftsOfExploration).to.equal(3)
  })

  it('can calculate gifts of battle count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 19678, count: 2},
      {id: 78474, count: 2},
      {id: 78474, count: 1},
      {id: 19678, count: 1},
      {id: 49501, count: 1}
    ])).giftsOfBattle).to.equal(3)
  })

  it('can calculate dragonite ore count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 46733, count: 22},
      {id: 78474, count: 1},
      {id: 19677, count: 1},
      {id: 46732, count: 4}
    ])).dragoniteOre).to.equal(422)
  })

  it('can calculate bloodstone dust count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 46731, count: 22},
      {id: 78474, count: 1},
      {id: 19677, count: 1},
      {id: 46730, count: 4}
    ])).bloodstoneDust).to.equal(422)
  })

  it('can calculate empyreal fragments count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 46735, count: 22},
      {id: 78474, count: 1},
      {id: 19677, count: 1},
      {id: 46734, count: 4}
    ])).empyrealFragments).to.equal(422)
  })

  it('can calculate crystalline ore count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 46682, count: 22},
      {id: 78474, count: 1},
      {id: 19677, count: 1},
      {id: 46683, count: 4}
    ])).crystallineOre).to.equal(26)
  })

  it('can calculate airship oil count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 46682, count: 22},
      {id: 78474, count: 1},
      {id: 76933, count: 1},
      {id: 69434, count: 4}
    ])).airshipOil).to.equal(5)
  })

  it('can calculate auric dust count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 69432, count: 22},
      {id: 73537, count: 1},
      {id: 76933, count: 1},
      {id: 69434, count: 4}
    ])).auricDust).to.equal(53)
  })

  it('can calculate ley line sparks count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 69392, count: 22},
      {id: 76933, count: 1},
      {id: 74042, count: 1},
      {id: 69434, count: 4}
    ])).leyLineSparks).to.equal(24)
  })

  it('can calculate legendary spikes count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 81296, count: 22},
      {id: 76933, count: 1},
      {id: 74042, count: 1},
      {id: 69434, count: 4}
    ])).legendarySpikes).to.equal(22)
  })
})
