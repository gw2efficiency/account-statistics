import unique from 'array-unique'
import round from 'round-to'
import { bankItems } from 'gw2e-account-value/build/bank'
import { materialsItems } from 'gw2e-account-value/build/materials'
import { charactersItems } from 'gw2e-account-value/build/characters'
import { sharedInventoryItems } from 'gw2e-account-value/build/shared'
import legendaries from 'gw2e-static-data/build/legendaries'
import permanentToolIds from '../static/permanentToolIds'
import championBagIds from '../static/championBagIds'
import tonicIds from '../static/tonicIds'
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
    instruments: countItems(items, [43526, 42973, 44883, 66323, 42888, 36174, 68361]),
    permanentTools: countItems(items, permanentToolIds),
    chakEggs: countItems(items, 72205),
    reclaimedMetalPlates: countItems(items, 74356),
    fossilizedInsects: countItems(items, [
      66766, 66655, 66653, 66640, 66636, 66652,
      66649, 66654, 66646, 66644, 66647, 66648,
      66657, 66645, 66656, 66651, 66642
    ]),
    championBags: countItems(items, championBagIds),
    tripleTroubleChests: countItems(items, 49664),
    tequatlChests: countItems(items, 47836),
    uniqueTonics: countItems(items, tonicIds, true),
    bloodRubies: countItems(items, 79280),
    petrifiedWood: countItems(items, 79469),
    tomesOfKnowledge: countItems(items, [43741, 43766]),
    permanentContracts: countItems(items, [
      35984, 38507, 35985, 35986, 49501,
      35978, 35977, 35976, 38506, 78217, 78455
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
    luck: weightedCountItems(items, luckItemIds),

    // Aura items
    chakEggSacks: countItems(items, [72021, 81825, 81616, 81807, 82044]),
    preservedQueenBees: countItems(items, [
      68440, 77594, 81663, 81638, 81679, 81701, 81818, 81897
    ]),
    ghostlyInfusions: countItems(items, [
      77366, 77274, 77303, 77310, 77316, 77394
    ]),
    baubleInfusions: countItems(items, [
      78012, 78052, 78054, 78079, 78086, 78090,
      78016, 78028, 78030, 78031, 78057, 78097
    ]),
    luminescentRefractors: countItems(items, [
      67375, 81810, 81877, 82013, 81624, 81709, 82039,
      67370, 81678, 82055, 81612, 81727, 81948, 81988,
      67372, 81809, 81847, 81864, 81930, 81881, 81911,
      79647, 81653, 81777, 81641, 81655, 81858, 81959
    ]),
    wintersHeartInfusions: countItems(items, [
      79959, 79957, 79978, 79994, 79943, 80063
    ]),
    kodasWarmthEnrichment: countItems(items, 79926),
    phospholuminescentInfusions: countItems(items, [
      79665, 79674, 79639, 79653, 79661, 79669
    ]),
    liquidAurillium: countItems(items, [
      76063,
      81715, 82006, 81875, 81889, 81918, 81975
    ]),
    celestialInfusion: countItems(items, [
      81761, 81779, 81811, 81919, 81991, 81878,
      81783, 81814, 81927
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
  let count = 0

  refinedIds.map(id => {
    let itemCount = countItems(items, id)
    count += (itemCount ? (itemCount - 1) * 25 : 0)
  })

  perfectedIds.map(id => {
    let itemCount = countItems(items, id)
    count += (itemCount ? (itemCount * 50) - 25 : 0)
  })

  count += countItems(items, [envoyInsignia, giftOfProwess]) * 25
  count += countItems(items, legendaryInsight)

  return count
}
