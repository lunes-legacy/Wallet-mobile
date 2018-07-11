function getBalance(currentCoinSelected, balanceData) {
  if (balanceData && balanceData[currentCoinSelected]) {
    return balanceData[currentCoinSelected].confirmed;
  }
  return 0;
}

function getIconCoin(currentCoinSelected) {
  switch (currentCoinSelected) {
    case 'BTC':
      return 'https://res.cloudinary.com/luneswallet/image/upload/v1524831130/BitcoinCash-Symbol_afatgu.png';
    case 'LNS':
      return 'http://res.cloudinary.com/luneswallet/image/upload/v1519442468/icon-lunes_qhumiw.png';
    default:
      return 'http://res.cloudinary.com/luneswallet/image/upload/v1519442468/icon-lunes_qhumiw.png';
  }
}

export { getBalance, getIconCoin };
