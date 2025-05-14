import _sum from 'sum-by'

export default function (accountData) {
  if (!accountData.mastery || !accountData.mastery.points) {
    return {
      masteryPoints: null,
      masteryPointsCentralTyria: null,
      masteryPointsHeartOfThorns: null,
      masteryPointsPathOfFire: null,
      masteryPointsIcebroodSaga: null,
      masteryPointsEndOfDragons: null,
      masteryPointsSecretsOfTheObscure: null,
      masteryPointsJanthirWilds: null
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
    masteryPointsCentralTyria: earnedMasteryPoints['Central Tyria'] || 0,
    masteryPointsHeartOfThorns: earnedMasteryPoints['Heart of Thorns'] || 0,
    masteryPointsPathOfFire: earnedMasteryPoints['Path of Fire'] || 0,
    masteryPointsIcebroodSaga: earnedMasteryPoints['Icebrood Saga'] || 0,
    masteryPointsEndOfDragons: earnedMasteryPoints['End of Dragons'] || 0,
    masteryPointsSecretsOfTheObscure: earnedMasteryPoints['Secrets of the Obscure'] || 0,
    masteryPointsJanthirWilds: earnedMasteryPoints['Janthir Wilds'] || 0
  }
}
