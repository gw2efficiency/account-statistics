/* eslint-env node, mocha */
import { expect } from 'chai'
import accountStatistics from '../src/index'

describe('statistics', () => {
  it('can calculate all statistics', () => {
    const statistics = accountStatistics({})
    expect(statistics).to.contain.all.keys([
      'brokenSpoons',
      'totalAuras',
      'playtime',
      'deathCount',
      'deathCountPerHour'
    ])
  })
})
