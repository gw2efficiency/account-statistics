import {bankItems} from 'gw2e-account-value/build/bank'
import {materialsItems} from 'gw2e-account-value/build/materials'
import {charactersItems} from 'gw2e-account-value/build/characters'
import legendaryItemIds from '../static/legendaryItemIds'

export default function (accountData) {
  const items = allItems(accountData)

  return {
    legendaryItems: legendaryItems(items),
    fractalTonics: fractalTonics(items)
  }
}

// Get all the items on the account
export function allItems (accountData) {
  const items = [
    bankItems(accountData),
    materialsItems(accountData),
    charactersItems(accountData)
  ]

  return items.reduce((a, b) => a.concat(b), [])
}

// Count how many legendary items the user has
function legendaryItems (items) {
  if (items.length === 0) {
    return null
  }

  return items
    .filter(x => legendaryItemIds.indexOf(x.id) !== -1)
    .length
}

// Count how many fractal tonics the user has
function fractalTonics (items) {
  if (items.length === 0) {
    return null
  }

  return items
    .filter(x => x.id === 49277)
    .length
}
