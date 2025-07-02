import {Navigation} from 'react-native-navigation';
import {ScreenName} from '../types/ScreenName';

export const goToScreen = (componentId: string, screen: ScreenName) => {
  Navigation.push(componentId, {
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
