/* eslint-env node, mocha */
const expect = require('chai').expect
import accountStatistics from '../src/statistics/account'

describe('statistics > account', () => {
  it('can calculate guild count', () => {
    expect(accountStatistics({}).guildCount).to.equal(null)
    expect(accountStatistics({account: {}}).guildCount).to.equal(null)
    expect(accountStatistics({account: {guilds: ['uuid-1', 'uuid-2']}}).guildCount).to.equal(2)
  })
})
