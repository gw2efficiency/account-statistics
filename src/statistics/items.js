import unique from 'array-unique'
import round from 'round-to'
import { bankItems } from 'gw2e-account-value/build/bank'
import { materialsItems } from 'gw2e-account-value/build/materials'
import { charactersItems } from 'gw2e-account-value/build/characters'
import { sharedInventoryItems } from 'gw2e-account-value/build/shared'
import legendaries from 'gw2e-static-data/build/legendaries'
import tonics from 'gw2e-static-data/build/legacy/tonics'
import permanentToolIds from '../static/permanentToolIds'
import championBagIds from '../static/championBagIds'
import gemstoreToyIds from '../static/gemstoreToyIds'
import luckItemIds from '../static/luckIds'
import legendaryInsightItemIds from '../static/legendaryInsightItemIds'

export default function (accountData) {
  const items = allItems(accountData)

  return {
    legendaryItems: countItems(items, legendaries.map(x => x.id)),
    legendaryItemsWeapon: countItems(items, legendaries.filter(x => x.type === 'weapon').map(x => x.id)),
    legendaryItemsArmor: countItems(items, legendaries.filter(x => x.type === 'armor').map(x => x.id)),
    legendaryItemsBack: countItems(items, legendaries.filter(x => x.type === 'back').map(x => x.id)),
    legendaryItemsTrinket: countItems(items, legendaries.filter(x => x.type === 'trinket').map(x => x.id)),
    fractalTonics: countItems(items, 49277),
    legendaryInsights: countLegendaryInsights(items),
    whiteMantlePortalDevices: countItems(items, 78978),
    brokenSpoons: countItems(items, 74996),
    blackLionClaimTickets: weightedCountItems(items, {43992: 1, 43998: 0.1}),
    instruments: countItems(items, [
      36174, // Musical Bass Guitar
      38129, // Unbreakable Choir Bell
      42888, // Marriner's Horn
      42973, // Flute
      43008, // Flute
      43526, // Musical Frame Drum
      44883, // Musical Harp
      46500, // World 1 Super Boom Box
      46501, // World 1 Super Boom Box
      46504, // World 2 Super Boom Box
      66323, // Musical Lute
      67391, // Haunted Gramophone
      68361, // Magnanimous Choir Bell
      80932, // Duskk's World 2 Super Boom Box
      80972, // Duskk's World 1 Super Boom Box
      88004, // Musical Minstrel
      88066, // Musical Verdarach
      88385 // Unbreakable Choir Bell
    ]),
    musicBoxes: countItems(items, [
      67391, // Haunted Gramophone
      71747, // Zephyrites Music Box
      82286, // Hafez's Music Box
      82432, // Ghiwane's  Music Box
      83444, // Tinari's Music Box
      83826, // Khadiri's Music Box
      84566 // Nightingale's Music Box
    ]),
    permanentTools: countItems(items, permanentToolIds),
    chakEggs: countItems(items, 72205),
    reclaimedMetalPlates: countItems(items, 74356),
    fossilizedInsects: countItems(items, [
      66636, // Ambrite Fossilized Centipede
      66640, // Ambrite Fossilized Butterfly
      66642, // Ambrite Fossilized Termite
      66644, // Ambrite Fossilized Firefly
      66645, // Ambrite Fossilized Millipede
      66646, // Ambrite Fossilized Dragonfly
      66647, // Ambrite Fossilized Grub
      66648, // Ambrite Fossilized Hornet
      66649, // Ambrite Fossilized Cricket
      66651, // Ambrite Fossilized Spider
      66652, // Ambrite Fossilized Cockroach
      66653, // Ambrite Fossilized Beetle
      66654, // Ambrite Fossilized Devourer
      66655, // Ambrite Fossilized Bee
      66656, // Ambrite Fossilized Mosquito
      66657 // Ambrite Fossilized Mantis
    ]),
    championBags: countItems(items, championBagIds),
    tripleTroubleChests: countItems(items, 49664),
    tequatlChests: countItems(items, 47836),
    uniqueTonics: countItems(items, tonics.filter(x => x.permanent).map(x => x.ids), true),
    bloodRubies: countItems(items, 79280),
    petrifiedWood: countItems(items, 79469),
    tomesOfKnowledge: countItems(items, [43741, 43766]),
    permanentContracts: countItems(items, [
      35976, // Personal Trader Express
      35977, // Personal Merchant Express
      35978, // Permanent Bank Access Express
      35984, // Permanent Bank Access Contract
      35985, // Permanent Black Lion Merchant Contract
      35986, // Permanent Trading Post Express Contract
      38506, // Permanent Self-Style Hair Kit
      38507, // Permanent Hair Stylist Contract
      49501, // Tarrktun Personal Delivery Portal
      78217, // Endless Repair Canister
      78455, // Endless Repair Contract
      86497, // Endless Upgrade Extractor Contract
      86549 // Endless Upgrade Extractor
    ]),
    freshWinterberries: countItems(items, 79899),
    gemstoreToys: countItems(items, gemstoreToyIds),
    blackLionMiniatureClaimTickets: countItems(items, 78474),
    jadeShards: countItems(items, 80332),
    giftsOfExploration: countItems(items, 19677),
    giftsOfBattle: countItems(items, 19678),
    dragoniteOre: weightedCountItems(items, {46733: 1, 46732: 100}),
    bloodstoneDust: weightedCountItems(items, {46731: 1, 46730: 100}),
    empyrealFragments: weightedCountItems(items, {46735: 1, 46734: 100}),
    crystallineOre: countItems(items, [46682, 46683]),
    airshipOil: countItems(items, [69434, 76933]),
    auricDust: weightedCountItems(items, {69432: 1, 76933: 1, 73537: 30}),
    leyLineSparks: countItems(items, [69392, 76933, 74042]),
    legendarySpikes: countItems(items, 81296),
    fireOrchidBlossoms: countItems(items, 81127),
    orrianPearls: countItems(items, 81706),
    luck: weightedCountItems(items, luckItemIds),
    unstableCosmicEssences: countItems(items, 81743),
    kralkatiteOre: countItems(items, 86069),
    potionOfPvpRewards: countItems(items, 68110),
    potionOfWvwRewards: countItems(items, 78600),
    skirmishChests: countItems(items, [84966, 81324]),
    difluoriteCrystals: countItems(items, 86977),
    kites: countItems(items, [
      42967, // Lightning Kite
      43076, // Wind Kite
      43487, // Sun Kite
      43930, // Guild Kite
      44638, // Hot Air Balloon Souvenir
      66897, // Prosperity Mine Kite
      66898, // Crystal Shard Kite
      66900, // Ventari Follower Kite
      68614, // Red Lantern
      84916, // Sand Shark Kite
      84950, // Red Choya Kite
      85100, // Blue Choya Kite
      85173, // Zebra Skimmer Kite
      85240, // Skimmer Kite
      85302, // Green Choya Kite
      85315, // Watermelon Sand Shark Kite
      88124, // Embellished Kite
      88131, // Mark of Peace Kite
      88216 // Ornamental Kite
    ]),

    // Aura items
    chakEggSacks: countItems(items, [
      72021, // Chak Egg Sac
      81616, // Chak Infusion
      81677, // Chak Infusion
      81807, // Chak Infusion
      81825, // Chak Infusion
      81840, // Chak Infusion
      82044, // Chak Infusion
      85668, // Chak Infusion
      86251 // Chak Infusion
    ]),
    preservedQueenBees: countItems(items, [
      68440, // Preserved Queen Bee
      77594, // Preserved Queen Bee
      81638, // Queen Bee Infusion
      81663, // Queen Bee Infusion
      81679, // Queen Bee Infusion
      81701, // Queen Bee Infusion
      81818, // Queen Bee Infusion
      81897, // Queen Bee Infusion
      86055, // Queen Bee Infusion
      86303 // Queen Bee Infusion
    ]),
    ghostlyInfusions: countItems(items, [
      77274, // Ghostly Infusion
      77303, // Ghostly Infusion
      77310, // Ghostly Infusion
      77316, // Ghostly Infusion
      77366, // Ghostly Infusion
      77394, // Ghostly Infusion
      85644, // Ghostly Infusion
      85945 // Ghostly Infusion
    ]),
    baubleInfusions: countItems(items, [
      78012, // Moto's Unstable Bauble Infusion: Blue
      78016, // Moto's Unstable Bauble Infusion: Red
      78028, // Moto's Unstable Bauble Infusion: Red
      78030, // Moto's Unstable Bauble Infusion: Red
      78031, // Moto's Unstable Bauble Infusion: Red
      78052, // Moto's Unstable Bauble Infusion: Blue
      78054, // Moto's Unstable Bauble Infusion: Blue
      78057, // Moto's Unstable Bauble Infusion: Red
      78079, // Moto's Unstable Bauble Infusion: Blue
      78086, // Moto's Unstable Bauble Infusion: Blue
      78090, // Moto's Unstable Bauble Infusion: Blue
      78097, // Moto's Unstable Bauble Infusion: Red
      86446, // Moto's Unstable Bauble Infusion: Red
      86453, // Moto's Unstable Bauble Infusion: Red
      86552, // Moto's Unstable Bauble Infusion: Blue
      86571 // Moto's Unstable Bauble Infusion: Blue
    ]),
    luminescentRefractors: countItems(items, [
      67370, // Poly-luminescent Undulating Refractor (Green)
      67372, // Poly-luminescent Undulating Refractor (Orange)
      67375, // Poly-luminescent Undulating Refractor (Black)
      79647, // Poly-luminescent Undulating Refractor (Teal)
      81612, // Poly-luminescent Undulating Infusion (Green)
      81624, // Poly-luminescent Undulating Infusion (Black)
      81641, // Poly-luminescent Undulating Infusion (Teal)
      81653, // Poly-luminescent Undulating Infusion (Teal)
      81655, // Poly-luminescent Undulating Infusion (Teal)
      81678, // Poly-luminescent Undulating Infusion (Green)
      81709, // Poly-luminescent Undulating Infusion (Black)
      81727, // Poly-luminescent Undulating Infusion (Green)
      81777, // Poly-luminescent Undulating Infusion (Teal)
      81809, // Poly-luminescent Undulating Infusion (Orange)
      81810, // Poly-luminescent Undulating Infusion (Black)
      81847, // Poly-luminescent Undulating Infusion (Orange)
      81858, // Poly-luminescent Undulating Infusion (Teal)
      81864, // Poly-luminescent Undulating Infusion (Orange)
      81877, // Poly-luminescent Undulating Infusion (Black)
      81881, // Poly-luminescent Undulating Infusion (Orange)
      81911, // Poly-luminescent Undulating Infusion (Orange)
      81930, // Poly-luminescent Undulating Infusion (Orange)
      81948, // Poly-luminescent Undulating Infusion (Green)
      81959, // Poly-luminescent Undulating Infusion (Teal)
      81988, // Poly-luminescent Undulating Infusion (Green)
      82013, // Poly-luminescent Undulating Infusion (Black)
      82039, // Poly-luminescent Undulating Infusion (Black)
      82055, // Poly-luminescent Undulating Infusion (Green)
      85682, // Poly-luminescent Undulating Infusion (Green)
      85694, // Poly-luminescent Undulating Infusion (Orange)
      85974, // Poly-luminescent Undulating Infusion (Black)
      86068, // Poly-luminescent Undulating Infusion (Teal)
      86183, // Poly-luminescent Undulating Infusion (Green)
      86248, // Poly-luminescent Undulating Infusion (Black)
      86310, // Poly-luminescent Undulating Infusion (Orange)
      86312 // Poly-luminescent Undulating Infusion (Teal)
    ]),
    wintersHeartInfusions: countItems(items, [
      79943, // Winter's Heart Infusion
      79957, // Winter's Heart Infusion
      79959, // Winter's Heart Infusion
      79978, // Winter's Heart Infusion
      79994, // Winter's Heart Infusion
      80063, // Winter's Heart Infusion
      85718, // Winter's Heart Infusion
      85734 // Winter's Heart Infusion
    ]),
    kodasWarmthEnrichment: countItems(items, 79926),
    phospholuminescentInfusions: countItems(items, [
      79639, // Phospholuminescent Infusion
      79653, // Phospholuminescent Infusion
      79661, // Phospholuminescent Infusion
      79665, // Phospholuminescent Infusion
      79669, // Phospholuminescent Infusion
      79674, // Phospholuminescent Infusion
      85863, // Phospholuminescent Infusion
      85885 // Phospholuminescent Infusion
    ]),
    liquidAurillium: countItems(items, [
      76063, // Vial of Liquid Aurillium
      81715, // Liquid Aurillium Infusion
      81875, // Liquid Aurillium Infusion
      81889, // Liquid Aurillium Infusion
      81918, // Liquid Aurillium Infusion
      81975, // Liquid Aurillium Infusion
      82006, // Liquid Aurillium Infusion
      86275, // Liquid Aurillium Infusion
      86291 // Liquid Aurillium Infusion
    ]),
    celestialInfusion: countItems(items, [
      81761, // Celestial Infusion (Blue)
      81779, // Celestial Infusion (Blue)
      81783, // Celestial Infusion (Red)
      81792, // Celestial Infusion (Red)
      81811, // Celestial Infusion (Blue)
      81814, // Celestial Infusion (Red)
      81878, // Celestial Infusion (Blue)
      81919, // Celestial Infusion (Blue)
      81927, // Celestial Infusion (Red)
      81991, // Celestial Infusion (Blue)
      82062, // Celestial Infusion (Red)
      82070, // Celestial Infusion (Red)
      85646, // Celestial Infusion (Red)
      85833, // Celestial Infusion (Red)
      85989, // Celestial Infusion (Blue)
      86347 // Celestial Infusion (Blue)
    ]),
    festiveConfettiInfusions: countItems(items, [
      84871, // Festive Confetti Infusion
      84882, // Festive Confetti Infusion
      84937, // Festive Confetti Infusion
      84959, // Festive Confetti Infusion
      84970, // Festive Confetti Infusion
      85900, // Festive Confetti Infusion
      85996 // Festive Confetti Infusion
    ]),
    snowDiamondInfusions: countItems(items, [
      86401, // Snow Diamond Infusion
      86405, // Snow Diamond Infusion
      86407, // Snow Diamond Infusion
      86537, // Snow Diamond Infusion
      86597, // Snow Diamond Infusion
      86665, // Snow Diamond Infusion
      86666, // Snow Diamond Infusion
      86704 // Snow Diamond Infusion
    ])
  }
}

// Get all the items on the account
export function allItems (accountData) {
  const items = [
    charactersItems(accountData),
    bankItems(accountData),
    materialsItems(accountData),
    sharedInventoryItems(accountData)
  ]

  // The "characters" permission is probably missing, in which case
  // we want to abort to prevent issues with multiple API keys
  if (items[0].length === 0) {
    return []
  }

  return items.reduce((a, b) => a.concat(b), [])
}

// Count how many of a list of items the user has
function countItems (items, ids, uniqueItems = false) {
  if (items.length === 0) {
    return null
  }

  // Make sure we always use an array with all ids
  ids = [].concat(ids)
  const idNumbers = ids.reduce((a, b) => a.concat(b), [])

  // Find the items matching our search ids
  items = items.filter(x => idNumbers.indexOf(x.id) !== -1)

  // Add up the amount of items the user has
  if (!uniqueItems) {
    return items.map(x => x.count).reduce((a, b) => a + b, 0)
  }

  // See how many unique items the user has
  items = unique(items.map(x => x.id))

  // Filter arrays of ids that unlock the same thing, see if they
  // appear in the items and then make sure that they only appear once
  ids
    .filter(id => typeof id !== 'number')
    .filter(id => items.find(x => id.indexOf(x) !== -1) !== undefined)
    .map(id => {
      items = items.filter(x => id.indexOf(x) === -1)
      items.push(id[0])
    })

  return items.length
}

// Weighted item counts
function weightedCountItems (items, itemList) {
  if (items.length === 0) {
    return null
  }

  let itemIds = Object.keys(itemList)
  let count = 0

  itemIds.map(id => {
    count += itemList[id] * countItems(items, parseInt(id, 10))
  })

  return round(count, 2)
}

function countLegendaryInsights (items) {
  if (!items.length) {
    return null
  }

  let {refinedIds, perfectedIds, envoyInsignia, giftOfProwess, legendaryInsight} = legendaryInsightItemIds

  const refinedCount = refinedIds.reduce((sum, id) => sum + countItems(items, id), 0)
  const perfectedCount = perfectedIds.reduce((sum, id) => sum + countItems(items, id), 0)

  let li = 0
  li += Math.max(Math.min(perfectedCount, 6) + refinedCount - 6, 0) * 25
  li += Math.min(perfectedCount, 6) * 25 + Math.max(perfectedCount - 6, 0) * 50
  li += countItems(items, [envoyInsignia, giftOfProwess]) * 25
  li += countItems(items, legendaryInsight)
  return li
}
