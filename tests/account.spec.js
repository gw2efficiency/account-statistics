/* eslint-env node, mocha */
const expect = require('chai').expect
import accountStatistics from '../src/statistics/account'

describe('statistics > account', () => {
  it('can calculate guild count', () => {
    expect(accountStatistics({}).guildCount).to.equal(null)
    expect(accountStatistics({account: {}}).guildCount).to.equal(null)
    expect(accountStatistics({account: {guilds: ['uuid-1', 'uuid-2']}}).guildCount).to.equal(2)
  })

  it('can calculate the wvw rank', () => {
    expect(accountStatistics({}).wvwRank).to.equal(null)
    expect(accountStatistics({account: {}}).wvwRank).to.equal(null)
    expect(accountStatistics({account: {wvw_rank: 123}}).wvwRank).to.equal(123)
  })
})
