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
      _fractalRelicsFromWallet: null,
      _pristineFractalRelicsFromWallet: null,
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
      shardsOfZhaitan: null,
      ascendedShardsOfGlory: null,
      tradeContract: null,
      elegyMosaic: null,
      testimonyOfHeroics: null,
      gaetingCrystals: null,
      volatileMagic: null,
      pvpTournamentVouchers: null,
      racingMedallions: null,
      festivalToken: null,
      warSupplies: null,
      _unstableFractalEssenceFromWallet: null
    })
  })

  it('can calculate all wallet values', () => {
    const wallet = [
      {id: 1, value: 17551485}, // Coin
      {id: 2, value: 207320}, // Karma
      {id: 3, value: 12}, // Laurel
      {id: 4, value: 499}, // Gems
      {id: 5, value: 84}, // Ascalonian Tear
      {id: 6, value: 35}, // Shard of Zhaitan
      {id: 7, value: 1168}, // Fractal Relic
      {id: 9, value: 295}, // Seal of Beetletun
      {id: 10, value: 45}, // Manifesto of the Moletariate
      {id: 11, value: 173}, // Deadly Bloom
      {id: 12, value: 270}, // Symbol of Koda
      {id: 13, value: 123}, // Flame Legion Charr Carving
      {id: 14, value: 253}, // Knowledge Crystal
      {id: 15, value: 1688}, // Badge of Honor
      {id: 16, value: 127}, // Guild Commendation
      {id: 18, value: 145}, // Transmutation Charge
      {id: 19, value: 24}, // Airship Part
      {id: 20, value: 5}, // Ley Line Crystal
      {id: 22, value: 139}, // Lump of Aurillium
      {id: 23, value: 2070}, // Spirit Shard
      {id: 24, value: 48}, // Pristine Fractal Relic
      {id: 25, value: 303}, // Geode
      {id: 26, value: 50}, // WvW Skirmish Claim Ticket
      {id: 27, value: 1383}, // Bandit Crest
      {id: 28, value: 197}, // Magnetite Shard
      {id: 29, value: 27}, // Provisioner Token
      {id: 30, value: 55}, // PvP League Ticket
      {id: 31, value: 112}, // Proof of Heroics
      // {id: 32, value: 0}, // Unbound Magic (missing for coverage)
      {id: 33, value: 45}, // Ascended Shards of Glory
      {id: 34, value: 465}, // Trade Contract
      {id: 35, value: 98}, // Elegy Mosaic
      {id: 36, value: 645}, // Testimony of Heroics
      {id: 39, value: 561}, // Gaeting Crystals
      {id: 45, value: 980}, // Volatile Magic
      {id: 46, value: 45}, // PvP Tournament Vouchers
      {id: 47, value: 435} // Racing Medallions
    ]

    expect(walletStatistics({wallet})).to.deep.equal({
      gems: 499,
      gold: 17551485,
      karma: 207320,
      spiritShards: 2070,
      laurels: 12,
      transmutationCharges: 145,
      badgesOfHonor: 1688,
      _fractalRelicsFromWallet: 1168,
      _pristineFractalRelicsFromWallet: 48,
      guildCommendations: 127,
      geodes: 303,
      banditCrests: 1383,
      airshipParts: 24,
      lumpsOfAurillium: 139,
      leyLineCrystals: 5,
      unboundMagic: 0,
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
      dungeonTokenCount: 1278,
      ascendedShardsOfGlory: 45,
      tradeContract: 465,
      elegyMosaic: 98,
      testimonyOfHeroics: 645,
      gaetingCrystals: 561,
      volatileMagic: 980,
      pvpTournamentVouchers: 45,
      racingMedallions: 435,
      festivalToken: 0,
      warSupplies: 0,
      _unstableFractalEssenceFromWallet: 0
    })
  })
})
