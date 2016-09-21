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

  it('can calculate outfit count', () => {
    expect(unlocksStatistics({}).outfitCount).to.equal(null)
    expect(unlocksStatistics({outfits: []}).outfitCount).to.equal(0)
    expect(unlocksStatistics({outfits: [1, 2, 7, 9, 2]}).outfitCount).to.equal(5)
  })

  it('can calculate title count', () => {
    expect(unlocksStatistics({}).titleCount).to.equal(null)
    expect(unlocksStatistics({titles: []}).titleCount).to.equal(0)
    expect(unlocksStatistics({titles: [1, 2, 7, 9, 2]}).titleCount).to.equal(5)
  })

  it('can calculate recipe count', () => {
    expect(unlocksStatistics({}).recipeCount).to.equal(null)
    expect(unlocksStatistics({recipes: []}).recipeCount).to.equal(0)
    expect(unlocksStatistics({recipes: [1, 2, 7, 9, 2]}).recipeCount).to.equal(5)
  })

  it('can calculate legendary skin count', () => {
    expect(unlocksStatistics({}).legendarySkins).to.equal(null)
    expect(unlocksStatistics({skins: []}).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 2]}).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4680, 6561]}).legendarySkins).to.equal(2)
  })
})
