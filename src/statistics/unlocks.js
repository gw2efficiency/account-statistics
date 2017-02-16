import legendaries from 'gw2e-static-data/build/legendaries'
import fractalSkinIds from '../static/fractalSkinIds'

export default function (accountData) {
  return {
    dyeCount: dyeCount(accountData),
    skinCount: skinCount(accountData),
    miniCount: miniCount(accountData),
    finisherCount: finisherCount(accountData),
    outfitCount: outfitCount(accountData),
    titleCount: titleCount(accountData),
    recipeCount: recipeCount(accountData),
    legendarySkins: legendarySkins(accountData),
    fractalSkins: fractalSkins(accountData),
    wintersPresence: skinExists(accountData, 6577),
    nightfury: skinExists(accountData, 6161)
  }
}

// The unlocked dyes on the account
function dyeCount (accountData) {
  if (!accountData.dyes) {
    return null
  }

  return accountData.dyes.length
}

// The unlocked skins on the account
function skinCount (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins.length
}

// The unlocked minis on the account
function miniCount (accountData) {
  if (!accountData.minis) {
    return null
  }

  return accountData.minis.length
}

// The unlocked finishers on the account
function finisherCount (accountData) {
  if (!accountData.finishers) {
    return null
  }

  return accountData.finishers
    .filter(x => x.permanent)
    .length
}

// The unlocked outfits on the account
function outfitCount (accountData) {
  if (!accountData.outfits) {
    return null
  }

  return accountData.outfits.length
}

// The unlocked titles on the account
function titleCount (accountData) {
  if (!accountData.titles) {
    return null
  }

  return accountData.titles.length
}

// The unlocked recipes on the account
function recipeCount (accountData) {
  if (!accountData.recipes) {
    return null
  }

  return accountData.recipes.length
}

// The legendary skins unlocked on the account
function legendarySkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  const legendarySkinIds = legendaries.map(x => x.skin)

  return accountData.skins
    .filter(x => legendarySkinIds.indexOf(x) !== -1)
    .length
}

// The fractal skins unlocked on the account
function fractalSkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => fractalSkinIds.indexOf(x) !== -1)
    .length
}

// Check if a skin exists on the account
function skinExists (accountData, id) {
  if (!accountData.skins) {
    return null
  }

  let unlocked = accountData.skins
    .filter(x => x === id)
    .length

  return unlocked > 0 ? 1 : 0
}
