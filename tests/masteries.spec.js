/* eslint-env node, mocha */
import { expect } from 'chai'
import masteriesStatistics from '../src/statistics/masteries'

describe('statistics > masteries', () => {
  it('gracefully fails if the data is missing', () => {
    const empty = {
      masteryPoints: null,
      masteryPointsTyria: null,
      masteryPointsMaguuma: null,
      masteryPointsDesert: null,
      masteryPointsCrystal: null,
      masteryPointsEndOfDragons: null,
      masteryPointsSecretsOfTheObscure: null,
      masteryPointsJanthirWilds: null
    }

    expect(masteriesStatistics({mastery: {points: null}})).to.deep.equal(empty)
  })

  it('can calculate the mastery points', () => {
    const accountData = {
      totals: [
        {region: 'Central Tyria', spent: 49, earned: 58},
        {region: 'Heart of Thorns', spent: 85, earned: 106},
        {region: 'Path of Fire', spent: 12, earned: 32},
        {region: 'Icebrood Saga', spent: 3, earned: 12},
        {region: 'End of Dragons', spent: 7, earned: 9},
        {region: 'Secrets of the Obscure', spent: 4, earned: 5},
        {region: 'Janthir Wilds', spent: 15, earned: 22},
        {region: 'Visions of Eternity', spent: 8, earned: 12}
      ]
    }

    expect(masteriesStatistics({mastery: {points: accountData}})).to.deep.equal({
      masteryPoints: 58 + 106 + 32 + 12 + 9 + 5 + 22 + 12,
      masteryPointsTyria: 58,
      masteryPointsMaguuma: 106,
      masteryPointsDesert: 32,
      masteryPointsCrystal: 12,
      masteryPointsEndOfDragons: 9,
      masteryPointsSecretsOfTheObscure: 5,
      masteryPointsJanthirWilds: 22,
      masteryPointsVisionsOfEternity: 12
    })
  })

  it('can calculate the mastery points with missing points', () => {
    const accountData = {
      totals: [
        {region: 'Heart of Thorns', spent: 0, earned: 1}
      ]
    }

    const levelZeroMastery = masteriesStatistics({mastery: {points: accountData}})
    expect(levelZeroMastery).to.deep.equal({
      masteryPoints: 1,
      masteryPointsTyria: 0,
      masteryPointsMaguuma: 1,
      masteryPointsDesert: 0,
      masteryPointsCrystal: 0,
      masteryPointsEndOfDragons: 0,
      masteryPointsSecretsOfTheObscure: 0,
      masteryPointsJanthirWilds: 0,
      masteryPointsVisionsOfEternity: 0
    })
  })

  it('can calculate the mastery points without any points', () => {
    expect(masteriesStatistics({mastery: {points: {totals: []}}})).to.deep.equal({
      masteryPoints: 0,
      masteryPointsTyria: 0,
      masteryPointsMaguuma: 0,
      masteryPointsDesert: 0,
      masteryPointsCrystal: 0,
      masteryPointsEndOfDragons: 0,
      masteryPointsSecretsOfTheObscure: 0,
      masteryPointsJanthirWilds: 0,
      masteryPointsVisionsOfEternity: 0
    })
  })
})
