/* eslint-env node, mocha */
import { expect } from 'chai'
import unlocksStatistics from '../src/statistics/unlocks'

describe('statistics > unlocks', () => {
  it('can calculate dye count', () => {
    expect(unlocksStatistics({}).dyeCount).to.equal(null)
    expect(unlocksStatistics({dyes: []}).dyeCount).to.equal(0)
    expect(unlocksStatistics({dyes: [1, 2, 7, 9, 10]}).dyeCount).to.equal(5)
  })

  it('can calculate skin count', () => {
    expect(unlocksStatistics({}).skinCount).to.equal(null)
    expect(unlocksStatistics({skins: []}).skinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).skinCount).to.equal(5)
  })

  it('can calculate mini count', () => {
    expect(unlocksStatistics({}).miniCount).to.equal(null)
    expect(unlocksStatistics({minis: []}).miniCount).to.equal(0)
    expect(unlocksStatistics({minis: [1, 2, 7, 9, 10]}).miniCount).to.equal(5)
  })

  it('can calculate finisher count', () => {
    const finishers = [
      {id: 1, permanent: true},
      {id: 2, permanent: true},
      {id: 7, permanent: true},
      {id: 9, permanent: true},
      {id: 10, permanent: true},
      {id: 11, permanent: false}
    ]

    expect(unlocksStatistics({}).finisherCount).to.equal(null)
    expect(unlocksStatistics({finishers: []}).finisherCount).to.equal(0)
    expect(unlocksStatistics({finishers}).finisherCount).to.equal(5)
  })

  it('can calculate outfit count', () => {
    expect(unlocksStatistics({}).outfitCount).to.equal(null)
    expect(unlocksStatistics({outfits: []}).outfitCount).to.equal(0)
    expect(unlocksStatistics({outfits: [1, 2, 7, 9, 10]}).outfitCount).to.equal(5)
  })

  it('can calculate mailcarrier count', () => {
    expect(unlocksStatistics({}).mailcarrierCount).to.equal(null)
    expect(unlocksStatistics({mailcarriers: []}).mailcarrierCount).to.equal(0)
    expect(unlocksStatistics({mailcarriers: [1, 2, 7, 9, 10]}).mailcarrierCount).to.equal(5)
  })

  it('can calculate glider count', () => {
    expect(unlocksStatistics({}).gliderCount).to.equal(null)
    expect(unlocksStatistics({gliders: []}).gliderCount).to.equal(0)
    expect(unlocksStatistics({gliders: [1, 2, 7, 9, 10]}).gliderCount).to.equal(5)
  })

  it('can calculate pvp hero count', () => {
    expect(unlocksStatistics({}).pvpHeroCount).to.equal(null)
    expect(unlocksStatistics({pvp: {}}).pvpHeroCount).to.equal(null)
    expect(unlocksStatistics({pvp: {heroes: []}}).pvpHeroCount).to.equal(0)
    expect(unlocksStatistics({pvp: {heroes: [1, 2, 7, 9, 10]}}).pvpHeroCount).to.equal(5)
  })

  it('can calculate title count', () => {
    expect(unlocksStatistics({}).titleCount).to.equal(null)
    expect(unlocksStatistics({titles: []}).titleCount).to.equal(0)
    expect(unlocksStatistics({titles: [1, 2, 7, 9, 10]}).titleCount).to.equal(5)
  })

  it('can calculate recipe count', () => {
    expect(unlocksStatistics({}).recipeCount).to.equal(null)
    expect(unlocksStatistics({recipes: []}).recipeCount).to.equal(0)
    expect(unlocksStatistics({recipes: [1, 2, 7, 9, 10]}).recipeCount).to.equal(5)
  })

  it('can calculate legendary skin count', () => {
    expect(unlocksStatistics({}).legendarySkins).to.equal(null)
    expect(unlocksStatistics({skins: []}).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4680, 6561, 7130]}).legendarySkins).to.equal(3)
  })

  it('can calculate legendary skin weapon count', () => {
    expect(unlocksStatistics({}).legendarySkinsWeapon).to.equal(null)
    expect(unlocksStatistics({skins: []}).legendarySkinsWeapon).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).legendarySkinsWeapon).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4680, 7206]}).legendarySkinsWeapon).to.equal(2)
  })

  it('can calculate legendary skin armor count', () => {
    expect(unlocksStatistics({}).legendarySkinsArmor).to.equal(null)
    expect(unlocksStatistics({skins: []}).legendarySkinsArmor).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).legendarySkinsArmor).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7142, 7107]}).legendarySkinsArmor).to.equal(2)
  })

  it('can calculate legendary skin back count', () => {
    expect(unlocksStatistics({}).legendarySkinsBack).to.equal(null)
    expect(unlocksStatistics({skins: []}).legendarySkinsBack).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).legendarySkinsBack).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 6344, 6561]}).legendarySkinsBack).to.equal(2)
  })

  it('can calculate fractal skin count', () => {
    expect(unlocksStatistics({}).fractalSkins).to.equal(null)
    expect(unlocksStatistics({skins: []}).fractalSkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).fractalSkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4500, 6234]}).fractalSkins).to.equal(2)
  })

  it('can calculate the winters presence unlock', () => {
    expect(unlocksStatistics({}).wintersPresence).to.equal(null)
    expect(unlocksStatistics({skins: []}).wintersPresence).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).wintersPresence).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 6577, 6577]}).wintersPresence).to.equal(1)
  })

  it('can calculate the nightfury unlock', () => {
    expect(unlocksStatistics({}).nightfury).to.equal(null)
    expect(unlocksStatistics({skins: []}).nightfury).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}).nightfury).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 6161, 6161]}).nightfury).to.equal(1)
  })
})
