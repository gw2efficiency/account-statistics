import legendaries from 'gw2e-static-data/build/legendaries'
import fractalSkinIds from '../static/fractalSkinIds'
import immortalSkinIds from '../static/immortalSkinIds'
import abyssalFractalWeapons from '../static/abyssalFractalWeapons'
import aureneLegendaryVariantSkinIds from '../gameData/aureneLegendaryVariants'
import suffusedObsidianArmorSkinIds from '../gameData/suffusedObsidianArmors'
import coloredTitleIds from '../gameData/coloredTitles'

export default function (accountData, extraInformation) {
  return {
    dyeCount: dyeCount(accountData),
    skinCount: skinCount(accountData),
    // armorSkinCount: typeSkinCount(accountData, extraInformation.skins.typeMap.Armor),
    // weaponSkinCount: typeSkinCount(accountData, extraInformation.skins.typeMap.Weapon),
    // backSkinCount: typeSkinCount(accountData, extraInformation.skins.typeMap.Back),
    miniCount: miniCount(accountData),
    mountCount: mountCount(accountData),
    finisherCount: finisherCount(accountData),
    skiffCount: skiffCount(accountData),
    emoteCount: emoteCount(accountData),
    jadebotCount: jadebotCount(accountData),
    noveltyCount: noveltyCount(accountData),
    outfitCount: outfitCount(accountData),
    pvpHeroCount: pvpHeroCount(accountData),
    mailcarrierCount: mailcarrierCount(accountData),
    gliderCount: gliderCount(accountData),
    titleCount: titleCount(accountData),
    recipeCount: recipeCount(accountData),
    legendaryarmoryCount: legendaryarmoryCount(accountData),
    sharedInventorySlots: sharedInventorySlots(accountData),
    legendarySkins: legendarySkins(accountData),
    legendarySkinsWeapon: legendarySkins(accountData, 'weapon'),
    legendarySkinsArmor: legendarySkins(accountData, 'armor'),
    legendarySkinsBack: legendarySkins(accountData, 'back'),
    fractalSkins: fractalSkins(accountData),
    immortalSkins: immortalSkins(accountData),
    wintersPresence: skinExists(accountData, 6577),
    rimeRimmedRebreather: skinExists(accountData, 6891),
    nightfury: skinExists(accountData, 6161),
    _fractalRelicsFromTitles: fractalRelicsFromTitles(accountData),
    _pristineFractalRelicsFromTitles: pristineFractalRelicsFromTitles(accountData),
    _unstableFractalEssenceFromUnlocks: unstableFractalEssenceFromUnlocks(accountData),
    aureneLegendaryVariantSkins: aureneLegendaryVariantSkins(accountData),
    suffusedObsidianArmorSkins: suffusedObsidianArmorSkins(accountData),
    coloredTitleCount: coloredTitleCount(accountData),
    homesteadDecorationCount: homesteadDecorationCount(accountData)
  }
}

// The unlocked dyes on the account
function dyeCount (accountData) {
  if (!accountData.dyes) {
    return null
  }

  return accountData.dyes.length
}

// The unlocked skins on the account
function skinCount (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins.length
}

// function typeSkinCount (accountData, idList) {
//   if (!accountData.skins) {
//     return null
//   }

//   return accountData.skins.filter(x => idList.includes(x)).length
// }

// The unlocked minis on the account
function miniCount (accountData) {
  if (!accountData.minis) {
    return null
  }

  return accountData.minis.length
}

// The unlocked mount skins on the account
function mountCount (accountData) {
  if (!accountData.mounts || !accountData.mounts.skins) {
    return null
  }

  return accountData.mounts.skins.length
}

// The unlocked finishers on the account
function finisherCount (accountData) {
  if (!accountData.finishers) {
    return null
  }

  return accountData.finishers
    .filter(x => x.permanent)
    .length
}

// The unlocked skiffs on the account
function skiffCount (accountData) {
  if (!accountData.skiffs) {
    return null
  }

  return accountData.skiffs.length
}

// The unlocked emotes on the account
function emoteCount (accountData) {
  if (!accountData.emotes) {
    return null
  }

  return accountData.emotes.length
}

// The unlocked jadebots on the account
function jadebotCount (accountData) {
  if (!accountData.jadebots) {
    return null
  }

  return accountData.jadebots.length
}

// The unlocked novelties on the account
function noveltyCount (accountData) {
  if (!accountData.novelties) {
    return null
  }

  return accountData.novelties.length
}

// The unlocked outfits on the account
function outfitCount (accountData) {
  if (!accountData.outfits) {
    return null
  }

  return accountData.outfits.length
}

// The unlocked mailcarriers on the account
function mailcarrierCount (accountData) {
  if (!accountData.mailcarriers) {
    return null
  }

  return accountData.mailcarriers.length
}

// The unlocked gliders on the account
function gliderCount (accountData) {
  if (!accountData.gliders) {
    return null
  }

  return accountData.gliders.length
}

// The unlocked pvp heroes on the account
function pvpHeroCount (accountData) {
  if (!accountData.pvp || !accountData.pvp.heroes) {
    return null
  }

  return accountData.pvp.heroes.length
}

// The unlocked titles on the account
function titleCount (accountData) {
  if (!accountData.titles) {
    return null
  }

  return accountData.titles.length
}

function coloredTitleCount (accountData) {
  if (!accountData.titles) {
    return null
  }

  const titleCount = coloredTitleIds.filter(x => accountData.titles.includes(x)).length

  return titleCount
}

// The unlocked recipes on the account
function recipeCount (accountData) {
  if (!accountData.recipes) {
    return null
  }

  return accountData.recipes.length
}

// The unlocked legendaries on the account
function legendaryarmoryCount (accountData) {
  if (!accountData.legendaryarmory) {
    return null
  }

  return accountData.legendaryarmory.reduce((sum, elem) => sum + elem.count, 0)
}

// The number of unlocked shared inventory slots on the account
function sharedInventorySlots (accountData) {
  if (!accountData.shared) {
    return null
  }

  return accountData.shared.length
}

// The legendary skins unlocked on the account
function legendarySkins (accountData, type) {
  if (!accountData.skins) {
    return null
  }

  const filteredLegendaries = type
    ? legendaries.filter(x => x.type === type)
    : legendaries

  const legendarySkinIds = filteredLegendaries.map(x => x.skin)

  return accountData.skins
    .filter(x => legendarySkinIds.indexOf(x) !== -1)
    .length
}

// The fractal skins unlocked on the account
function fractalSkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => fractalSkinIds.indexOf(x) !== -1)
    .length
}

// The immortal weapon skins unlocked on the account
function immortalSkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => immortalSkinIds.indexOf(x) !== -1)
    .length
}

// The aurene legendary variant skins unlocked on the account
function aureneLegendaryVariantSkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => aureneLegendaryVariantSkinIds.indexOf(x) !== -1)
    .length
}

// The suffused obsidian armor skins unlocked on the account ignoring slumbering versions
function suffusedObsidianArmorSkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => suffusedObsidianArmorSkinIds.indexOf(x) !== -1)
    .length
}

// Check if a skin exists on the account
function skinExists (accountData, id) {
  if (!accountData.skins) {
    return null
  }

  let unlocked = accountData.skins
    .filter(x => x === id)
    .length

  return unlocked > 0 ? 1 : 0
}

// The unlocked titles bought with fractal relics
function fractalRelicsFromTitles (accountData) {
  if (!accountData.titles) {
    return null
  }

  const titleValueMap = {
    299: 25000, // Fractal Savant
    297: 35000, // Fractal Prodigy
    296: 45000, // Fractal Champion
    298: 55000 // Fractal God
  }

  return Object.keys(titleValueMap)
    .map(id => parseInt(id, 10))
    .filter(id => accountData.titles.includes(id))
    .reduce((sum, id) => sum + titleValueMap[id], 0)
}

// The unlocked titles bought with pristine fractal relics
function pristineFractalRelicsFromTitles (accountData) {
  if (!accountData.titles) {
    return null
  }

  const titleValueMap = {
    299: 0, // Fractal Savant
    297: 1200, // Fractal Prodigy
    296: 0, // Fractal Champion
    298: 2000 // Fractal God
  }

  return Object.keys(titleValueMap)
    .map(id => parseInt(id, 10))
    .filter(id => accountData.titles.includes(id))
    .reduce((sum, id) => sum + titleValueMap[id], 0)
}

// The unlocks bought with unstable fractal essence
function unstableFractalEssenceFromUnlocks (accountData) {
  if (!accountData.skins || !accountData.novelties) {
    return null
  }

  let sum = 0

  // Abyssal Skins
  const abyssalSkinIds = abyssalFractalWeapons.map(x => x.skinId)
  const abyssalSkins = accountData.skins.filter(x => abyssalSkinIds.indexOf(x) !== -1).length
  sum += abyssalSkins * 480

  // Tonics
  if (accountData.novelties.includes(141)) {
    sum += 450 // Endless Chaos Combat Tonic
  }

  if (accountData.novelties.includes(307)) {
    sum += 1680 // Endless Inner Demon Combat Tonic
  }

  return sum
}

// The amount of homestead decorations on the account
function homesteadDecorationCount (accountData) {
  if (!accountData.homestead || !accountData.homestead.decorations) {
    return null
  }

  return accountData.homestead.decorations.reduce((sum, decoration) => sum + decoration.count, 0)
}
