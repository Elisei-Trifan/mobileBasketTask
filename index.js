import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/navigation/registerScreens';
import {Screens} from './src/navigation/typeScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AUTH_STACK',
        children: [
          {
            component: {
              name: Screens.authTabs,
            },
          },
        ],
      },
    },
  });
});
