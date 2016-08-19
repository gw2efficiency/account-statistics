import accountStatistics from './statistics/account'
import charactersStatistics from './statistics/characters'
import commerceStatistics from './statistics/commerce'
import itemsStatistics from './statistics/items'
import progressionStatistics from './statistics/progression'
import pvpStatistics from './statistics/pvp'
import unlocksStatistics from './statistics/unlocks'
import walletStatistics from './statistics/wallet'

export default function (accountData) {
  return {
    ...accountStatistics(accountData),
    ...charactersStatistics(accountData),
    ...commerceStatistics(accountData),
    ...itemsStatistics(accountData),
    ...progressionStatistics(accountData),
    ...pvpStatistics(accountData),
    ...unlocksStatistics(accountData),
    ...walletStatistics(accountData)
  }
}
