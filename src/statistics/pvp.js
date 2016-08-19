export default function (accountData) {
  if (!accountData.pvp) {
    return {
      pvpGameCount: null,
      pvpWinCount: null,
      pvpRank: null,
      pvpWinRate: null
    }
  }

  // Calculate the real pvp rank
  const pvpRank = accountData.pvp.pvp_rank + accountData.pvp.pvp_rank_rollovers

  // Count the games and wins
  const aggregate = accountData.pvp.aggregate
  const pvpGameCount = aggregate.wins + aggregate.losses + aggregate.desertions +
    aggregate.byes + aggregate.forfeits
  const pvpWinCount = aggregate.wins + aggregate.byes

  // Calculate the winrate
  const pvpWinRate = pvpGameCount > 0 ? (pvpWinCount / pvpGameCount) * 100 : null
  return {pvpGameCount, pvpWinCount, pvpRank, pvpWinRate}
}
