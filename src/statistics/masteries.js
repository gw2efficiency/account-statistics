import _sum from 'sum-by'

export default function (accountData) {
  if (!accountData.mastery || !accountData.mastery.points) {
    return {
      masteryPoints: null,
      masteryPointsTyria: null,
      masteryPointsMaguuma: null,
      masteryPointsDesert: null,
      masteryPointsCrystal: null
    }
  }

  const totalPoints = accountData.mastery.points.totals

  // Map through all the totals and create a Region => Points hashmap
  let earnedMasteryPoints = {}
  totalPoints.map(total => {
    earnedMasteryPoints[total.region] = total.earned
  })

  return {
    masteryPoints: _sum(Object.values(earnedMasteryPoints)),
    masteryPointsTyria: earnedMasteryPoints['Tyria'] || 0,
    masteryPointsMaguuma: earnedMasteryPoints['Maguuma'] || 0,
    masteryPointsDesert: earnedMasteryPoints['Desert'] || 0,
    masteryPointsCrystal: earnedMasteryPoints['Tundra'] || 0
  }
}
