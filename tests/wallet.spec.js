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
      _unstableFractalEssenceFromWallet: null,
      _blueProphetCrystal: null,
      _blueProphetShard: null,
      _greenProphetCrystal: null,
      _greenProphetShard: null,
      _redProphetCrystal: null,
      _redProphetShard: null,
      banditSkeletonKeys: null,
      cacheKey: null,
      exaltedKeys: null,
      machetes: null,
      mistbornKey: null,
      pactCrowbars: null,
      tradersKeys: null,
      tyrianDefenseSeals: null,
      vialsOfChakAcid: null,
      zephyriteLockpicks: null,
      researchNotes: null,
      unusualCoins: null,
      ancientCoins: null,
      jadeSlivers: null,
      testimonyOfJadeHeroics: null,
      canachCoins: null,
      imperialFavor: null,
      talesOfDungeonDelving: null,
      _legendaryInsightsFromWallet: null
    })
  })

  it('can calculate all wallet values', () => {
    const account = {
      last_modified: '2022-07-27'
    }

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
      {id: 47, value: 435}, // Racing Medallions
      {id: 55, value: 435}
    ]

    expect(walletStatistics({account, wallet})).to.deep.equal({
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
      _unstableFractalEssenceFromWallet: 0,
      _blueProphetCrystal: 0,
      _blueProphetShard: 0,
      _greenProphetCrystal: 435,
      _greenProphetShard: 0,
      _redProphetCrystal: 0,
      _redProphetShard: 0,
      banditSkeletonKeys: 0,
      cacheKey: 0,
      exaltedKeys: 0,
      machetes: 0,
      mistbornKey: 0,
      pactCrowbars: 0,
      tradersKeys: 0,
      tyrianDefenseSeals: 0,
      vialsOfChakAcid: 0,
      zephyriteLockpicks: 0,
      researchNotes: 0,
      unusualCoins: 0,
      jadeSlivers: 0,
      testimonyOfJadeHeroics: 0,
      canachCoins: 0,
      ancientCoins: 0,
      imperialFavor: 0,
      talesOfDungeonDelving: 0,
      _legendaryInsightsFromWallet: 0
    })
  })

  it('nulls pre-eod raid tokens', () => {
    const account = {
      last_modified: '2021-07-27'
    }

    const wallet = [
      {id: 55, value: 435}
    ]

    const result = walletStatistics({account, wallet})
    expect(result._greenProphetCrystal).to.equal(0)
  })
})
