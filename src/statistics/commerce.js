export default function (accountData) {
  if (!accountData.commerce) {
    return {buyOrderCount: null, sellOrderCount: null}
  }

  const buys = accountData.commerce.buys
  const sells = accountData.commerce.sells

  return {
    buyOrderCount: buys ? buys.length : null,
    sellOrderCount: sells ? sells.length : null
  }
}
