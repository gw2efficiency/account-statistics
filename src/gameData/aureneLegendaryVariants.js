import GAME_DATA_SKINS_CATEGORIES_AURENE_LEGENDARY_VARIANTS from '@gw2efficiency/game-data/skins/categories/aurene-legendary-variants'

let aureneLegendaryVariantSkinMap = []

for (let variantSkin of GAME_DATA_SKINS_CATEGORIES_AURENE_LEGENDARY_VARIANTS) {
  aureneLegendaryVariantSkinMap.push(variantSkin.id)
}

export default aureneLegendaryVariantSkinMap
