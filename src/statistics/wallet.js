import walletIdMapping from '../static/walletIdMapping'

// Create the default values to return when the wallet data is not set
let defaultValues = {dungeonTokenCount: null}
Object.keys(walletIdMapping).map(x => {
  defaultValues[x] = null
})

export default function (accountData) {
  if (!accountData.wallet) {
    return defaultValues
  }

  // Convert the wallet into a map of id => value
  const wallet = convertToMap(accountData.wallet)

  // Go through all the statistic keys and write the wallet value into it
  let values = {}
  Object.keys(walletIdMapping).map(key => {
    let id = walletIdMapping[key]
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
  return values.ascalonianTears + values.sealsOfBeetletun + values.deadlyBlooms +
    values.manifestosOfTheMoletariate + values.flameLegionCharrCarvings +
    values.symbolsOfKoda + values.knowledgeCrystals + values.shardsOfZhaitan
}
