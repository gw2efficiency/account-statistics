/* eslint-env node, mocha */
const expect = require('chai').expect
import accountStatistics from '../src/index'

describe('statistics', () => {
  it('can calculate all statistics', () => {
    const statistics = accountStatistics({})
    expect(statistics).to.contain.all.keys(['brokenSpoons', 'totalAuras'])
  })
})
