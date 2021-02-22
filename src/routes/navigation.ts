import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SidebarDrawer from './drawer/sidebarDrawer';

//screens
import mapScreen from '../screens/mapScreen';
import selectCab from '../screens/selectCab';
import loginScreen from '../screens/loginScreen';
import walletScreen from '../screens/walletScreen';
import profileScreen from '../screens/profileScreen';
import bookingListScreen from '../screens/bookingListScreen';
import locationPicker from '../screens/locationPickerScreen';
import transactionScreen from '../screens/transactionScreen';
import locationErrorScreen from '../screens/locationErrorScreen';


const tabNavigator = createDrawerNavigator({
    Map: mapScreen,
}, {
    drawerType: 'back',
    contentComponent: SidebarDrawer,
});

const rootNavigator = createStackNavigator({
    Home: tabNavigator,
    login: loginScreen,
    selectCab: selectCab,
    wallet: walletScreen,
    Profile: profileScreen,
    locationPicker: locationPicker,
    bookingLists: bookingListScreen,
    transactions: transactionScreen,
    locationError: locationErrorScreen,
},
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

const Navigation = createAppContainer(rootNavigator);

export default Navigation;