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
    return amount;
  };

  // Converte o valor em UNIS para LUNES
  convertToLunes = value => {
    const newValue = value.toString();
    return coins.util.unitConverter.toBitcoin(newValue);
  };

  // Converte o valor em LUNES para UNIS
  convertToUnis = value => {
    const newValue = value.toString();
    return coins.util.unitConverter.toSatoshi(newValue);
  };

  // Converte o valor em satoshis para BTC
  convertToBtc = value => {
    const newValue = value.toString();
    return coins.util.unitConverter.toBitcoin(newValue);
  };

  // Converte o valor em BTC para satoshis
  convertToSatoshi = value => {
    const newValue = value.toString();
    return coins.util.unitConverter.toSatoshi(newValue);
  };

  // Converte o valor em Wei para ETH
  convertToEth = value => {
    const newValue = value.toString();
    return coins.util.unitConverter.toEth(newValue);
  };

  // Converte o valor em ETH para Wei
  convertToWei = value => {
    const newValue = value.toString();
    return coins.util.unitConverter.toWei(newValue);
  };
}
