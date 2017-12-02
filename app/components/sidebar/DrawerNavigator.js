import { DrawerNavigator } from 'react-navigation';
import SideMenu from './SideMenu'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export default DrawerNavigator(
  {
    Page1: {
      screen: Page1,
    },
    Page2: {
      screen: Page2,
    },
    Page3: {
      screen: Page3,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
  }
);
