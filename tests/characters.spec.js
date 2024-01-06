/* eslint-env node, mocha */
import { expect } from 'chai'
import charactersStatistics from '../src/statistics/characters'

describe('statistics > characters', () => {
  it('can handle no characters', () => {
    expect(charactersStatistics({})).to.deep.equal({
      characterCount: null,
      maxLevelCharacterCount: null,
      deathCount: null,
      mostPlayedCharacterPlaytime: null
    })
  })

  it('can calculate the character statistics', () => {
    const data = [
      {
        name: 'Vîcona',
        level: 80,
        age: 8590624,
        created: '2013-09-21T20:33:00Z',
        deaths: 3324
      },
      {
        name: 'Queicherius',
        level: 80,
        age: 2005269,
        created: '2015-10-23T11:18:00Z',
        deaths: 618
      },
      {
        name: 'Bloodstone Deposit',
        level: 4,
        age: 7452,
        created: '2014-09-02T01:20:00Z',
        deaths: 0
      }
    ]

    expect(charactersStatistics({characters: data})).to.deep.equal({
      characterCount: 3,
      deathCount: 3942,
      maxLevelCharacterCount: 2,
      mostPlayedCharacterPlaytime: 8590624
    })
  })

  it('can handle a fresh account', () => {
    expect(charactersStatistics({characters: []})).to.deep.equal({
      characterCount: 0,
      deathCount: 0,
      maxLevelCharacterCount: 0,
      mostPlayedCharacterPlaytime: 0
    })
  })
})
