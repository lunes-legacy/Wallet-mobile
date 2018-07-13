import { coins } from 'lunes-lib';

export class MoneyClass {
  conevertCoin = (to, amount) => {
    if (to === 'btc' || to === 'lns' || to === 'lunes') {
      return this.convertToBtc(amount);
    } else if (to === 'satoshi') {
      return this.convertToSatoshi(amount);
    } else if (to === 'eth') {
      return this.convertToEth(amount);
    } else if (to === 'wei') {
      return this.convertToWei(amount);
    }
  }

  // Converte o valor em UNIS para LUNES
  convertToLunes = value => {
    value = value.toString();
    return coins.util.unitConverter.toBitcoin(value);
  };

  // Converte o valor em LUNES para UNIS
  convertToUnis = value => {
    value = value.toString();
    return coins.util.unitConverter.toSatoshi(value);
  };

  // Converte o valor em satoshis para BTC
  convertToBtc = value => {
    value = value.toString();
    return coins.util.unitConverter.toBitcoin(value);
  };

  // Converte o valor em BTC para satoshis
  convertToSatoshi = value => {
    value = value.toString();
    return coins.util.unitConverter.toSatoshi(value);
  };

  // Converte o valor em Wei para ETH
  convertToEth = value => {
    value = value.toString();
    return coins.util.unitConverter.toEth(value);
  };

  // Converte o valor em ETH para Wei
  convertToWei = value => {
    value = value.toString();
    return coins.util.unitConverter.toWei(value);
  };
}
