import {Navigation} from 'react-native-navigation';
import {SignInScreen} from './src/screens/SignInScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';

Navigation.registerComponent('SignIn', () => SignInScreen);
Navigation.registerComponent('SignUp', () => SignUpScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AUTH_STACK',
        children: [
          {
            component: {
              name: 'SignIn',
            },
          },
        ],
      },
    },
  });
});
