import round from 'round-to'
import cosmeticAuraItemMap from '../gameData/cosmeticAuras'

export default function (accountStatistics) {
  return {
    totalAuras: totalAuras(accountStatistics),
    deathCountPerHour: deathCountPerHour(accountStatistics),
    fractalRelics: fractalRelics(accountStatistics),
    pristineFractalRelics: pristineFractalRelics(accountStatistics),
    luck: luck(accountStatistics)
  }
}

// Get the death count per hour playtime
function deathCountPerHour (accountStatistics) {
  if (!accountStatistics.deathCount || !accountStatistics.playtime) {
    return null
  }

  const deathCount = accountStatistics.deathCount
  const playtimeInHours = accountStatistics.playtime / (60 * 60)

  return playtimeInHours > 1 ? round(deathCount / playtimeInHours, 2) : null
}

// Get the total number of auras
function totalAuras (accountStatistics) {
  let keys = [
    'nightfury',
    'wintersPresence',
    'legendaryItemsTrinket',
    ...Object.keys(cosmeticAuraItemMap)
  ]

  // All keys have to be set
  let statisticsKeys = Object.keys(accountStatistics)
  let missingKeys = keys.filter(x => statisticsKeys.indexOf(x) === -1)

  if (missingKeys.length > 0) {
    return null
  }

  // Sum up all aura items / skins
  let sum = 0
  keys.map(key => {
    sum += accountStatistics[key]
  })

  return sum
}

// Sum up fractal relics from different sources
function fractalRelics (accountStatistics) {
  if (
    accountStatistics._fractalRelicsFromWallet == null ||
    accountStatistics._fractalRelicsFromTitles == null
  ) {
    return null
  }

  return accountStatistics._fractalRelicsFromWallet +
    accountStatistics._fractalRelicsFromTitles
}

// Sum up pristine fractal relics from different sources
function pristineFractalRelics (accountStatistics) {
  if (
    accountStatistics._pristineFractalRelicsFromWallet == null ||
    accountStatistics._pristineFractalRelicsFromTitles == null
  ) {
    return null
  }

  return accountStatistics._pristineFractalRelicsFromWallet +
    accountStatistics._pristineFractalRelicsFromTitles
}

// Sum up luck from account and luck items
function luck (accountStatistics) {
  if (
    accountStatistics._luckFromAccount == null ||
    accountStatistics._luckFromItems == null
  ) {
    return null
  }

  return accountStatistics._luckFromAccount + accountStatistics._luckFromItems
}
