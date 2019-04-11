import round from 'round-to'

export default function (accountData) {
  return {
    guildCount: guildCount(accountData),
    wvwRank: wvwRank(accountData),
    playtime: playtime(accountData),
    playtimePerDay: playtimePerDay(accountData),
    _luckFromAccount: luckFromAccount(accountData)
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

// The amount of seconds played on this account
function playtime (accountData) {
  if (!accountData.account) {
    return null
  }

  if (!accountData.account.age) {
    return null
  }

  return accountData.account.age
}

// The amount of seconds played on this account per day
function playtimePerDay (accountData) {
  if (!accountData.account) {
    return null
  }

  if (!accountData.account.age || !accountData.account.created) {
    return null
  }

  const playtime = accountData.account.age
  const now = (new Date()).getTime()
  const creation = (new Date(accountData.account.created)).getTime()
  const daysSinceCreation = Math.ceil((now - creation) / (1000 * 60 * 60 * 24))

  return daysSinceCreation > 1 ? round(playtime / daysSinceCreation, 2) : null
}

// The amount of luck unlocked on the account
function luckFromAccount (accountData) {
  if (!accountData.luck) {
    return null
  }

  return accountData.luck
}
