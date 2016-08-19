export default function (accountData) {
  if (!accountData.characters) {
    return {
      playtime: null,
      playtimePerDay: null,
      characterCount: null,
      maxLevelCharacterCount: null,
      deathCount: null,
      deathCountPerHour: null
    }
  }

  const characters = accountData.characters
  const daysSinceCreation = getDaysSinceCreation(characters)

  const characterCount = characters.length
  const maxLevelCharacterCount = characters.filter(x => x.level === 80).length

  const playtime = characters.map(x => x.age).reduce((a, b) => a + b, 0)
  const playtimePerDay = daysSinceCreation > 1 ? round(playtime / daysSinceCreation) : null

  const deathCount = characters.map(x => x.deaths).reduce((a, b) => a + b, 0)
  const playtimeInHours = playtime / 60 / 60
  const deathCountPerHour = playtimeInHours > 1 ? round(deathCount / playtimeInHours) : null

  return {
    playtime,
    playtimePerDay,
    characterCount,
    maxLevelCharacterCount,
    deathCount,
    deathCountPerHour
  }
}

// Round a floating point number to 2 decimals
function round (float) {
  return Math.round(float * 100) / 100
}

// Get the account age in days based on the oldest character
function getDaysSinceCreation (characters) {
  const msPerDay = 1000 * 60 * 60 * 24
  const characterAges = characters.map(x => (new Date(x.created)).getTime())
  const oldestCharacter = Math.min.apply(null, characterAges)
  const difference = (new Date()).getTime() - oldestCharacter
  return Math.ceil(difference / msPerDay)
}
