export default function (accountData) {
  return {
    guildCount: guildCount(accountData),
    wvwRank: wvwRank(accountData)
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

// The wvw rank
function wvwRank (accountData) {
  if (!accountData.account) {
    return null
  }

  if (typeof accountData.account.wvw_rank === 'undefined') {
    return null
  }

  return accountData.account.wvw_rank
}
