import { coins, services } from 'lunes-lib';
import { MoneyClass } from '../../utils/moneyConvert';
import generalConstant from '../../constants/general';
import * as StoreSeed from '../../utils/store-seed';
import { isTestNet, networkTestNet } from '../../utils/testnet-util';
import {
  prepareObjectWallet,
  getAddressAndBalance,
} from '../../utils/balance-utils';

export default class LeasingClass {
  getLeasingValues = async data => {
    const lunesAddress = data.address;
    const money = new MoneyClass();

    try {
      /* Se necessario trazer o balanço, essa funcao está ok

      const balanceLNS = await services.wallet.lns.balance(
        lunesAddress,
        networkTestNet('lns')
      ).catch(error => {
        throw error;
      }); */

      const lunesValue = {
        data: {
          confirmed: data.balance,
        },
      };

      const leaseValue = await coins.services
        .leaseBalance({
          address: lunesAddress,
          testnet: generalConstant.TESTNET,
        })
        .catch(error => {
          throw error;
        });

      // const availableBalance = lunesValue.data.confirmed - leaseValue.data.leaseBalance;

      const totalBalance =
        lunesValue.data.confirmed + leaseValue.data.leaseBalance;

      return {
        totalBalance: await money.convertToBtc(totalBalance),
        leaseBalance: await money.convertToBtc(leaseValue.data.leaseBalance),
        availableBalance: await money.convertToBtc(lunesValue.data.confirmed),
      };
    } catch (err) {
      console.log(`ERRO: ${err}`);
      return {
        totalBalance: 0,
        leaseBalance: 0,
        availableBalance: 0,
      };
    }
  };

  getLeaseHistory = async data => {
    const lunesAddress = data.address;

    const consultLeasing = await coins.services
      .leaseHistory({
        address: lunesAddress,
        network: 'LNS',
        testnet: generalConstant.TESTNET,
      })
      .then(e => {
        if (e.length > 0) {
          return e;
        }
        return false;
      })
      .catch(e => {
        return false;
      });
    return consultLeasing;
  };

  startLease = async data => {
    try {
      const money = new MoneyClass();

      const walletInfo = { seed: await StoreSeed.retrieveSeed() };

      const { toAddress, amount, fee, testnet } = data;

      const leaseData = {
        toAddress,
        fee: coins.util.unitConverter.toSatoshi(fee),
        testnet,
        amount: await money.convertToSatoshi(amount),
        mnemonic: walletInfo.seed,
      };

      const lease = await coins.services.lease(leaseData).catch(error => {
        throw error;
      });

      return lease;
    } catch (err) {
      throw err;
    }
  };

  cancelLease = async data => {
    const wallet_info = { seed: await StoreSeed.retrieveSeed() };

    const cancelLeasingData = {
      mnemonic: wallet_info.seed,
      txID: data.key,
      fee: coins.util.unitConverter.toSatoshi(0.001),
      testnet: isTestNet(),
    };

    const cancelLeaseResult = await coins.services
      .leaseCancel(cancelLeasingData)
      .then(e => {
        return e;
      })
      .catch(e => {
        // console.log(e);
        return false;
      });

    return cancelLeaseResult;
  };
}
