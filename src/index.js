import accountStatistics from './statistics/account'
import charactersStatistics from './statistics/characters'
import commerceStatistics from './statistics/commerce'
import itemsStatistics from './statistics/items'
import progressionStatistics from './statistics/progression'
import pvpStatistics from './statistics/pvp'
import unlocksStatistics from './statistics/unlocks'
import walletStatistics from './statistics/wallet'
import masteriesStatistics from './statistics/masteries'
import aggregateStatistics from './statistics/aggregate'

export default function (accountData, calcData) {
  let baseStatistics = {
    ...accountStatistics(accountData, calcData),
    ...charactersStatistics(accountData, calcData),
    ...commerceStatistics(accountData, calcData),
    ...itemsStatistics(accountData, calcData),
    ...progressionStatistics(accountData, calcData),
    ...pvpStatistics(accountData, calcData),
    ...unlocksStatistics(accountData, calcData),
    ...walletStatistics(accountData, calcData),
    ...masteriesStatistics(accountData, calcData)
  }

  return {...baseStatistics, ...aggregateStatistics(baseStatistics, calcData)}
}
