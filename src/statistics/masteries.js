import _sum from 'sum-by'

export default function (accountData) {
  if (!accountData.mastery || !accountData.mastery.points) {
    return {
      masteryPoints: null,
      masteryPointsTyria: null,
      masteryPointsMaguuma: null,
      masteryPointsDesert: null,
      masteryPointsCrystal: null,
      masteryPointsEndOfDragons: null,
      masteryPointsSecretsOfTheObscure: null,
      masteryPointsJanthirWilds: null,
      masteryPointsVisionsOfEternity: null
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
    masteryPointsTyria: earnedMasteryPoints['Central Tyria'] || 0,
    masteryPointsMaguuma: earnedMasteryPoints['Heart of Thorns'] || 0,
    masteryPointsDesert: earnedMasteryPoints['Path of Fire'] || 0,
    masteryPointsCrystal: earnedMasteryPoints['Icebrood Saga'] || 0,
    masteryPointsEndOfDragons: earnedMasteryPoints['End of Dragons'] || 0,
    masteryPointsSecretsOfTheObscure: earnedMasteryPoints['Secrets of the Obscure'] || 0,
    masteryPointsJanthirWilds: earnedMasteryPoints['Janthir Wilds'] || 0,
    masteryPointsVisionsOfEternity: earnedMasteryPoints['Visions of Eternity'] || 0
  }
}
