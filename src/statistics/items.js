import uniq from 'uniq'
import {bankItems} from 'gw2e-account-value/build/bank'
import {materialsItems} from 'gw2e-account-value/build/materials'
import {charactersItems} from 'gw2e-account-value/build/characters'
import {sharedInventoryItems} from 'gw2e-account-value/build/shared'
import legendaryItemIds from '../static/legendaryItemIds'
import permanentToolIds from '../static/permanentToolIds'
import championBagIds from '../static/championBagIds'
import tonicIds from '../static/tonicIds'

export default function (accountData) {
  const items = allItems(accountData)

  return {
    legendaryItems: countItems(items, legendaryItemIds),
    fractalTonics: countItems(items, 49277),
    legendaryInsights: countItems(items, 77302),
    whiteMantlePortalDevices: countItems(items, 78978),
    chakEggSacks: countItems(items, 72021),
    preservedQueenBees: countItems(items, 68440),
    ghostlyInfusions: countItems(items, [
      77366, 77274, 77303, 77310, 77316, 77394
    ]),
    baubleInfusions: countItems(items, [
      78012, 78052, 78054, 78079, 78086, 78090, 78016, 78028,
      78030, 78031, 78057, 78097
    ]),
    luminescentRefractors: countItems(items, [67375, 67370, 67372]),
    brokenSpoons: countItems(items, 74996),
    blackLionClaimTickets: blackLionClaimTickets(items),
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
    permanentContracts: countItems(items, [35984, 38507, 35985, 35986, 49501])
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
function countItems (items, ids, unique = false) {
  if (items.length === 0) {
    return null
  }

  // Make sure we always use an array with all ids
  ids = [].concat(ids)
  const idNumbers = ids.reduce((a, b) => a.concat(b), [])

  // Find the items matching our search ids
  items = items.filter(x => idNumbers.indexOf(x.id) !== -1)

  // Add up the amount of items the user has
  if (!unique) {
    return items.map(x => x.count).reduce((a, b) => a + b, 0)
  }

  // See how many unique items the user has
  items = items.map(x => x.id)
  uniq(items)

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

// See how many black lion tickets the user has
function blackLionClaimTickets (items) {
  if (items.length === 0) {
    return null
  }

  let tickets = countItems(items, 43992)
  let scraps = countItems(items, 43998)
  return tickets + scraps * 0.1
}
