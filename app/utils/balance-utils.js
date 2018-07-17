import { services } from 'lunes-lib';
import { AsyncStorage } from 'react-native';
import { networkTestNet } from './testnet-util';

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

async function prepareObjectWallet(seed, currentUser) {
  try {
    const addressBTC = await services.wallet.btc.wallet
      .newAddress(seed, networkTestNet('btc'))
      .catch(error => {
        return error;
      });

    const addressLNS = await services.wallet.lns.wallet
      .newAddress(seed, networkTestNet('lns'))
      .catch(error => {
        return error;
      });

    AsyncStorage.setItem('addressLunesUser', JSON.stringify(addressLNS));
    AsyncStorage.setItem('addressBitcoinUser', JSON.stringify(addressBTC));

    if (!currentUser.wallet) {
      currentUser.wallet = {};
    }

    if (!currentUser.wallet.coin) {
      currentUser.wallet.coin = {};
    }

    if (!currentUser.wallet.coin.LNS) {
      currentUser.wallet.coin.LNS = {
        address: addressLNS,
      };
    }

    if (!currentUser.wallet.coin.BTC) {
      currentUser.wallet.coin.BTC = {
        address: addressBTC,
      };
    }

    return currentUser.wallet;
  } catch (error) {
    throw error;
  }
}

async function getAddressAndBalance(walletCoins) {
  try {
    const balanceLNS = await services.wallet.lns.balance(
      walletCoins.LNS.address,
      networkTestNet('lns')
    );

    const balanceBTC = await services.wallet.btc.balance(
      walletCoins.BTC.address,
      networkTestNet('btc')
    );

    return {
      BTC: balanceBTC.data,
      LNS: balanceLNS.data,
    };
  } catch (error) {
    throw error;
  }
}


export { getBalance, getIconCoin, prepareObjectWallet, getAddressAndBalance };
