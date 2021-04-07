import legendaries from 'gw2e-static-data/build/legendaries'
import fractalSkinIds from '../static/fractalSkinIds'
import immortalSkinIds from '../static/immortalSkinIds'
import abyssalFractalWeapons from '../static/abyssalFractalWeapons'

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
    noveltyCount: noveltyCount(accountData),
    outfitCount: outfitCount(accountData),
    pvpHeroCount: pvpHeroCount(accountData),
    mailcarrierCount: mailcarrierCount(accountData),
    gliderCount: gliderCount(accountData),
    titleCount: titleCount(accountData),
    recipeCount: recipeCount(accountData),
    sharedInventorySlots: sharedInventorySlots(accountData),
    legendarySkins: legendarySkins(accountData),
    legendarySkinsWeapon: legendarySkins(accountData, 'weapon'),
    legendarySkinsArmor: legendarySkins(accountData, 'armor'),
    legendarySkinsBack: legendarySkins(accountData, 'back'),
    fractalSkins: fractalSkins(accountData),
    immortalSkins: immortalSkins(accountData),
    wintersPresence: skinExists(accountData, 6577),
    nightfury: skinExists(accountData, 6161),
    _fractalRelicsFromTitles: fractalRelicsFromTitles(accountData),
    _pristineFractalRelicsFromTitles: pristineFractalRelicsFromTitles(accountData),
    _unstableFractalEssenceFromUnlocks: unstableFractalEssenceFromUnlocks(accountData)
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

// The unlocked recipes on the account
function recipeCount (accountData) {
  if (!accountData.recipes) {
    return null
  }

  return accountData.recipes.length
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

// The immportal weapon skins unlocked on the account
function immortalSkins (accountData) {
  if (!accountData.skins) {
    return null
  }

  return accountData.skins
    .filter(x => immortalSkinIds.indexOf(x) !== -1)
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
