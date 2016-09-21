import legendarySkinIds from '../static/legendarySkinIds'

export default function (accountData) {
  return {
    dyeCount: dyeCount(accountData),
    skinCount: skinCount(accountData),
    miniCount: miniCount(accountData),
    finisherCount: finisherCount(accountData),
    outfitCount: outfitCount(accountData),
    titleCount: titleCount(accountData),
    legendarySkins: legendarySkins(accountData)
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

  return accountData.finishers.length
}

// The unlocked outfits on the account
function outfitCount (accountData) {
  if (!accountData.outfits) {
    return null
  }

  return accountData.outfits.length
}

// The unlocked outfits on the account
function titleCount (accountData) {
  if (!accountData.titles) {
    return null
  }

  return accountData.titles.length
}

// The legendary skins unlocked on the account
function legendarySkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => legendarySkinIds.indexOf(x) !== -1)
    .length
}
