import {Navigation} from 'react-native-navigation';
import {ScreenName} from '../navigation/typeScreens';

export const goToScreen = (componentId: string, screen: ScreenName) => {
  Navigation.setStackRoot(componentId, {
    component: {
      name: screen,
      options: {
        topBar: {
          backButton: {
            visible: false,
          },
        },
      },
    },
  });
};
