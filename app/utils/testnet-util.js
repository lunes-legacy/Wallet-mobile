import { networks } from 'lunes-lib';
import GeneralConstants from '../constants/general';

function isTestNet() {
  return GeneralConstants.TESTNET;
}

function networkTestNet(coin) {
  if (isTestNet()) {
    switch (coin.toLowerCase()) {
      case 'lns':
        return networks.LNSTESTNET;
      case 'btc':
        return networks.BTCTESTNET;
      default:
        return false;
    }
  } else {
    switch (coin.toLowerCase()) {
      case 'lns':
        return networks.LNS;
      case 'btc':
        return networks.BTC;
      default:
        return networks.BTC;
    }
  }
}

export { isTestNet, networkTestNet };
