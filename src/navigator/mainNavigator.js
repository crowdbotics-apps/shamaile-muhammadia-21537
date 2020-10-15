import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps143711Navigator from '../features/Maps143711/navigator';
import UserProfile143707Navigator from '../features/UserProfile143707/navigator';
import BlankScreen78143684Navigator from '../features/BlankScreen78143684/navigator';
import UserProfile143615Navigator from '../features/UserProfile143615/navigator';
import Tutorial143614Navigator from '../features/Tutorial143614/navigator';
import NotificationList143586Navigator from '../features/NotificationList143586/navigator';
import Settings143585Navigator from '../features/Settings143585/navigator';
import Settings143577Navigator from '../features/Settings143577/navigator';
import UserProfile143575Navigator from '../features/UserProfile143575/navigator';
import Settings143539Navigator from '../features/Settings143539/navigator';
import Settings143501Navigator from '../features/Settings143501/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps143711: { screen: Maps143711Navigator },
UserProfile143707: { screen: UserProfile143707Navigator },
BlankScreen78143684: { screen: BlankScreen78143684Navigator },
UserProfile143615: { screen: UserProfile143615Navigator },
Tutorial143614: { screen: Tutorial143614Navigator },
NotificationList143586: { screen: NotificationList143586Navigator },
Settings143585: { screen: Settings143585Navigator },
Settings143577: { screen: Settings143577Navigator },
UserProfile143575: { screen: UserProfile143575Navigator },
Settings143539: { screen: Settings143539Navigator },
Settings143501: { screen: Settings143501Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
