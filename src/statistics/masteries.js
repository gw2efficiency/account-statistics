import _sum from 'sum-by'

export default function (accountData, calcData) {
  if (!accountData.masteries || !calcData) {
    return {
      masteryPoints: null,
      masteryPointsTyria: null,
      masteryPointsMaguuma: null
    }
  }

  let spentMasteryPoints = {}

  accountData.masteries.map(mastery => {
    const masteryProgress = mastery.level
    const masteryData = calcData.masteries[mastery.id]

    // Skip masteries we don't have data for
    if (!masteryData) {
      return
    }

    // Calculate how many mastery points the account spent
    const spentPoints = _sum(masteryData.point_costs.slice(0, masteryProgress + 1))
    spentMasteryPoints[masteryData.region] = (spentMasteryPoints[masteryData.region] || 0) + spentPoints
  })

  return {
    masteryPoints: _sum(Object.values(spentMasteryPoints)),
    masteryPointsTyria: spentMasteryPoints['Tyria'] || 0,
    masteryPointsMaguuma: spentMasteryPoints['Maguuma'] || 0
  }
}
