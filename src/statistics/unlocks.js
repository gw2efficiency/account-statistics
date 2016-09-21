import legendarySkinIds from '../static/legendarySkinIds'

export default function (accountData) {
  return {
    dyeCount: dyeCount(accountData),
    skinCount: skinCount(accountData),
    miniCount: miniCount(accountData),
    finisherCount: finisherCount(accountData),
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

// The legendary skins unlocked on the account
function legendarySkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => legendarySkinIds.indexOf(x) !== -1)
    .length
}
