import {bankItems} from 'gw2e-account-value/build/bank'
import {materialsItems} from 'gw2e-account-value/build/materials'
import {charactersItems} from 'gw2e-account-value/build/characters'
import {sharedInventoryItems} from 'gw2e-account-value/build/shared'
import legendaryItemIds from '../static/legendaryItemIds'

export default function (accountData) {
  const items = allItems(accountData)

  return {
    legendaryItems: countItems(items, legendaryItemIds),
    fractalTonics: countItems(items, 49277),
    legendaryInsights: countItems(items, 77302),
    whiteMantlePortalDevices: countItems(items, 78978)
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
