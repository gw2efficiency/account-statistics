export default function (accountData) {
  if (!accountData.characters) {
    return {
      characterCount: null,
      maxLevelCharacterCount: null,
      deathCount: null,
      mostPlayedCharacterPlaytime: null
    }
  }

  const characters = accountData.characters

  const characterCount = characters.length
  const maxLevelCharacterCount = characters.filter(x => x.level === 80).length
  const deathCount = characters.map(x => x.deaths).reduce((a, b) => a + b, 0)
  const mostPlayedCharacterPlaytime = accountData.characters.map(character => character.age).reduce((a, b) => Math.max(a, b), 0)

  return {
    characterCount,
    maxLevelCharacterCount,
    deathCount,
    mostPlayedCharacterPlaytime
  }
}
