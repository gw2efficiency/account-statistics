/* eslint-env node, mocha */
const expect = require('chai').expect
import pvpStatistics from '../src/statistics/pvp'
const defaultValues = {
  pvpGameCount: null,
  pvpWinCount: null,
  pvpRank: null,
  pvpWinRate: null
}

describe('statistics > pvp', () => {
  it('can calculate pvp statistics', () => {
    expect(pvpStatistics({})).to.deep.equal(defaultValues)

    const input = {
      pvp_rank: 80,
      pvp_rank_points: 793506,
      pvp_rank_rollovers: 65,
      aggregate: {
        wins: 711,
        losses: 643,
        desertions: 0,
        byes: 3,
        forfeits: 3
      }
    }

    const output = {
      pvpGameCount: 1360,
      pvpRank: 145,
      pvpWinCount: 714,
      pvpWinRate: 52.5
    }

    expect(pvpStatistics({pvp: input})).to.deep.equal(output)
  })

  it('can calculate pvp statistics if no games are played', () => {
    expect(pvpStatistics({})).to.deep.equal(defaultValues)

    const input = {
      pvp_rank: 80,
      pvp_rank_points: 793506,
      pvp_rank_rollovers: 65,
      aggregate: {
        wins: 0,
        losses: 0,
        desertions: 0,
        byes: 0,
        forfeits: 0
      }
    }

    const output = {
      pvpGameCount: 0,
      pvpRank: 145,
      pvpWinCount: 0,
      pvpWinRate: null
    }

    expect(pvpStatistics({pvp: input})).to.deep.equal(output)
  })
})
