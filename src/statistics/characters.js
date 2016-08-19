export default function (accountData) {
  let playtime = null
  let playtimePerDay = null
  let characterCount = null
  let maxLevelCharacterCount = null
  let deathCount =  null
  let deathCountPerHour =  null
  
  if (accountData.characters) {
    playtime = characters.map(x => x.age).reduce((a, b) => a + b, 0)
    playtimePerDay = daysSinceCreation > 1 ? round(playtime / daysSinceCreation) : null
    
    characterCount = characters.length || null
    maxLevelCharacterCount = characters.filter(x => x.level === 80).length || null
  
    deathCount = characters.map(x => x.deaths).reduce((a, b) => a + b, 0)
    const playtimeInHours = playtime / 60 / 60
    deathCountPerHour = playtimeInHours > 1 ? round(deathCount / playtimeInHours) : null
  }

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
