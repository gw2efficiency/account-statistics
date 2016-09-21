export default function (accountData) {
  return {
    achievementCount: achievementCount(accountData),
    fractalLevel: fractalLevel(accountData),
    salvagedItems: salvagedItems(accountData),
    wvwPlayerKills: wvwPlayerKills(accountData)
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

// How many people the player killed in wvw
function wvwPlayerKills (accountData) {
  if (!accountData.achievements) {
    return null
  }

  // Find the "Realm Avenger" achievement
  const achievement = accountData.achievements.find(x => x.id === 283)

  if (!achievement) {
    return 0
  }

  return achievement.current
}
