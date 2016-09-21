export default function (accountData) {
  return {
    achievementCount: achievementCount(accountData),
    fractalLevel: fractalLevel(accountData),
    salvagedItems: achievementCurrent(accountData, 129, 200),
    completedDungeons: achievementCurrent(accountData, 123, 5),
    kegBrawlRounds: achievementCurrent(accountData, 753, 30),
    sanctumSprintRounds: achievementCurrent(accountData, 728, 15),
    southsunSurvivalRounds: achievementCurrent(accountData, 752, 6),
    crabTossRounds: achievementCurrent(accountData, 757, 12),
    wvwPlayerKills: achievementCurrent(accountData, 283),
    wvwSupplyCaravansKilled: achievementCurrent(accountData, 288),
    wvwSupplyCaravansEscorted: achievementCurrent(accountData, 285),
    wvwSupplySpentOnRepairs: achievementCurrent(accountData, 306),
    wvwCapturedObjectives: achievementCurrent(accountData, 303),
    wvwCapturedSupplyCamps: achievementCurrent(accountData, 291),
    wvwCapturedTowers: achievementCurrent(accountData, 297),
    wvwCapturedKeeps: achievementCurrent(accountData, 300),
    wvwCapturedCastles: achievementCurrent(accountData, 294),
    wvwDefendedObjectives: achievementCurrent(accountData, 319),
    wvwDefendedSupplyCamps: achievementCurrent(accountData, 310),
    wvwDefendedTowers: achievementCurrent(accountData, 322),
    wvwDefendedKeeps: achievementCurrent(accountData, 316),
    wvwDefendedCastles: achievementCurrent(accountData, 313),
    pvpKilledPlayers: achievementCurrent(accountData, 239),
    pvpKilledPlayersRanked: achievementCurrent(accountData, 240)
  }
}

// How many achievements the user did
function achievementCount (accountData) {
  if (!accountData.achievements) {
    return null
  }

  return accountData.achievements
    .filter(x => x.done === true || x.repeated && x.repeated > 0)
    .length
}

// The unlocked fractal level
function fractalLevel (accountData) {
  if (!accountData.account) {
    return null
  }

  if (!accountData.account.fractal_level) {
    return null
  }

  return accountData.account.fractal_level
}

// How high the accumulated value of an achievement is
function achievementCurrent (accountData, id, pointsPerRepeat = 0) {
  if (!accountData.achievements) {
    return null
  }

  // Find the achievement
  const achievement = accountData.achievements.find(x => x.id === id)

  // The achievement does not exist, so the user did not start it
  if (!achievement) {
    return 0
  }

  // Sum up the total value of the achievement
  return (achievement.repeated || 0) * pointsPerRepeat + achievement.current
}
