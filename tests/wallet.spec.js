/* eslint-env node, mocha */
import { expect } from 'chai'
import walletStatistics from '../src/statistics/wallet'

describe('statistics > wallet', () => {
  it('can handle an empty wallet', () => {
    expect(walletStatistics({})).to.deep.equal({
      dungeonTokenCount: null,
      gems: null,
      gold: null,
      karma: null,
      spiritShards: null,
      laurels: null,
      transmutationCharges: null,
      badgesOfHonor: null,
      fractalRelics: null,
      pristineFractalRelics: null,
      guildCommendations: null,
      geodes: null,
      banditCrests: null,
      airshipParts: null,
      lumpsOfAurillium: null,
      leyLineCrystals: null,
      unboundMagic: null,
      magnetiteShards: null,
      wvwClaimTickets: null,
      proofOfHeroics: null,
      pvpLeagueTickets: null,
      provisionerTokens: null,
      ascalonianTears: null,
      sealsOfBeetletun: null,
      deadlyBlooms: null,
      manifestosOfTheMoletariate: null,
      flameLegionCharrCarvings: null,
      symbolsOfKoda: null,
      knowledgeCrystals: null,
      shardsOfZhaitan: null
    })
  })

  it('can calculate all wallet values', () => {
    const wallet = [
      {id: 1, value: 17551485},
      {id: 2, value: 207320},
      {id: 3, value: 12},
      {id: 5, value: 84},
      {id: 6, value: 35},
      {id: 7, value: 1168},
      {id: 9, value: 295},
      {id: 10, value: 45},
      {id: 11, value: 173},
      {id: 12, value: 270},
      {id: 13, value: 123},
      {id: 14, value: 253},
      {id: 15, value: 1688},
      {id: 16, value: 127},
      {id: 18, value: 145},
      {id: 19, value: 24},
      {id: 20, value: 5},
      {id: 22, value: 139},
      {id: 23, value: 2070},
      {id: 24, value: 48},
      {id: 25, value: 303},
      {id: 26, value: 50},
      {id: 27, value: 1383},
      {id: 28, value: 197},
      {id: 29, value: 27},
      {id: 30, value: 55},
      {id: 31, value: 112},
      {id: 32, value: 70}
    ]

    expect(walletStatistics({wallet})).to.deep.equal({
      gems: 0,
      gold: 17551485,
      karma: 207320,
      spiritShards: 2070,
      laurels: 12,
      transmutationCharges: 145,
      badgesOfHonor: 1688,
      fractalRelics: 1168,
      pristineFractalRelics: 48,
      guildCommendations: 127,
      geodes: 303,
      banditCrests: 1383,
      airshipParts: 24,
      lumpsOfAurillium: 139,
      leyLineCrystals: 5,
      unboundMagic: 70,
      magnetiteShards: 197,
      wvwClaimTickets: 50,
      proofOfHeroics: 112,
      pvpLeagueTickets: 55,
      provisionerTokens: 27,
      ascalonianTears: 84,
      sealsOfBeetletun: 295,
      deadlyBlooms: 173,
      manifestosOfTheMoletariate: 45,
      flameLegionCharrCarvings: 123,
      symbolsOfKoda: 270,
      knowledgeCrystals: 253,
      shardsOfZhaitan: 35,
      dungeonTokenCount: 1278
    })
  })
})
