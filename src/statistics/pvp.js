import round from 'round-to'

export default function (accountData) {
  if (!accountData.pvp || !accountData.pvp.stats) {
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

  const stats = accountData.pvp.stats

  // Calculate the real pvp rank
  const pvpRank = stats.pvp_rank + stats.pvp_rank_rollovers

  // Count the games and wins for all games
  const pvpGameCount = getGames(stats.aggregate)
  const pvpWinCount = getWins(stats.aggregate)
  const pvpWinRate = pvpGameCount > 0 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate50 = pvpGameCount > 50 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate250 = pvpGameCount > 250 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate500 = pvpGameCount > 500 ? (pvpWinCount / pvpGameCount) * 100 : null
  const pvpWinRate1000 = pvpGameCount > 1000 ? (pvpWinCount / pvpGameCount) * 100 : null

  // Count the games and wins for ranked games
  const l = stats.ladders
  const pvpGameCountRanked = getGames(l.ranked) + getGames(l.soloarenarated) + getGames(l.teamarenarated)
  const pvpWinCountRanked = getWins(l.ranked) + getWins(l.soloarenarated) + getWins(l.teamarenarated)
  const pvpWinRateRanked = pvpGameCountRanked > 50 ? (pvpWinCountRanked / pvpGameCountRanked) * 100 : null

  // Return everything!
  return {
    pvpGameCount,
    pvpGameCountRanked,
    pvpWinCount,
    pvpWinCountRanked,
    pvpRank,
    pvpWinRate: roundWinrate(pvpWinRate),
    pvpWinRate50: roundWinrate(pvpWinRate50),
    pvpWinRate250: roundWinrate(pvpWinRate250),
    pvpWinRate500: roundWinrate(pvpWinRate500),
    pvpWinRate1000: roundWinrate(pvpWinRate1000),
    pvpWinRateRanked: roundWinrate(pvpWinRateRanked)
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

function roundWinrate (winrate) {
  return winrate ? round(winrate, 2) : null
}
