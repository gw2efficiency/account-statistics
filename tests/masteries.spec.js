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
      masteryPointsCrystal: null
    }

    expect(masteriesStatistics({mastery: {points: null}})).to.deep.equal(empty)
  })

  it('can calculate the mastery points', () => {
    const accountData = {
      totals: [
        {region: 'Tyria', spent: 49, earned: 58},
        {region: 'Maguuma', spent: 85, earned: 106},
        {region: 'Desert', spent: 12, earned: 32},
        {region: 'Tundra', spent: 3, earned: 12}
      ]
    }

    expect(masteriesStatistics({mastery: {points: accountData}})).to.deep.equal({
      masteryPoints: 58 + 106 + 32 + 12,
      masteryPointsTyria: 58,
      masteryPointsMaguuma: 106,
      masteryPointsDesert: 32,
      masteryPointsCrystal: 12
    })
  })

  it('can calculate the mastery points with missing points', () => {
    const accountData = {
      totals: [
        {region: 'Maguuma', spent: 0, earned: 1}
      ]
    }

    const levelZeroMastery = masteriesStatistics({mastery: {points: accountData}})
    expect(levelZeroMastery).to.deep.equal({
      masteryPoints: 1,
      masteryPointsTyria: 0,
      masteryPointsMaguuma: 1,
      masteryPointsDesert: 0,
      masteryPointsCrystal: 0
    })
  })

  it('can calculate the mastery points without any points', () => {
    expect(masteriesStatistics({mastery: {points: {totals: []}}})).to.deep.equal({
      masteryPoints: 0,
      masteryPointsTyria: 0,
      masteryPointsMaguuma: 0,
      masteryPointsDesert: 0,
      masteryPointsCrystal: 0
    })
  })
})
