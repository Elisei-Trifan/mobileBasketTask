import 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {AuthTabs} from './AuthTabs';
import {MainScreen} from '../screens/MainScreen';
import {Screens} from './typeScreens';

export const registerScreens = () => {
  Navigation.registerComponent(Screens.authTabs, () =>
    gestureHandlerRootHOC(AuthTabs),
  );
  Navigation.registerComponent(Screens.main, () =>
    gestureHandlerRootHOC(MainScreen),
  );
};
