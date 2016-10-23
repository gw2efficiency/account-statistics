/* eslint-env node, mocha */
import {expect} from 'chai'
import progressionStatistics from '../src/statistics/progression'

describe('statistics > progression', () => {
  it('can calculate the done achievements', () => {
    expect(progressionStatistics({}).achievementCount).to.equal(null)
    expect(progressionStatistics({achievements: []}).achievementCount).to.equal(0)
    expect(progressionStatistics({
      achievements: [
        {id: 1, done: false},
        {id: 2, done: false},
        {id: 3, done: true},
        {id: 4, done: true},
        {id: 2, done: false, repeated: 473}
      ]
    }).achievementCount).to.equal(3)
  })

  it('can calculate fractal level', () => {
    expect(progressionStatistics({}).fractalLevel).to.equal(null)
    expect(progressionStatistics({account: {}}).fractalLevel).to.equal(null)
    expect(progressionStatistics({account: {fractal_level: 45}}).fractalLevel).to.equal(45)
  })

  it('can calculate the salvaged items', () => {
    expect(progressionStatistics({}).salvagedItems).to.equal(null)
    expect(progressionStatistics({achievements: []}).salvagedItems).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 129, current: 62, max: 200, done: false}]
    }).salvagedItems).to.equal(62)

    expect(progressionStatistics({
      achievements: [{id: 129, current: 62, max: 200, done: false, repeated: 792}]
    }).salvagedItems).to.equal(158462)
  })

  it('can calculate the completed keg brawl rounds', () => {
    expect(progressionStatistics({}).kegBrawlRounds).to.equal(null)
    expect(progressionStatistics({achievements: []}).kegBrawlRounds).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 753, current: 5, max: 30, done: false}]
    }).kegBrawlRounds).to.equal(5)

    expect(progressionStatistics({
      achievements: [{id: 753, current: 5, max: 30, done: false, repeated: 2}]
    }).kegBrawlRounds).to.equal(65)
  })

  it('can calculate the completed sanctum sprint rounds', () => {
    expect(progressionStatistics({}).sanctumSprintRounds).to.equal(null)
    expect(progressionStatistics({achievements: []}).sanctumSprintRounds).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 728, current: 5, max: 15, done: false}]
    }).sanctumSprintRounds).to.equal(5)

    expect(progressionStatistics({
      achievements: [{id: 728, current: 5, max: 15, done: false, repeated: 2}]
    }).sanctumSprintRounds).to.equal(35)
  })

  it('can calculate the completed southsun survival rounds', () => {
    expect(progressionStatistics({}).southsunSurvivalRounds).to.equal(null)
    expect(progressionStatistics({achievements: []}).southsunSurvivalRounds).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 752, current: 5, max: 6, done: false}]
    }).southsunSurvivalRounds).to.equal(5)

    expect(progressionStatistics({
      achievements: [{id: 752, current: 5, max: 6, done: false, repeated: 2}]
    }).southsunSurvivalRounds).to.equal(17)
  })

  it('can calculate the completed crab toss rounds', () => {
    expect(progressionStatistics({}).crabTossRounds).to.equal(null)
    expect(progressionStatistics({achievements: []}).crabTossRounds).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 757, current: 5, max: 12, done: false}]
    }).crabTossRounds).to.equal(5)

    expect(progressionStatistics({
      achievements: [{id: 757, current: 5, max: 12, done: false, repeated: 2}]
    }).crabTossRounds).to.equal(29)
  })

  it('can calculate the completed dungeons', () => {
    expect(progressionStatistics({}).completedDungeons).to.equal(null)
    expect(progressionStatistics({achievements: []}).completedDungeons).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 123, current: 3, max: 5, done: false}]
    }).completedDungeons).to.equal(3)

    expect(progressionStatistics({
      achievements: [{id: 123, current: 3, max: 5, done: false, repeated: 350}]
    }).completedDungeons).to.equal(1753)
  })

  it('can calculate the wvw player kills', () => {
    expect(progressionStatistics({}).wvwPlayerKills).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwPlayerKills).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 283, current: 486100, max: 250000, done: true}]
    }).wvwPlayerKills).to.equal(486100)
  })

  it('can calculate the wvw supply caravan kills', () => {
    expect(progressionStatistics({}).wvwSupplyCaravansKilled).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwSupplyCaravansKilled).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 288, current: 486100, max: 250000, done: true}]
    }).wvwSupplyCaravansKilled).to.equal(486100)
  })

  it('can calculate the wvw supply caravan escorts', () => {
    expect(progressionStatistics({}).wvwSupplyCaravansEscorted).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwSupplyCaravansEscorted).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 285, current: 486100, max: 250000, done: true}]
    }).wvwSupplyCaravansEscorted).to.equal(486100)
  })

  it('can calculate the wvw supply spent on repairs', () => {
    expect(progressionStatistics({}).wvwSupplySpentOnRepairs).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwSupplySpentOnRepairs).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 306, current: 486100, max: 250000, done: true}]
    }).wvwSupplySpentOnRepairs).to.equal(486100)
  })

  it('can calculate the wvw captured objectives', () => {
    expect(progressionStatistics({}).wvwCapturedObjectives).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwCapturedObjectives).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 303, current: 486100, max: 250000, done: true}]
    }).wvwCapturedObjectives).to.equal(486100)
  })

  it('can calculate the wvw defended objectives', () => {
    expect(progressionStatistics({}).wvwDefendedObjectives).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwDefendedObjectives).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 319, current: 486100, max: 250000, done: true}]
    }).wvwDefendedObjectives).to.equal(486100)
  })

  it('can calculate the wvw captured supply camps', () => {
    expect(progressionStatistics({}).wvwCapturedSupplyCamps).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwCapturedSupplyCamps).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 291, current: 486100, max: 250000, done: true}]
    }).wvwCapturedSupplyCamps).to.equal(486100)
  })

  it('can calculate the wvw defended supply camps', () => {
    expect(progressionStatistics({}).wvwDefendedSupplyCamps).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwDefendedSupplyCamps).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 310, current: 486100, max: 250000, done: true}]
    }).wvwDefendedSupplyCamps).to.equal(486100)
  })

  it('can calculate the wvw captured towers', () => {
    expect(progressionStatistics({}).wvwCapturedTowers).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwCapturedTowers).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 297, current: 486100, max: 250000, done: true}]
    }).wvwCapturedTowers).to.equal(486100)
  })

  it('can calculate the wvw defended towers', () => {
    expect(progressionStatistics({}).wvwDefendedTowers).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwDefendedTowers).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 322, current: 486100, max: 250000, done: true}]
    }).wvwDefendedTowers).to.equal(486100)
  })

  it('can calculate the wvw captured keeps', () => {
    expect(progressionStatistics({}).wvwCapturedKeeps).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwCapturedKeeps).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 300, current: 486100, max: 250000, done: true}]
    }).wvwCapturedKeeps).to.equal(486100)
  })

  it('can calculate the wvw defended keeps', () => {
    expect(progressionStatistics({}).wvwDefendedKeeps).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwDefendedKeeps).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 316, current: 486100, max: 250000, done: true}]
    }).wvwDefendedKeeps).to.equal(486100)
  })

  it('can calculate the wvw captured castles', () => {
    expect(progressionStatistics({}).wvwCapturedCastles).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwCapturedCastles).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 294, current: 486100, max: 250000, done: true}]
    }).wvwCapturedCastles).to.equal(486100)
  })

  it('can calculate the wvw defended castles', () => {
    expect(progressionStatistics({}).wvwDefendedCastles).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwDefendedCastles).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 313, current: 486100, max: 250000, done: true}]
    }).wvwDefendedCastles).to.equal(486100)
  })

  it('can calculate the pvp killed players', () => {
    expect(progressionStatistics({}).pvpKilledPlayers).to.equal(null)
    expect(progressionStatistics({achievements: []}).pvpKilledPlayers).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 239, current: 41200, max: 10000, done: true}]
    }).pvpKilledPlayers).to.equal(41200)
  })

  it('can calculate the pvp killed players in ranked', () => {
    expect(progressionStatistics({}).pvpKilledPlayersRanked).to.equal(null)
    expect(progressionStatistics({achievements: []}).pvpKilledPlayersRanked).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 240, current: 41200, max: 10000, done: true}]
    }).pvpKilledPlayersRanked).to.equal(41200)
  })
})
