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
      legendaryItemsWeapon: null,
      legendaryItemsArmor: null,
      legendaryItemsBack: null,
      legendaryItemsTrinket: null,
      luminescentRefractors: null,
      preservedQueenBees: null,
      permanentTools: null,
      whiteMantlePortalDevices: null,
      blackLionClaimTickets: null,
      instruments: null,
      musicBoxes: null,
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
      luck: null,
      legendarySpikes: null,
      fireOrchidBlossoms: null,
      orrianPearls: null,
      liquidAurillium: null,
      celestialInfusion: null,
      unstableCosmicEssences: null,
      festiveConfettiInfusions: null,
      kralkatiteOre: null,
      potionOfPvpRewards: null,
      potionOfWvwRewards: null,
      skirmishChests: null
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
      {id: 80205, count: 1},
      {id: 77474, count: 1}
    ])).legendaryItems).to.equal(4)
  })

  it('can calculate legendary weapon count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 123, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 1, count: 1},
      {id: 7, count: 1},
      {id: 77474, count: 1}
    ])).legendaryItemsWeapon).to.equal(2)
  })

  it('can calculate legendary armor count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 123, count: 1},
      {id: 80254, count: 1},
      {id: 80277, count: 1},
      {id: 1, count: 1},
      {id: 7, count: 1},
      {id: 77474, count: 1}
    ])).legendaryItemsArmor).to.equal(2)
  })

  it('can calculate legendary back count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 123, count: 1},
      {id: 74155, count: 1},
      {id: 80277, count: 1},
      {id: 1, count: 1},
      {id: 30704, count: 1},
      {id: 77474, count: 1}
    ])).legendaryItemsBack).to.equal(2)
  })

  it('can calculate legendary trinket count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 123, count: 1},
      {id: 74155, count: 1},
      {id: 80277, count: 1},
      {id: 1, count: 1},
      {id: 81908, count: 1},
      {id: 77474, count: 1}
    ])).legendaryItemsTrinket).to.equal(1)
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
    const items = {
      // Heavy Ascended
      RefinedEnvoyHelmet: 80387,
      RefinedEnvoyPauldrons: 80236,
      RefinedEnvoyBreastplate: 80648,
      RefinedEnvoyGauntlets: 80673,
      RefinedEnvoyTassets: 80427,
      RefinedEnvoyGreaves: 80127,

      // Medium Ascended
      RefinedEnvoyMask: 80634,
      RefinedEnvoyShoulderpads: 80366,
      RefinedEnvoyJerkin: 80607,
      RefinedEnvoyVambraces: 80658,
      RefinedEnvoyLeggings: 80675,
      RefinedEnvoyBoots: 80177,

      // Light Ascended
      RefinedEnvoyCowl: 80441,
      RefinedEnvoyMantle: 80264,
      RefinedEnvoyVestments: 80120,
      RefinedEnvoyGloves: 80460,
      RefinedEnvoyPants: 80275,
      RefinedEnvoyShoes: 80583,

      // Heavy Legendary
      PerfectedEnvoyHelmet: 80384,
      PerfectedEnvoyPauldrons: 80435,
      PerfectedEnvoyBreastplate: 80254,
      PerfectedEnvoyGauntlets: 80205,
      PerfectedEnvoyTassets: 80277,
      PerfectedEnvoyGreaves: 80557,

      // Medium Legendary
      PerfectedEnvoyMask: 80296,
      PerfectedEnvoyShoulderpads: 80145,
      PerfectedEnvoyJerkin: 80578,
      PerfectedEnvoyVambraces: 80161,
      PerfectedEnvoyLeggings: 80252,
      PerfectedEnvoyBoots: 80281,

      // Light Legendary
      PerfectedEnvoyCowl: 80248,
      PerfectedEnvoyMantle: 80131,
      PerfectedEnvoyVestments: 80190,
      PerfectedEnvoyGloves: 80111,
      PerfectedEnvoyPants: 80356,
      PerfectedEnvoyShoes: 80399
    }

    function countFromList (itemList) {
      const account = generateAccount(itemList.map(id => ({id, count: 1})))
      return itemsStatistics(account).legendaryInsights
    }

    // Count the basic items
    expect(itemsStatistics(generateAccount([
      {id: 80516, count: 3}, // Envoy Insignia => 25 each
      {id: 78989, count: 1}, // Gift of Prowess => 25 each
      {id: 77302, count: 7}  // Legendary Insight => 1 each
    ])).legendaryInsights, 'basic items').to.equal(3 * 25 + 25 + 7)

    // Count the full first ascended set (from the achievement, so no LI spent)
    const oneWeightAscendedSet = [
      items.RefinedEnvoyHelmet, items.RefinedEnvoyPauldrons, items.RefinedEnvoyBreastplate,
      items.RefinedEnvoyGauntlets, items.RefinedEnvoyTassets, items.RefinedEnvoyGreaves
    ]
    expect(countFromList(oneWeightAscendedSet), 'oneWeightAscendedSet')
      .to.equal(0)

    // Count the full first ascended set (from the achievement, so no LI spent)
    // and some extra ascended items that got crafted via 25 LI insignias
    const oneWeightAscendedSetPlusExtra = [
      items.RefinedEnvoyHelmet, items.RefinedEnvoyPauldrons, items.RefinedEnvoyBreastplate,
      items.RefinedEnvoyGauntlets, items.RefinedEnvoyTassets, items.RefinedEnvoyGreaves,
      items.RefinedEnvoyHelmet, items.RefinedEnvoyCowl // one of the same weight, one in a different one
    ]
    expect(countFromList(oneWeightAscendedSetPlusExtra), 'oneWeightAscendedSetPlusExtra')
      .to.equal(25 + 25)

    // Count all first ascended sets (one from the achievement, so no LI spent and two for 25/each)
    const allAscendedSets = [
      items.RefinedEnvoyHelmet, items.RefinedEnvoyPauldrons, items.RefinedEnvoyBreastplate,
      items.RefinedEnvoyGauntlets, items.RefinedEnvoyTassets, items.RefinedEnvoyGreaves,

      items.RefinedEnvoyMask, items.RefinedEnvoyShoulderpads, items.RefinedEnvoyJerkin,
      items.RefinedEnvoyVambraces, items.RefinedEnvoyLeggings, items.RefinedEnvoyBoots,

      items.RefinedEnvoyCowl, items.RefinedEnvoyMantle, items.RefinedEnvoyVestments,
      items.RefinedEnvoyGloves, items.RefinedEnvoyPants, items.RefinedEnvoyShoes
    ]
    expect(countFromList(allAscendedSets), 'allAscendedSets')
      .to.equal(2 * 6 * 25)

    // Count the full first legendary set (the precursor was from the achievement, so no LI spent)
    // but the ascended -> legendary conversion costs 25
    const oneWeightLegendarySet = [
      items.PerfectedEnvoyHelmet, items.PerfectedEnvoyPauldrons, items.PerfectedEnvoyBreastplate,
      items.PerfectedEnvoyGauntlets, items.PerfectedEnvoyTassets, items.PerfectedEnvoyGreaves
    ]
    expect(countFromList(oneWeightLegendarySet), 'oneWeightLegendarySet')
      .to.equal(6 * 25)

    // Count the full first legendary set (the precursor was from the achievement, so no LI spent)
    // but the ascended -> legendary conversion costs 25 and some extra ascended items that got crafted via 25 LI insignias
    const oneWeightLegendarySetSetPlusExtraAscended = [
      items.PerfectedEnvoyHelmet, items.PerfectedEnvoyPauldrons, items.PerfectedEnvoyBreastplate,
      items.PerfectedEnvoyGauntlets, items.PerfectedEnvoyTassets, items.PerfectedEnvoyGreaves,
      items.RefinedEnvoyHelmet, items.RefinedEnvoyCowl // one of the same weight, one in a different one
    ]
    expect(countFromList(oneWeightLegendarySetSetPlusExtraAscended), 'oneWeightLegendarySetSetPlusExtraAscended')
      .to.equal(6 * 25 + 25 + 25)

    // Count the full first legendary set (the precursor was from the achievement, so no LI spent)
    // but the ascended -> legendary conversion costs 25 and some extra ascended items that got crafted via 25 LI insignias
    // and some extra legendary items that got crafted (25 for the precursor and 25 for the conversion)
    const oneWeightLegendarySetPlusExtraLegendary = [
      items.PerfectedEnvoyHelmet, items.PerfectedEnvoyPauldrons, items.PerfectedEnvoyBreastplate,
      items.PerfectedEnvoyGauntlets, items.PerfectedEnvoyTassets, items.PerfectedEnvoyGreaves,
      items.RefinedEnvoyHelmet, items.RefinedEnvoyCowl, // one of the same weight, one in a different one
      items.PerfectedEnvoyHelmet, items.PerfectedEnvoyCowl // one of the same weight, one in a different one
    ]
    expect(countFromList(oneWeightLegendarySetPlusExtraLegendary), 'oneWeightLegendarySetPlusExtraLegendary').to.equal(
      6 * 25 + // First set, where the precursor was free
      25 + 25 + // Extra refined items, 25 each
      50 + 50 // Extra perfected items, 50 each
    )

    // Count the full first legendary set (one of the precursor sets was from the achievement, so no LI spent)
    // but the ascended -> legendary conversion costs 25 and the second set costs 25 extra for the precursor
    const allLegendarySets = [
      items.PerfectedEnvoyHelmet, items.PerfectedEnvoyPauldrons, items.PerfectedEnvoyBreastplate,
      items.PerfectedEnvoyGauntlets, items.PerfectedEnvoyTassets, items.PerfectedEnvoyGreaves,

      items.PerfectedEnvoyMask, items.PerfectedEnvoyShoulderpads, items.PerfectedEnvoyJerkin,
      items.PerfectedEnvoyVambraces, items.PerfectedEnvoyLeggings, items.PerfectedEnvoyBoots,

      items.PerfectedEnvoyCowl, items.PerfectedEnvoyMantle, items.PerfectedEnvoyVestments,
      items.PerfectedEnvoyGloves, items.PerfectedEnvoyPants, items.PerfectedEnvoyShoes,

      items.RefinedEnvoyHelmet, items.RefinedEnvoyCowl, // extra refined items
      items.PerfectedEnvoyHelmet, items.PerfectedEnvoyCowl // extra perfected items
    ]
    expect(countFromList(allLegendarySets), 'allLegendarySets').to.equal(
      6 * 25 + // First set, where the precursor was free
      2 * 6 * (25 + 25) + // Second and third set, where the precursor was 25 LI
      25 + 25 + // Extra refined items, 25 each
      50 + 50 // Extra perfected items, 50 each
    )
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

  it('can calculate music box count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 66323, count: 1},
      {id: 30687, count: 1},
      {id: 82432, count: 1},
      {id: 38129, count: 1},
      {id: 83826, count: 1}
    ])).musicBoxes).to.equal(2)
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

  it('can calculate liquid aurillium count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 76063, count: 2},
      {id: 81715, count: 1},
      {id: 79653, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).liquidAurillium).to.equal(3)
  })

  it('can calculate celestial infusion count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 81811, count: 2},
      {id: 81927, count: 1},
      {id: 79653, count: 1},
      {id: 79899, count: 1},
      {id: 49501, count: 1}
    ])).celestialInfusion).to.equal(3)
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

  it('can calculate fire orchid blossoms count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 81296, count: 22},
      {id: 81127, count: 1},
      {id: 74042, count: 1},
      {id: 81127, count: 4}
    ])).fireOrchidBlossoms).to.equal(5)
  })

  it('can calculate orrian peal count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78474, count: 1},
      {id: 81296, count: 22},
      {id: 81706, count: 1},
      {id: 74042, count: 1},
      {id: 81706, count: 4}
    ])).orrianPearls).to.equal(5)
  })

  it('can calculate luck', () => {
    expect(itemsStatistics(generateAccount([
      {id: 45175, count: 1}, // 10
      {id: 45175, count: 5}, // 50
      {id: 45176, count: 1}, // 50
      {id: 45176, count: 8}, // 400
      {id: 45177, count: 1}, // 100
      {id: 45177, count: 4}, // 400
      {id: 45178, count: 1}, // 200
      {id: 45178, count: 3}, // 600
      {id: 45179, count: 1}, // 500
      {id: 45179, count: 7}  // 3500
    ])).luck).to.equal(5810)
  })

  it('can calculate unstable cosmic essences', () => {
    expect(itemsStatistics(generateAccount([
      {id: 45175, count: 1},
      {id: 45175, count: 5},
      {id: 81743, count: 3},
      {id: 45176, count: 8},
      {id: 45177, count: 1},
      {id: 45177, count: 4},
      {id: 81743, count: 9},
      {id: 45178, count: 3},
      {id: 45179, count: 1},
      {id: 45179, count: 7}
    ])).unstableCosmicEssences).to.equal(12)
  })

  it('can calculate kralkatite ore', () => {
    expect(itemsStatistics(generateAccount([
      {id: 45175, count: 1},
      {id: 45175, count: 5},
      {id: 81743, count: 3},
      {id: 45176, count: 8},
      {id: 45177, count: 1},
      {id: 86069, count: 4},
      {id: 81743, count: 9},
      {id: 45178, count: 3},
      {id: 86069, count: 1},
      {id: 45179, count: 7}
    ])).kralkatiteOre).to.equal(5)
  })

  it('can calculate festive confetti infusions', () => {
    expect(itemsStatistics(generateAccount([
      {id: 45175, count: 1},
      {id: 45175, count: 1},
      {id: 84970, count: 1},
      {id: 45176, count: 1},
      {id: 45177, count: 1},
      {id: 84871, count: 1},
      {id: 81743, count: 1},
      {id: 45178, count: 1},
      {id: 84882, count: 1},
      {id: 84882, count: 1}
    ])).festiveConfettiInfusions).to.equal(4)
  })

  it('can calculate potions of pvp reward', () => {
    expect(itemsStatistics(generateAccount([
      {id: 45175, count: 1},
      {id: 45175, count: 1},
      {id: 68110, count: 1},
      {id: 45176, count: 1},
      {id: 45177, count: 1},
      {id: 68110, count: 1},
      {id: 81743, count: 1},
      {id: 45178, count: 1},
      {id: 84882, count: 1},
      {id: 84882, count: 1}
    ])).potionOfPvpRewards).to.equal(2)
  })

  it('can calculate potions of wvw reward', () => {
    expect(itemsStatistics(generateAccount([
      {id: 45175, count: 1},
      {id: 45175, count: 1},
      {id: 68110, count: 1},
      {id: 78600, count: 1},
      {id: 45177, count: 1},
      {id: 68110, count: 1},
      {id: 81743, count: 1},
      {id: 78600, count: 1},
      {id: 84882, count: 1},
      {id: 84882, count: 1}
    ])).potionOfWvwRewards).to.equal(2)
  })

  it('can calculate skirmish chests', () => {
    expect(itemsStatistics(generateAccount([
      {id: 45175, count: 1},
      {id: 84966, count: 1},
      {id: 68110, count: 1},
      {id: 78600, count: 1},
      {id: 45177, count: 1},
      {id: 68110, count: 1},
      {id: 81743, count: 1},
      {id: 81324, count: 1},
      {id: 84882, count: 1},
      {id: 84882, count: 1}
    ])).skirmishChests).to.equal(2)
  })
})
