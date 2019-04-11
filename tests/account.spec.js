/* eslint-env node, mocha */
import { expect } from 'chai'
import mockdate from 'mockdate'
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

  it('can calculate the playtime', () => {
    expect(accountStatistics({}).playtime).to.equal(null)
    expect(accountStatistics({account: {}}).playtime).to.equal(null)
    expect(accountStatistics({account: {age: 123}}).playtime).to.equal(123)
  })

  it('can calculate the playtime per day', () => {
    mockdate.set('2016-01-01T11:00:00Z')
    const account = {age: 10603345, created: '2013-09-21T20:33:00Z'}
    const newAccount = {age: 123, created: '2016-01-01T01:00:00Z'}

    expect(accountStatistics({}).playtimePerDay).to.equal(null)
    expect(accountStatistics({account: {}}).playtimePerDay).to.equal(null)
    expect(accountStatistics({account: newAccount}).playtimePerDay).to.equal(null)
    expect(accountStatistics({account}).playtimePerDay).to.equal(12744.41)
  })

  it('can calculate luck', () => {
    expect(accountStatistics({})._luckFromAccount).to.equal(null)
    expect(accountStatistics({luck: null})._luckFromAccount).to.equal(null)
    expect(accountStatistics({luck: 120})._luckFromAccount).to.equal(120)
  })
})
