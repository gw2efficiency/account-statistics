/* eslint-env node, mocha */
import {expect} from 'chai'
import masteriesStatistics from '../src/statistics/masteries'

describe('statistics > masteries', () => {
  it('gracefully fails if the data is missing', () => {
    const empty = {
      masteryPoints: null,
      masteryPointsTyria: null,
      masteryPointsMaguuma: null
    }

    const calcData = {1: {region: 'Maguuma', point_costs: [1, 2, 3, 5, 8]}}

    expect(masteriesStatistics({}, {masteries: calcData})).to.deep.equal(empty)
    expect(masteriesStatistics({masteries: [{id: 1, level: 3}]})).to.deep.equal(empty)
  })

  it('can calculate the mastery points', () => {
    const calcData = {
      1: {region: 'Maguuma', point_costs: [1, 2, 3, 5, 8]},
      2: {region: 'Maguuma', point_costs: [1, 2, 3, 5, 8, 12]},
      5: {region: 'Tyria', point_costs: [1, 2, 3, 5]},
      6: {region: 'Tyria', point_costs: [1, 3, 6, 9]},
      7: {region: 'Tyria', point_costs: [1, 3, 6, 9]}
    }

    expect(masteriesStatistics({masteries: [
      {id: 1, level: 3},
      {id: 2, level: 6},
      {id: 5, level: 0},
      {id: 6, level: 2},
      {id: 99, level: 99}
    ]}, {masteries: calcData})).to.deep.equal({
      masteryPoints: ((1 + 2 + 3) + (1 + 2 + 3 + 5 + 8 + 12)) + (1 + 3),
      masteryPointsTyria: 1 + 3,
      masteryPointsMaguuma: (1 + 2 + 3) + (1 + 2 + 3 + 5 + 8 + 12)
    })

    expect(masteriesStatistics({masteries: [
      {id: 1, level: 0},
      {id: 2, level: 1}
    ]}, {masteries: calcData})).to.deep.equal({
      masteryPoints: 1,
      masteryPointsTyria: 0,
      masteryPointsMaguuma: 1
    })

    expect(masteriesStatistics({masteries: []}, {masteries: calcData})).to.deep.equal({
      masteryPoints: 0,
      masteryPointsTyria: 0,
      masteryPointsMaguuma: 0
    })
  })
})
