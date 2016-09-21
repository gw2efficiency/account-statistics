/* eslint-env node, mocha */
const expect = require('chai').expect
import unlocksStatistics from '../src/statistics/unlocks'

describe('statistics > unlocks', () => {
  it('can calculate dye count', () => {
    expect(unlocksStatistics({}).dyeCount).to.equal(null)
    expect(unlocksStatistics({dyes: []}).dyeCount).to.equal(0)
    expect(unlocksStatistics({dyes: [1, 2, 7, 9, 2]}).dyeCount).to.equal(5)
  })

  it('can calculate skin count', () => {
    expect(unlocksStatistics({}).skinCount).to.equal(null)
    expect(unlocksStatistics({skins: []}).skinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 2]}).skinCount).to.equal(5)
  })

  it('can calculate mini count', () => {
    expect(unlocksStatistics({}).miniCount).to.equal(null)
    expect(unlocksStatistics({minis: []}).miniCount).to.equal(0)
    expect(unlocksStatistics({minis: [1, 2, 7, 9, 2]}).miniCount).to.equal(5)
  })

  it('can calculate finisher count', () => {
    expect(unlocksStatistics({}).finisherCount).to.equal(null)
    expect(unlocksStatistics({finishers: []}).finisherCount).to.equal(0)
    expect(unlocksStatistics({finishers: [1, 2, 7, 9, 2]}).finisherCount).to.equal(5)
  })

  it('can calculate legendary skin count', () => {
    expect(unlocksStatistics({}).legendarySkins).to.equal(null)
    expect(unlocksStatistics({skins: []}).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 2]}).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4680, 6561]}).legendarySkins).to.equal(2)
  })
})
