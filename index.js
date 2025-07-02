import {Navigation} from 'react-native-navigation';
import {SignInScreen} from './src/screens/SignInScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';

Navigation.registerComponent('signIn', () => SignInScreen);
Navigation.registerComponent('signUp', () => SignUpScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AUTH_STACK',
        children: [
          {
            component: {
              name: 'signIn',
            },
          },
        ],
      },
    },
  });
});
