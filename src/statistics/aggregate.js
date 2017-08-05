import round from 'round-to'

export default function (accountStatistics) {
  return {
    totalAuras: totalAuras(accountStatistics),
    deathCountPerHour: deathCountPerHour(accountStatistics)
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
    'wintersPresence',
    'nightfury',

    'chakEggSacks',
    'preservedQueenBees',
    'ghostlyInfusions',
    'baubleInfusions',
    'luminescentRefractors',
    'wintersHeartInfusions',
    'kodasWarmthEnrichment',
    'phospholuminescentInfusions',
    'legendaryItemsTrinket',
    'liquidAurillium',
    'celestialInfusion'
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
