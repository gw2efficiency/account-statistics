import GAME_DATA_ITEMS_CATEGORIES_COSMETIC_AURAS from '@gw2efficiency/game-data/items/categories/cosmetic-auras'

let cosmeticAuraItemMap = {}

for (let auraItem of GAME_DATA_ITEMS_CATEGORIES_COSMETIC_AURAS) {
  if (!cosmeticAuraItemMap[auraItem.aura_key]) {
    cosmeticAuraItemMap[auraItem.aura_key] = []
  }

  cosmeticAuraItemMap[auraItem.aura_key].push(auraItem.id)
}

export default cosmeticAuraItemMap
