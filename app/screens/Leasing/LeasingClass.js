import { coins, services } from 'lunes-lib';
import { MoneyClass } from '../../utils/moneyConvert';
import generalConstant from '../../constants/general';

export default class LeasingClass {
  getLeasingValues = async data => {
    const lunesAddress = data.address;
    const money = new MoneyClass();

    try {
      // isso nao funciona no mobile, verrificar ....
      //   const lunesValue = await coins.services.balance(
      //     'LNS',
      //     lunesAddress,
      //     generalConstant.TESTNET
      //   );

      //
      const lunesValue = {
        data: {
          confirmed: data.balance,
        },
      };

      const leaseValue = await coins.services.leaseBalance({
        address: lunesAddress,
        testnet: generalConstant.TESTNET,
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

  // startLease = async (data) => {
  //   try {
  //     const money = new MoneyClass();

  //     const walletInfo = JSON.parse(decrypt(localStorage.getItem('WALLET-INFO')));

  //     const { toAddress, amount, fee, testnet } = data;

  //     const leaseData = {
  //       toAddress,
  //       fee,
  //       testnet,
  //       amount: await money.convertToSatoshi(amount),
  //       mnemonic: walletInfo.seed
  //     }

  //     let lease = await coins.services.lease(leaseData);

  //     return lease;
  //   } catch (err) {
  //     return errorPattern(`Error on trying to start lease`, 500, "STARTLEASE_ERROR", err);
  //   }
  // }

  // cancelLease = async (data) => {
  //     let wallet_info = JSON.parse(decrypt(data.wallet_info));

  //     const cancelLeasingData = {
  //         mnemonic: wallet_info.seed,
  //         txID: data.key,
  //         fee: "100000",
  //         testnet: TESTNET //TESTNET
  //     };

  //     const cancelLeaseResult = await coins.services.leaseCancel(cancelLeasingData).then((e)=>{
  //         return e
  //     }).catch((e)=>{
  //         //console.log(e);
  //         return false
  //     });

  //     return cancelLeaseResult;
  // }
}
