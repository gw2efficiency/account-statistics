import GAME_DATA_ITEMS_CATEGORIES_COSMETIC_AURAS from '@gw2efficiency/game-data/items/categories/cosmetic-auras'

let cosmeticAuraItemMap = {}

for (let auraItem of GAME_DATA_ITEMS_CATEGORIES_COSMETIC_AURAS) {
  if (!cosmeticAuraItemMap[auraItem.auraKey]) {
    cosmeticAuraItemMap[auraItem.auraKey] = []
  }

  cosmeticAuraItemMap[auraItem.auraKey].push(auraItem.id)
}

export default cosmeticAuraItemMap
