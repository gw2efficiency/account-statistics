export default function (accountData) {
  return {
    achievementCount: achievementCount(accountData),
    fractalLevel: fractalLevel(accountData),
    salvagedItems: salvagedItems(accountData),
    ...wvwAchievements(accountData)
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

// How many times the user salvaged an item
function salvagedItems (accountData) {
  if (!accountData.achievements) {
    return null
  }

  // Find the "Agent of Entropy" achievement
  const achievement = accountData.achievements.find(x => x.id === 129)

  if (!achievement) {
    return 0
  }

  return (achievement.repeated || 0) * 200 + achievement.current
}

// How many people the player killed in wvw, how many supply he spent, ...
function wvwAchievements (accountData) {
  const achievements = {
    wvwPlayerKills: 283,
    wvwSupplyCaravansKilled: 288,
    wvwSupplyCaravansEscorted: 285,
    wvwSupplySpentOnRepairs: 306,
    wvwCapturedObjectives: 303,
    wvwCapturedSupplyCamps: 291,
    wvwCapturedTowers: 297,
    wvwCapturedKeeps: 300,
    wvwCapturedCastles: 294,
    wvwDefendedObjectives: 319,
    wvwDefendedSupplyCamps: 310,
    wvwDefendedTowers: 322,
    wvwDefendedKeeps: 316,
    wvwDefendedCastles: 313
  }

  // The achievement data is missing, return nulls for everything!
  if (!accountData.achievements) {
    return Object.keys(achievements).reduce((obj, key) => {
      obj[key] = null
      return obj
    }, {})
  }

  // Go through all the achievements and give them the same treatment
  let result = {}
  Object.keys(achievements).map(key => {
    let id = achievements[key]
    let achievement = accountData.achievements.find(x => x.id === id)

    result[key] = achievement ? achievement.current : 0
  })

  return result
}
