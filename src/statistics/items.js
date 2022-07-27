import unique from 'array-unique'
import round from 'round-to'
import { bankItems } from 'gw2e-account-value/build/bank'
import { materialsItems } from 'gw2e-account-value/build/materials'
import { charactersItems } from 'gw2e-account-value/build/characters'
import { sharedInventoryItems } from 'gw2e-account-value/build/shared'
import { legendaryarmoryItems } from 'gw2e-account-value/build/legendaryarmory'
import legendaries from 'gw2e-static-data/build/legendaries'
import tonics from 'gw2e-static-data/build/legacy/tonics'
import permanentToolIds from '../static/permanentToolIds'
import championBagIds from '../static/championBagIds'
import gemstoreToyIds from '../static/gemstoreToyIds'
import luckItemIds from '../static/luckIds'
import legendaryInsightItemIds from '../static/legendaryInsightItemIds'
import cosmeticAuraItemMap from '../gameData/cosmeticAuras'
import abyssalFractalWeapons from '../static/abyssalFractalWeapons'

export default function (accountData) {
  const items = allItems(accountData)

  const auraItems = Object.entries(cosmeticAuraItemMap).map(entry => {
    return [entry[0], countItems(items, entry[1])]
  }).reduce((object, [key, value]) => {
    object[key] = value
    return object
  }, {})

  return {
    // (2) CURRENCIES
    blackLionClaimTickets: weightedCountItems(items, {43992: 1, 43998: 0.1}),
    blackLionMiniatureClaimTickets: countItems(items, 78474),

    // (3) MAP CURRENCIES
    bloodRubies: countItems(items, 79280),
    petrifiedWood: countItems(items, 79469),
    freshWinterberries: countItems(items, 79899),
    jadeShards: countItems(items, 80332),
    fireOrchidBlossoms: countItems(items, 81127),
    orrianPearls: countItems(items, 81706),
    kralkatiteOre: countItems(items, 86069),
    difluoriteCrystals: countItems(items, 86977),
    inscribedShards: countItems(items, 87645),
    lumpsOfMistonium: countItems(items, 88955),
    brandedMass: countItems(items, 89537),
    mistbornMote: countItems(items, 90783),
    hatchedChili: countItems(items, 92072),
    eternalIceShard: countItems(items, 92272),
    eitriteIngots: countItems(items, 92317),

    // (4) DUNGEONS
    chestOfDungeoneering: countItems(items, 78252),

    // (5) FRACTALS
    fractalTonics: countItems(items, 49277),

    // (6) RAIDS
    _legendaryInsightsFromItems: countLegendaryInsights(items),
    _legendaryDivinationsFromItems: weightedCountItems(items, {
      88485: 1, // Legendary Divinations
      91225: 150, // Gift of Compassion
      91234: 150 // Coalescence
    }),

    // (7) PROGRESSION
    uniqueTonics: countItems(items, tonics.filter(x => x.permanent).map(x => x.ids), true),
    _luckFromItems: weightedCountItems(items, luckItemIds),

    // (8) AURA ITEMS
    ...auraItems,
    celestialInfusion: countItems(items,
      [].concat(cosmeticAuraItemMap.celestialInfusionBlue, cosmeticAuraItemMap.celestialInfusionRed)
    ),

    // (9) COLLECTABLES
    legendaryItems: countItems(items, legendaries.map(x => x.id)),
    legendaryItemsWeapon: countItems(items, legendaries.filter(x => x.type === 'weapon').map(x => x.id)),
    legendaryItemsArmor: countItems(items, legendaries.filter(x => x.type === 'armor').map(x => x.id)),
    legendaryItemsBack: countItems(items, legendaries.filter(x => x.type === 'back').map(x => x.id)),
    legendaryItemsTrinket: countItems(items, legendaries.filter(x => x.type === 'trinket').map(x => x.id)),
    brokenSpoons: countItems(items, 74996),
    shinyBaubles: countItems(items, 70093),
    championBags: countItems(items, championBagIds),
    tripleTroubleChests: countItems(items, 49664),
    tequatlChests: countItems(items, 47836),
    vbHerosChoice: countItems(items, [78171, 78743]),
    tdHerosChoice: countItems(items, [78332, 78751]),
    abHerosChoice: countItems(items, [78650, 78748]),
    dsHerosChoice: countItems(items, [78617, 78783]),
    crystalOasisHerosChoice: countItems(items, 90958),
    elonRiverlandsHerosChoice: countItems(items, 91039),
    theDesolationHerosChoice: countItems(items, [84360, 90994]),
    domainOfVabbiHerosChoice: countItems(items, 83035),
    giftsOfExploration: countItems(items, 19677),
    giftsOfBattle: countItems(items, 19678),
    tomesOfKnowledge: countItems(items, [43741, 43766]),
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
      66657, // Ambrite Fossilized Mantis
      66766 // Unidentified Fossilized Insect
    ]),
    whiteMantlePortalDevices: countItems(items, 78978),
    reclaimedMetalPlates: countItems(items, 74356),
    chakEggs: countItems(items, 72205),
    legendarySpikes: countItems(items, 81296),
    emblemOfTheAvenger: countItems(items, 93075),
    emblemOfTheConqueror: countItems(items, 93146),
    emblemOfTournamentVictory: countItems(items, 93012),
    emblemOfVictory: countItems(items, 93022),

    // (10) ASCENDED MATERIALS
    dragoniteOre: weightedCountItems(items, {46733: 1, 46732: 100}),
    bloodstoneDust: weightedCountItems(items, {46731: 1, 46730: 100}),
    empyrealFragments: weightedCountItems(items, {46735: 1, 46734: 100}),
    airshipOil: countItems(items, [69434, 76933]),
    auricDust: weightedCountItems(items, {69432: 1, 76933: 1, 73537: 30}),
    leyLineSparks: countItems(items, [69392, 76933, 74042]),
    crystallineOre: countItems(items, [46682, 46683]),

    // (12) WORLD VS WORLD
    potionOfWvwRewards: countItems(items, 78600),
    skirmishChests: countItems(items, [84966, 81324, 96536]),

    // (13) PLAYER VS PLAYER
    potionOfPvpRewards: countItems(items, 68110),

    // (15) MISCELLANEOUS
    musicBoxes: countItems(items, [
      67391, // Haunted Gramophone
      71747, // Zephyrites Music Box
      82286, // Hafez's Music Box
      82432, // Ghiwane's  Music Box
      83444, // Tinari's Music Box
      83826, // Khadiri's Music Box
      84566 // Nightingale's Music Box
    ]),
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
    silverwastesShovels: countItems(items, 67826),
    thirtyTwoSlotBags: countItems(items, [
      82277, // 32-Slot Courier's Locker
      82363, // 32-Slot Marshal's Saddlebag
      82418, // 32-Slot Orichalcum Locker
      83109, // 32-Slot Hamaseen Pannier
      83182, // 32-Slot Hardened Leather Pannier
      83186, // 32-Slot Cowrie League Saddlebag
      83205, // 32-Slot Marshal's Locker
      83209, // 32-Slot Courier's Pannier
      83286, // 32-Slot Nomad's Locker
      83435, // 32-Slot Courier's Saddlebag
      83995, // 32-Slot Gossamer Saddlebag
      84494, // 32-Slot Marshal's Pannier
      85365, // 32-Slot Cowrie League Saddlebag
      85366, // 32-Slot Marshal's Saddlebag
      85367, // 32-Slot Courier's Locker
      85368, // 32-Slot Gossamer Saddlebag
      85369, // 32-Slot Hamaseen Pannier
      85370, // 32-Slot Courier's Pannier
      85371, // 32-Slot Orichalcum Locker
      85372, // 32-Slot Marshal's Pannier
      85373, // 32-Slot Nomad's Locker
      85374, // 32-Slot Marshal's Locker
      85375, // 32-Slot Courier's Saddlebag
      85376, // 32-Slot Hardened Leather Pannier
      87225, // Reinforced Olmakhan Bandolier
      92292, // Reinforced Boreal Trunk
      95018 // 32-Slot Hero's Trusty Backpack
    ]),

    // (16) GEMSTORE
    instruments: countItems(items, [
      36174, // Musical Bass Guitar
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
    permanentTools: countItems(items, permanentToolIds),
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
      84440, // Collector's Edition Sandstorm
      86497, // Endless Upgrade Extractor Contract
      86549 // Endless Upgrade Extractor
    ]),
    gemstoreToys: countItems(items, gemstoreToyIds),

    // (17) POINTLESS STATISTICS
    brokenTwig: countItems(items, 76046),
    warmStone: countItems(items, 19546),
    crumblingBone: countItems(items, 19530),
    mangledTalon: countItems(items, 19576),
    clumpOfResin: countItems(items, 19537),

    // (XXX) Used for aggregate statistics
    _unstableFractalEssenceFromItems: unstableFractalEssenceFromItems(items)
  }
}

// Get all the items on the account
export function allItems (accountData) {
  const items = [
    charactersItems(accountData), // Check this first, for permissions!
    bankItems(accountData),
    materialsItems(accountData),
    sharedInventoryItems(accountData),
    legendaryarmoryItems(accountData)
  ]

  // The "characters" permission is probably missing, in which case
  // we want to abort to prevent issues with multiple API keys
  if (items[0].length === 0) {
    return []
  }

  return items.reduce((a, b) => a.concat(b), []).filter(x => x.ignoreForStatistics !== true)
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
  li += countItems(items, [
    97269, // Mai Trin's Magnificent Coffer
    96638, // Ankka's Magnificent Coffer
    96419, // Minister Li's Magnificent Coffer
    95986 // Void's Magnificent Coffer
  ])

  return li
}

// The items bought with unstable fractal essence
function unstableFractalEssenceFromItems (items) {
  function idListToWeightMap (ids, weight) {
    let map = {}
    ids.forEach(id => {
      map[id] = weight
    })
    return map
  }

  const map = {
    94036: 480, // Abyssal Fractal Weapon Box
    ...idListToWeightMap(abyssalFractalWeapons.map(x => x.id), 480), // Abyssal Fractal Weapons
    94017: 1680, // Abyssal Infusion Chest
    ...idListToWeightMap(cosmeticAuraItemMap.abyssalInfusion, 1680), // Abyssal Infusion
    81790: 450, // Celestial Infusion Chest
    ...idListToWeightMap(cosmeticAuraItemMap.celestialInfusionRed, 450), // Celestial Infusion (Red)
    81632: 450, // Endless Chaos Combat Tonic
    94021: 1680, // Endless Inner Demon Combat Tonic
    94055: 1680, // Endless Inner Demon Combat Tonic
    81743: 5 // Unstable Cosmic Essence
  }

  return weightedCountItems(items, map)
}
