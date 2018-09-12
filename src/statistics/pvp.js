import round from 'round-to'

export default function (accountData, extraInformation) {
  if (!accountData.pvp || !accountData.pvp.stats || !accountData.pvp.standings) {
    return {
      pvpRank: null,
      pvpLeagueRating: null,
      pvpGameCount: null,
      pvpGameCountRanked: null,
      pvpWinCount: null,
      pvpWinCountRanked: null,

      pvpWinRate50: null,
      pvpWinRate250: null,
      pvpWinRate500: null,
      pvpWinRate1000: null,

      pvpWinRateRanked: null,
      pvpWinRateRanked250: null,
      pvpWinRateRanked500: null,
      pvpWinRateRanked1000: null
    }
  }

  const stats = accountData.pvp.stats
  const standings = accountData.pvp.standings

  // Get the current league rating
  const currentLeague = standings.find(x => x.season_id === extraInformation.pvp.currentSeason)
  const pvpLeagueRating = currentLeague && currentLeague.current.rating > 0
    ? currentLeague.current.rating
    : null

  // Calculate the real pvp rank
  const pvpRank = stats.pvp_rank + stats.pvp_rank_rollovers

  // Count the games and wins for all games
  const pvpGameCount = getGames(stats.aggregate)
  const pvpWinCount = getWins(stats.aggregate)
  const pvpWinRate = pvpGameCount > 0 ? (pvpWinCount / pvpGameCount) * 100 : null

  const pvpWinRate50 = pvpGameCount > 50 ? pvpWinRate : null
  const pvpWinRate250 = pvpGameCount > 250 ? pvpWinRate : null
  const pvpWinRate500 = pvpGameCount > 500 ? pvpWinRate : null
  const pvpWinRate1000 = pvpGameCount > 1000 ? pvpWinRate : null

  // Count the games and wins for ranked games
  const l = stats.ladders
  const pvpGameCountRanked = getGames(l.ranked) + getGames(l.soloarenarated) + getGames(l.teamarenarated)
  const pvpWinCountRanked = getWins(l.ranked) + getWins(l.soloarenarated) + getWins(l.teamarenarated)
  const pvpWinRateRanked = pvpGameCountRanked > 0 ? (pvpWinCountRanked / pvpGameCountRanked) * 100 : null

  const pvpWinRateRanked50 = pvpGameCountRanked > 50 ? pvpWinRateRanked : null
  const pvpWinRateRanked250 = pvpGameCountRanked > 250 ? pvpWinRateRanked : null
  const pvpWinRateRanked500 = pvpGameCountRanked > 500 ? pvpWinRateRanked : null
  const pvpWinRateRanked1000 = pvpGameCountRanked > 1000 ? pvpWinRateRanked : null

  // Return everything!
  return {
    pvpRank,
    pvpLeagueRating,
    pvpGameCount,
    pvpGameCountRanked,
    pvpWinCount,
    pvpWinCountRanked,

    pvpWinRate50: roundWinrate(pvpWinRate50),
    pvpWinRate250: roundWinrate(pvpWinRate250),
    pvpWinRate500: roundWinrate(pvpWinRate500),
    pvpWinRate1000: roundWinrate(pvpWinRate1000),

    pvpWinRateRanked: roundWinrate(pvpWinRateRanked50), // BE CAREFUL, LEGACY KEY NAME TO KEEP STAT HISTORY!
    pvpWinRateRanked250: roundWinrate(pvpWinRateRanked250),
    pvpWinRateRanked500: roundWinrate(pvpWinRateRanked500),
    pvpWinRateRanked1000: roundWinrate(pvpWinRateRanked1000)
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
