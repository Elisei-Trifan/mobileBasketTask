import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/navigation/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AUTH_STACK',
        children: [
          {
            component: {
              name: 'AuthTabs',
            },
          },
        ],
      },
    },
  });
});
