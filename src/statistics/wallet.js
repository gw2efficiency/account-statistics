import walletIdMapping from '../static/walletIdMapping'

const EOD_CHANGED_CURRENCIES = [57, 54, 53,  55, 52, 56]

// Create the default values to return when the wallet data is not set
let defaultValues = {dungeonTokenCount: null}
Object.keys(walletIdMapping).map(x => {
  defaultValues[x] = null
})

export default function (accountData) {
  if (!accountData.wallet) {
    return defaultValues
  }

  const loggedInAfterEoDRelease = new Date(accountData.account.last_modified) > new Date('2022-02-28T12:00:00.000Z')

  // Convert the wallet into a map of id => value
  const wallet = convertToMap(accountData.wallet)

  // Go through all the statistic keys and write the wallet value into it
  let values = {}
  Object.keys(walletIdMapping).map(key => {
    let id = walletIdMapping[key]

    if (!loggedInAfterEoDRelease && EOD_CHANGED_CURRENCIES.includes(id)) {
      values[key] = 0
      return
    }

    values[key] = wallet[id] || 0
  })

  // Calculate derived values
  values.dungeonTokenCount = dungeonTokenCount(values)
  return values
}

// Convert the wallet into a map of id => value
function convertToMap (array) {
  let map = {}
  array.map(x => {
    map[x.id] = x.value
  })
  return map
}

// Add all dungeon tokens together
function dungeonTokenCount (values) {
  return (
    values.ascalonianTears +
    values.sealsOfBeetletun +
    values.deadlyBlooms +
    values.manifestosOfTheMoletariate +
    values.flameLegionCharrCarvings +
    values.symbolsOfKoda +
    values.knowledgeCrystals +
    values.shardsOfZhaitan +
    values.talesOfDungeonDelving
  )
}
