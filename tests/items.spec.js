/* eslint-env node, mocha */
const expect = require('chai').expect
import itemsStatistics from '../src/statistics/items'

describe('statistics > items', () => {
  it('can calculate legendary count', () => {
    expect(itemsStatistics({}).legendaryItems).to.equal(null)
    expect(itemsStatistics({
      bank: [
        {id: 123},
        {id: 30687},
        {id: 71383},
        {id: 1},
        {id: 7}
      ]
    }).legendaryItems).to.equal(2)
  })

  it('can calculate fractal tonic count', () => {
    expect(itemsStatistics({}).fractalTonics).to.equal(null)
    expect(itemsStatistics({
      bank: [
        {id: 49277},
        {id: 30687},
        {id: 71383},
        {id: 49277},
        {id: 49277}
      ]
    }).fractalTonics).to.equal(3)
  })
})
