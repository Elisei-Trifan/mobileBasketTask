import 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {AuthTabs} from './AuthTabs';

export const registerScreens = () => {
  Navigation.registerComponent('AuthTabs', () =>
    gestureHandlerRootHOC(AuthTabs),
  );
};
