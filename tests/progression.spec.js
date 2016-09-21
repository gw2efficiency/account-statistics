/* eslint-env node, mocha */
const expect = require('chai').expect
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

  it('can calculate the wvw killed players', () => {
    expect(progressionStatistics({}).wvwPlayerKills).to.equal(null)
    expect(progressionStatistics({achievements: []}).wvwPlayerKills).to.equal(0)
    expect(progressionStatistics({
      achievements: [{id: 283, current: 486100, max: 250000, done: true}]
    }).wvwPlayerKills).to.equal(486100)
  })
})
