import { DrawerNavigator } from 'react-navigation';
import SideMenu from './SideMenu';
import LunesMarket from '../../screen/LunesMarket';
import ValuesAlertSystem from '../../screen/ValuesAlertSystem';
import MultiCoinsSystem from '../../screen/MultiCoinsSystem';
import CardManager from '../../screen/CardManager';
import BoletoPayments from '../../screen/BoletoPayments';
import PhoneRecharges from '../../screen/PhoneRecharges';

export default DrawerNavigator(
  {
    LunesMarket: { screen: LunesMarket },
    ValuesAlertSystem: { screen: ValuesAlertSystem },
    MultiCoinsSystem: { screen: MultiCoinsSystem },
    CardManager: { screen: CardManager },
    BoletoPayments: { screen: BoletoPayments },
    PhoneRecharges: { screen: PhoneRecharges },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
  }
);
