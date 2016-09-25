import {bankItems} from 'gw2e-account-value/build/bank'
import {materialsItems} from 'gw2e-account-value/build/materials'
import {charactersItems} from 'gw2e-account-value/build/characters'
import {sharedInventoryItems} from 'gw2e-account-value/build/shared'
import legendaryItemIds from '../static/legendaryItemIds'
import permanentToolIds from '../static/permanentToolIds'
import championBags from '../static/championBags'

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
    instruments: countItems(items, [
      43526, 42973, 44883, 66323, 42888, 36174, 38129, 68361
    ]),
    permanentTools: countItems(items, permanentToolIds),
    chakEggs: countItems(items, 72205),
    reclaimedMetalPlates: countItems(items, 74356),
    fossilizedInsects: countItems(items, [
      66766, 66655, 66653, 66640, 66636, 66652,
      66649, 66654, 66646, 66644, 66647, 66648,
      66657, 66645, 66656, 66651, 66642
    ]),
    championBags: countItems(items, championBags),
    tripleTroubleChests: countItems(items, 49664),
    tequatlChests: countItems(items, 47836)
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
function countItems (items, ids) {
  if (items.length === 0) {
    return null
  }

  // Make sure we always use an array
  ids = [].concat(ids)

  // Go through the items and count occurrences!
  return items
    .filter(x => ids.indexOf(x.id) !== -1)
    .map(x => x.count)
    .reduce((a, b) => a + b, 0)
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
