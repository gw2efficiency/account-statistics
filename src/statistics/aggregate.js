export default function (accountStatistics) {
  return {
    totalAuras: totalAuras(accountStatistics)
  }
}

// Get the total number of auras
function totalAuras (accountStatistics) {
  let keys = [
    'chakEggSacks',
    'preservedQueenBees',
    'ghostlyInfusions',
    'baubleInfusions',
    'luminescentRefractors',
    'wintersPresence',
    'nightfury',
    'wintersHeartInfusions',
    'kodasWarmthEnrichment',
    'phospholuminescentInfusions'
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
