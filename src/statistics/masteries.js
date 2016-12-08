import _sum from 'lodash.sum'

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

    // Skip masteries the account has no progress in or we don't have data for
    if (masteryProgress === 0 || !masteryData) {
      return
    }

    // Calculate how many mastery points the account spent
    const spentPoints = _sum(masteryData.point_costs.slice(0, masteryProgress))
    spentMasteryPoints[masteryData.region] = (spentMasteryPoints[masteryData.region] || 0) + spentPoints
  })

  return {
    masteryPoints: _sum(Object.values(spentMasteryPoints)),
    masteryPointsTyria: spentMasteryPoints['Tyria'] || 0,
    masteryPointsMaguuma: spentMasteryPoints['Maguuma'] || 0
  }
}
