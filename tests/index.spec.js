/* eslint-env node, mocha */
const expect = require('chai').expect
import accountStatistics from '../src/index'

describe('statistics', () => {
  it('can calculate all statistics', () => {
    const keys = Object.keys(accountStatistics({}))
    expect(keys.length).to.be.above(0)
  })
})
