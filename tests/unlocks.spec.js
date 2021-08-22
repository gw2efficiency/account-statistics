/* eslint-env node, mocha */
import { expect } from 'chai'
import unlocksStatistics from '../src/statistics/unlocks'

const EXTRA_INFO = {
  skins: {
    typeMap: {
      Armor: [101],
      Weapon: [102],
      Back: [103]
    }
  }
}

describe('statistics > unlocks', () => {
  it('can calculate dye count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).dyeCount).to.equal(null)
    expect(unlocksStatistics({dyes: []}, EXTRA_INFO).dyeCount).to.equal(0)
    expect(unlocksStatistics({dyes: [1, 2, 7, 9, 10]}, EXTRA_INFO).dyeCount).to.equal(5)
  })

  it('can calculate skin count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).skinCount).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).skinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).skinCount).to.equal(5)
  })

  it.skip('can calculate armor skin count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).armorSkinCount).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).armorSkinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).armorSkinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10, 101]}, EXTRA_INFO).armorSkinCount).to.equal(1)
  })

  it.skip('can calculate weapon skin count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).weaponSkinCount).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).weaponSkinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).weaponSkinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10, 102]}, EXTRA_INFO).weaponSkinCount).to.equal(1)
  })

  it.skip('can calculate back skin count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).backSkinCount).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).backSkinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).backSkinCount).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10, 103]}, EXTRA_INFO).backSkinCount).to.equal(1)
  })

  it('can calculate mini count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).miniCount).to.equal(null)
    expect(unlocksStatistics({minis: []}, EXTRA_INFO).miniCount).to.equal(0)
    expect(unlocksStatistics({minis: [1, 2, 7, 9, 10]}, EXTRA_INFO).miniCount).to.equal(5)
  })

  it('can calculate mount count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).mountCount).to.equal(null)
    expect(unlocksStatistics({mounts: null}, EXTRA_INFO).mountCount).to.equal(null)
    expect(unlocksStatistics({mounts: {skins: []}}, EXTRA_INFO).mountCount).to.equal(0)
    expect(unlocksStatistics({mounts: {skins: [1, 2, 7, 9, 10]}}, EXTRA_INFO).mountCount).to.equal(5)
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

    expect(unlocksStatistics({}, EXTRA_INFO).finisherCount).to.equal(null)
    expect(unlocksStatistics({finishers: []}, EXTRA_INFO).finisherCount).to.equal(0)
    expect(unlocksStatistics({finishers}, EXTRA_INFO).finisherCount).to.equal(5)
  })

  it('can calculate novelty count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).noveltyCount).to.equal(null)
    expect(unlocksStatistics({novelties: []}, EXTRA_INFO).noveltyCount).to.equal(0)
    expect(unlocksStatistics({novelties: [1, 2, 7, 9, 10]}, EXTRA_INFO).noveltyCount).to.equal(5)
  })

  it('can calculate outfit count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).outfitCount).to.equal(null)
    expect(unlocksStatistics({outfits: []}, EXTRA_INFO).outfitCount).to.equal(0)
    expect(unlocksStatistics({outfits: [1, 2, 7, 9, 10]}, EXTRA_INFO).outfitCount).to.equal(5)
  })

  it('can calculate mailcarrier count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).mailcarrierCount).to.equal(null)
    expect(unlocksStatistics({mailcarriers: []}, EXTRA_INFO).mailcarrierCount).to.equal(0)
    expect(unlocksStatistics({mailcarriers: [1, 2, 7, 9, 10]}, EXTRA_INFO).mailcarrierCount).to.equal(5)
  })

  it('can calculate glider count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).gliderCount).to.equal(null)
    expect(unlocksStatistics({gliders: []}, EXTRA_INFO).gliderCount).to.equal(0)
    expect(unlocksStatistics({gliders: [1, 2, 7, 9, 10]}, EXTRA_INFO).gliderCount).to.equal(5)
  })

  it('can calculate pvp hero count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).pvpHeroCount).to.equal(null)
    expect(unlocksStatistics({pvp: {}}, EXTRA_INFO).pvpHeroCount).to.equal(null)
    expect(unlocksStatistics({pvp: {heroes: []}}, EXTRA_INFO).pvpHeroCount).to.equal(0)
    expect(unlocksStatistics({pvp: {heroes: [1, 2, 7, 9, 10]}}, EXTRA_INFO).pvpHeroCount).to.equal(5)
  })

  it('can calculate title count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).titleCount).to.equal(null)
    expect(unlocksStatistics({titles: []}, EXTRA_INFO).titleCount).to.equal(0)
    expect(unlocksStatistics({titles: [1, 2, 7, 9, 10]}, EXTRA_INFO).titleCount).to.equal(5)
  })

  it('can calculate recipe count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).recipeCount).to.equal(null)
    expect(unlocksStatistics({recipes: []}, EXTRA_INFO).recipeCount).to.equal(0)
    expect(unlocksStatistics({recipes: [1, 2, 7, 9, 10]}, EXTRA_INFO).recipeCount).to.equal(5)
  })

  it('can calculate legendaryarmory count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).legendaryarmoryCount).to.equal(null)
    expect(unlocksStatistics({legendaryarmory: []}, EXTRA_INFO).legendaryarmoryCount).to.equal(0)

    expect(unlocksStatistics({legendaryarmory: [
      { id: 30699, count: 1 },
      { id: 81957, count: 2 },
      { id: 30687, count: 1 }
    ]}, EXTRA_INFO).legendaryarmoryCount).to.equal(4)
  })

  it('can the count of shared inventory slots', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).sharedInventorySlots).to.equal(null)
    expect(unlocksStatistics({shared: []}, EXTRA_INFO).sharedInventorySlots).to.equal(0)
    expect(unlocksStatistics({shared: [1, 2, 7, 9, 10]}, EXTRA_INFO).sharedInventorySlots).to.equal(5)
  })

  it('can calculate legendary skin count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).legendarySkins).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).legendarySkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4680, 6561, 7130]}, EXTRA_INFO).legendarySkins).to.equal(3)
  })

  it('can calculate legendary skin weapon count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).legendarySkinsWeapon).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).legendarySkinsWeapon).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).legendarySkinsWeapon).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4680, 7206]}, EXTRA_INFO).legendarySkinsWeapon).to.equal(2)
  })

  it('can calculate legendary skin armor count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).legendarySkinsArmor).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).legendarySkinsArmor).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).legendarySkinsArmor).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7142, 7107]}, EXTRA_INFO).legendarySkinsArmor).to.equal(2)
  })

  it('can calculate legendary skin back count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).legendarySkinsBack).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).legendarySkinsBack).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).legendarySkinsBack).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 6344, 6561]}, EXTRA_INFO).legendarySkinsBack).to.equal(2)
  })

  it('can calculate fractal skin count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).fractalSkins).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).fractalSkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).fractalSkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 4500, 6234]}, EXTRA_INFO).fractalSkins).to.equal(2)
  })

  it('can calculate immportal weapon skin count', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).immortalSkins).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).immortalSkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).immortalSkins).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 6111, 6087]}, EXTRA_INFO).immortalSkins).to.equal(2)
  })

  it('can calculate the winters presence unlock', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).wintersPresence).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).wintersPresence).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).wintersPresence).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 6577, 6577]}, EXTRA_INFO).wintersPresence).to.equal(1)
  })

  it('can calculate the nightfury unlock', () => {
    expect(unlocksStatistics({}, EXTRA_INFO).nightfury).to.equal(null)
    expect(unlocksStatistics({skins: []}, EXTRA_INFO).nightfury).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 7, 9, 10]}, EXTRA_INFO).nightfury).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2, 6161, 6161]}, EXTRA_INFO).nightfury).to.equal(1)
  })

  it('can calculate fractal relics used for titles', () => {
    expect(unlocksStatistics({}, EXTRA_INFO)._fractalRelicsFromTitles).to.equal(null)
    expect(unlocksStatistics({titles: []}, EXTRA_INFO)._fractalRelicsFromTitles).to.equal(0)
    expect(unlocksStatistics({titles: [1, 2, 7, 9, 10]}, EXTRA_INFO)._fractalRelicsFromTitles).to.equal(0)
    expect(unlocksStatistics({titles: [1, 2, 299, 297, 296, 298]}, EXTRA_INFO)._fractalRelicsFromTitles).to.equal(160000)
  })

  it('can calculate pristine fractal relics used for titles', () => {
    expect(unlocksStatistics({}, EXTRA_INFO)._pristineFractalRelicsFromTitles).to.equal(null)
    expect(unlocksStatistics({titles: []}, EXTRA_INFO)._pristineFractalRelicsFromTitles).to.equal(0)
    expect(unlocksStatistics({titles: [1, 2, 7, 9, 10]}, EXTRA_INFO)._pristineFractalRelicsFromTitles).to.equal(0)
    expect(unlocksStatistics({titles: [1, 2, 299, 297, 296, 298]}, EXTRA_INFO)._pristineFractalRelicsFromTitles).to.equal(3200)
  })

  it('can calculate unstable fractal essence used for unlocks', () => {
    expect(unlocksStatistics({}, EXTRA_INFO)._unstableFractalEssenceFromUnlocks).to.equal(null)
    expect(unlocksStatistics({skins: [], novelties: []}, EXTRA_INFO)._unstableFractalEssenceFromUnlocks).to.equal(0)
    expect(unlocksStatistics({skins: [1, 2], novelties: [1, 2]}, EXTRA_INFO)._unstableFractalEssenceFromUnlocks).to.equal(0)
    expect(unlocksStatistics({skins: [9607, 9603], novelties: [141]}, EXTRA_INFO)._unstableFractalEssenceFromUnlocks).to.equal(2 * 480 + 450)
  })
})
