/* eslint-env node, mocha */
import { expect } from 'chai'
import masteriesStatistics from '../src/statistics/masteries'

describe('statistics > masteries', () => {
  it('gracefully fails if the data is missing', () => {
    const empty = {
      masteryPoints: null,
      masteryPointsCentralTyria: null,
      masteryPointsHeartOfThorns: null,
      masteryPointsPathOfFire: null,
      masteryPointsIcebroodSaga: null,
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
        {region: 'Janthir Wilds', spent: 15, earned: 22}
      ]
    }

    expect(masteriesStatistics({mastery: {points: accountData}})).to.deep.equal({
      masteryPoints: 58 + 106 + 32 + 12 + 9 + 5 + 22,
      masteryPointsCentralTyria: 58,
      masteryPointsHeartOfThorns: 106,
      masteryPointsPathOfFire: 32,
      masteryPointsIcebroodSaga: 12,
      masteryPointsEndOfDragons: 9,
      masteryPointsSecretsOfTheObscure: 5,
      masteryPointsJanthirWilds: 22
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
      masteryPointsCentralTyria: 0,
      masteryPointsHeartOfThorns: 1,
      masteryPointsPathOfFire: 0,
      masteryPointsIcebroodSaga: 0,
      masteryPointsEndOfDragons: 0,
      masteryPointsSecretsOfTheObscure: 0,
      masteryPointsJanthirWilds: 0
    })
  })

  it('can calculate the mastery points without any points', () => {
    expect(masteriesStatistics({mastery: {points: {totals: []}}})).to.deep.equal({
      masteryPoints: 0,
      masteryPointsCentralTyria: 0,
      masteryPointsHeartOfThorns: 0,
      masteryPointsPathOfFire: 0,
      masteryPointsIcebroodSaga: 0,
      masteryPointsEndOfDragons: 0,
      masteryPointsSecretsOfTheObscure: 0,
      masteryPointsJanthirWilds: 0
    })
  })
})
