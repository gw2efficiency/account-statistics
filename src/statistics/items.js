import {bankItems} from 'gw2e-account-value/build/bank'
import {materialsItems} from 'gw2e-account-value/build/materials'
import {charactersItems} from 'gw2e-account-value/build/characters'
import {sharedInventoryItems} from 'gw2e-account-value/build/shared'
import legendaryItemIds from '../static/legendaryItemIds'

export default function (accountData) {
  const items = allItems(accountData)

  if (items.length === 0) {
    return {
      legendaryItems: null,
      fractalTonics: null,
      legendaryInsights: null,
      whiteMantlePortalDevices: null
    }
  }

  return {
    legendaryItems: legendaryItems(items),
    fractalTonics: countItem(items, 49277),
    legendaryInsights: countItem(items, 77302),
    whiteMantlePortalDevices: countItem(items, 78978)
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

// Count how many legendary items the user has
function legendaryItems (items) {
  return items
    .filter(x => legendaryItemIds.indexOf(x.id) !== -1)
    .map(x => x.count)
    .reduce((a, b) => a + b, 0)
}

// Count how many of an item the user has
function countItem (items, id) {
  return items
    .filter(x => x.id === id)
    .map(x => x.count)
    .reduce((a, b) => a + b, 0)
}
