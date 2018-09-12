/* eslint-env node, mocha */
import { expect } from 'chai'
import pvpStatistics from '../src/statistics/pvp'

const defaultValues = {
  pvpRank: null,
  pvpLeagueRating: null,
  pvpGameCount: null,
  pvpGameCountRanked: null,
  pvpWinCount: null,
  pvpWinCountRanked: null,

  pvpWinRate50: null,
  pvpWinRate250: null,
  pvpWinRate500: null,
  pvpWinRate1000: null,

  pvpWinRateRanked: null,
  pvpWinRateRanked250: null,
  pvpWinRateRanked500: null,
  pvpWinRateRanked1000: null
}

describe('statistics > pvp', () => {
  it('can calculate pvp statistics', () => {
    expect(pvpStatistics({})).to.deep.equal(defaultValues)
    expect(pvpStatistics({pvp: null})).to.deep.equal(defaultValues)
    expect(pvpStatistics({pvp: {stats: null}})).to.deep.equal(defaultValues)
    expect(pvpStatistics({pvp: {standings: null}})).to.deep.equal(defaultValues)
    expect(pvpStatistics({pvp: {stats: {foo: 'bar'}}})).to.deep.equal(defaultValues)

    const stats = {
      pvp_rank: 80,
      pvp_rank_points: 793506,
      pvp_rank_rollovers: 65,
      aggregate: {
        wins: 711,
        losses: 643,
        desertions: 0,
        byes: 3,
        forfeits: 3
      },
      ladders: {
        none: {
          wins: 0,
          losses: 0,
          desertions: 0,
          byes: 0,
          forfeits: 0
        },
        ranked: {
          wins: 345,
          losses: 329,
          desertions: 0,
          byes: 2,
          forfeits: 2
        },
        soloarenarated: {
          wins: 0,
          losses: 0,
          desertions: 0,
          byes: 0,
          forfeits: 0
        },
        teamarenarated: {
          wins: 292,
          losses: 268,
          desertions: 0,
          byes: 0,
          forfeits: 0
        },
        unranked: {
          wins: 17,
          losses: 21,
          desertions: 0,
          byes: 1,
          forfeits: 0
        }
      }
    }

    const standings = [
      {season_id: 'SOME-SEASON-ID', current: {rating: 1234}}
    ]

    const output = {
      pvpRank: 145,
      pvpLeagueRating: 1234,
      pvpGameCount: 1360,
      pvpGameCountRanked: 1238,
      pvpWinCount: 714,
      pvpWinCountRanked: 639,

      pvpWinRate50: 52.5,
      pvpWinRate250: 52.5,
      pvpWinRate500: 52.5,
      pvpWinRate1000: 52.5,

      pvpWinRateRanked: 51.62,
      pvpWinRateRanked250: 51.62,
      pvpWinRateRanked500: 51.62,
      pvpWinRateRanked1000: 51.62
    }

    expect(pvpStatistics({pvp: {stats, standings}}, {pvp: {currentSeason: 'SOME-SEASON-ID'}})).to.deep.equal(output)
  })

  it('can calculate pvp statistics if no games are played', () => {
    const stats = {
      pvp_rank: 80,
      pvp_rank_points: 793506,
      pvp_rank_rollovers: 65,
      aggregate: {
        wins: 0,
        losses: 0,
        desertions: 0,
        byes: 0,
        forfeits: 0
      },
      ladders: {}
    }

    const standings = [
      {season_id: 'SOME-SEASON-ID', current: {rating: 0}}
    ]

    const output = {
      pvpRank: 145,
      pvpLeagueRating: null,
      pvpGameCount: 0,
      pvpGameCountRanked: 0,
      pvpWinCount: 0,
      pvpWinCountRanked: 0,

      pvpWinRate50: null,
      pvpWinRate250: null,
      pvpWinRate500: null,
      pvpWinRate1000: null,

      pvpWinRateRanked: null,
      pvpWinRateRanked250: null,
      pvpWinRateRanked500: null,
      pvpWinRateRanked1000: null
    }

    expect(pvpStatistics({pvp: {stats, standings}}, {pvp: {currentSeason: 'SOME-SEASON-ID'}})).to.deep.equal(output)
  })
})
