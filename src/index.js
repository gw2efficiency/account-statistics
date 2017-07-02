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

export default function (accountData, extraInformation) {
  let baseStatistics = {
    ...accountStatistics(accountData, extraInformation),
    ...charactersStatistics(accountData, extraInformation),
    ...commerceStatistics(accountData, extraInformation),
    ...itemsStatistics(accountData, extraInformation),
    ...progressionStatistics(accountData, extraInformation),
    ...pvpStatistics(accountData, extraInformation),
    ...unlocksStatistics(accountData, extraInformation),
    ...walletStatistics(accountData, extraInformation),
    ...masteriesStatistics(accountData, extraInformation)
  }

  return {...baseStatistics, ...aggregateStatistics(baseStatistics, extraInformation)}
}
