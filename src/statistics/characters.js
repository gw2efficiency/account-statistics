export default function (accountData) {
  if (!accountData.characters) {
    return {
      characterCount: null,
      maxLevelCharacterCount: null,
      deathCount: null
    }
  }

  const characters = accountData.characters

  const characterCount = characters.length
  const maxLevelCharacterCount = characters.filter(x => x.level === 80).length
  const deathCount = characters.map(x => x.deaths).reduce((a, b) => a + b, 0)

  return {
    characterCount,
    maxLevelCharacterCount,
    deathCount
  }
}
