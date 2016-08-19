export default function (accountData) {
  return {
    guildCount: guildCount(accountData)
  }
}

// Count of joined guilds
function guildCount (accountData) {
  if (!accountData.account) {
    return null
  }

  if (!accountData.account.guilds) {
    return null
  }

  return accountData.account.guilds.length
}
