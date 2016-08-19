# account-statistics

[![Build Status](https://img.shields.io/travis/gw2efficiency/account-statistics.svg?style=flat-square)](https://travis-ci.org/gw2efficiency/account-statistics)
[![Coverage Status](https://img.shields.io/codecov/c/github/gw2efficiency/account-statistics/master.svg?style=flat-square)](https://codecov.io/github/gw2efficiency/account-statistics)

> Calculate statistics of guildwars2 accounts

*This is part of [gw2efficiency](https://gw2efficiency.com). Please report all issues in [the central repository](https://github.com/gw2efficiency/issues/issues).*

## Install

```
npm install gw2e-account-statistics
```

This module can be used for Node.js as well as browsers using [Browserify](https://github.com/substack/browserify-handbook#how-node_modules-works).

## Usage

### Calculate the statistics

```js
import accountStatistics from 'gw2e-account-statistics'

// An object containing all the account data available for the API key
const accountData = {
  characters: /* ... */,
  bank: /* ... */,
  materials: /* ... */,
  commerce: {
    buys: /* ... */,
    sells: /* ... */
  },
  skins: /* ... */,
  wallet: /* ... */,
  dyes: /* ... */,
  minis: /* ... */,

  outfits: /* ... */,
  recipes: /* ... */,
  guilds: /* ... */,
  inventory: /* ... */,

  titles: /* ... */,
  achievements: /* ... */,
  pvp: /* ... */
}

// Calculate everything!
accountStatistics(accountData)
// -> Object with all statistics calculated
```

### Calculate a part of the account statistics

You can import the partial calculations on their own and work with them.

```js
import unlocks from 'gw2e-account-statistics/build/statistics/unlocks'

unlocks(accountData)
// -> Only the "unlocks" statistics
```

## Tests

```
npm test
```

## Licence

MIT
