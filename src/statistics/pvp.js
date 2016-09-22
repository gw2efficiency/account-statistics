export default function (accountData) {
  if (!accountData.pvp) {
    return {
      pvpGameCount: null,
      pvpGameCountRanked: null,
      pvpWinCount: null,
      pvpWinCountRanked: null,
      pvpRank: null,
      pvpWinRate: null,
      pvpWinRate50: null,
      pvpWinRate250: null,
      pvpWinRate500: null,
      pvpWinRate1000: null
    }
  }

  // Calculate the real pvp rank
  const pvpRank = accountData.pvp.pvp_rank + accountData.pvp.pvp_rank_rollovers

  // Count the games and wins for all games
  const pvpGameCount = getGames(accountData.pvp.aggregate)
  const pvpWinCount = getWins(accountData.pvp.aggregate)
  const pvpWinRate = pvpGameCount > 0 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate50 = pvpGameCount > 50 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate250 = pvpGameCount > 250 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate500 = pvpGameCount > 500 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate1000 = pvpGameCount > 1000 ? (pvpWinCount / pvpGameCount) * 100 : null

  // Count the games and wins for ranked games
  const l = accountData.pvp.ladders
  const pvpGameCountRanked = getGames(l.ranked) + getGames(l.soloarenarated) + getGames(l.teamarenarated)
  const pvpWinCountRanked = getWins(l.ranked) + getWins(l.soloarenarated) + getWins(l.teamarenarated)

  // Return everything!
  return {
    pvpGameCount,
    pvpGameCountRanked,
    pvpWinCount,
    pvpWinCountRanked,
    pvpRank,
    pvpWinRate,
    pvpWinRate50,
    pvpWinRate250,
    pvpWinRate500,
    pvpWinRate1000
  }
}

function getWins (aggregate) {
  if (!aggregate) {
    return 0
  }

  return aggregate.wins + aggregate.byes
}

function getGames (aggregate) {
  if (!aggregate) {
    return 0
  }

  return aggregate.wins + aggregate.losses + aggregate.desertions + aggregate.byes + aggregate.forfeits
}
