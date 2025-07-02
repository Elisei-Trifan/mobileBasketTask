import {Navigation} from 'react-native-navigation';
import {SignInScreen} from './src/screens/SignInScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';
import {Screens} from './src/navigation/typeScreens';

Navigation.registerComponent(Screens.signIn, () => SignInScreen);
Navigation.registerComponent(Screens.signUp, () => SignUpScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AUTH_STACK',
        children: [
          {
            component: {
              name: Screens.signIn,
            },
          },
        ],
      },
    },
  });
});
