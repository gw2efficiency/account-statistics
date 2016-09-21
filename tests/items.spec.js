/* eslint-env node, mocha */
const expect = require('chai').expect
import itemsStatistics from '../src/statistics/items'

const generateAccount = (items) => {
  return {
    bank: items.slice(0, 1),
    characters: [{
      name: 'Holds items',
      equipment: items.slice(1, 2),
      bags: [
        {inventory: items.slice(2)}
      ]
    }]
  }
}

describe('statistics > items', () => {
  it('exits out when one of the permissions is missing', () => {
    const emptyObject = {
      baubleInfusions: null,
      brokenSpoons: null,
      chakEggSacks: null,
      fractalTonics: null,
      ghostlyInfusions: null,
      legendaryInsights: null,
      legendaryItems: null,
      luminescentRefractors: null,
      preservedQueenBees: null,
      permanentTools: null,
      whiteMantlePortalDevices: null,
      blackLionClaimTickets: null,
      instruments: null
    }

    const bothPermissions = {bank: null, characters: null}
    expect(itemsStatistics(bothPermissions)).to.deep.equal(emptyObject)

    const inventoriesPermission = {bank: null, characters: [{name: 'Yo'}]}
    expect(itemsStatistics(inventoriesPermission)).to.deep.equal(emptyObject)

    const charactersPermission = {bank: [{id: 30687}], characters: null}
    expect(itemsStatistics(charactersPermission)).to.deep.equal(emptyObject)
  })

  it('can calculate legendary count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 123, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 1, count: 1},
      {id: 7, count: 1}
    ])).legendaryItems).to.equal(2)
  })

  it('can calculate fractal tonic count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 49277, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 49277, count: 1},
      {id: 49277, count: 1}
    ])).fractalTonics).to.equal(3)
  })

  it('can calculate legendary insight count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 77302, count: 50},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 77302, count: 1},
      {id: 77302, count: 4}
    ])).legendaryInsights).to.equal(55)
  })

  it('can calculate white mantle portal device count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78978, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 78978, count: 1},
      {id: 78978, count: 1}
    ])).whiteMantlePortalDevices).to.equal(3)
  })

  it('can calculate chak egg sack count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 72021, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 72021, count: 1},
      {id: 72021, count: 1}
    ])).chakEggSacks).to.equal(3)
  })

  it('can calculate preserved queen bee count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 68440, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 68440, count: 1},
      {id: 68440, count: 1}
    ])).preservedQueenBees).to.equal(3)
  })

  it('can calculate ghostly infusion count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 77303, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 77316, count: 1},
      {id: 77394, count: 1}
    ])).ghostlyInfusions).to.equal(3)
  })

  it('can calculate bauble infusion count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78079, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 78028, count: 1},
      {id: 78097, count: 1}
    ])).baubleInfusions).to.equal(3)
  })

  it('can calculate luminescent refractor count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 67375, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 67370, count: 1},
      {id: 67372, count: 1}
    ])).luminescentRefractors).to.equal(3)
  })

  it('can calculate broken spoon count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 74996, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 74996, count: 1},
      {id: 74996, count: 1}
    ])).brokenSpoons).to.equal(3)
  })

  it('can calculate black lion ticket count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 43992, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 43998, count: 3},
      {id: 43998, count: 1}
    ])).blackLionClaimTickets).to.equal(1.4)
  })

  it('can calculate instrument count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 66323, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 38129, count: 1},
      {id: 43526, count: 1}
    ])).instruments).to.equal(3)
  })

  it('can calculate permanent tool count', () => {
    expect(itemsStatistics(generateAccount([
      {id: 78806, count: 1},
      {id: 30687, count: 1},
      {id: 71383, count: 1},
      {id: 38129, count: 1},
      {id: 47897, count: 1}
    ])).permanentTools).to.equal(2)
  })
})
