import {Navigation} from 'react-native-navigation';
import {Screens} from '../navigation/typeScreens';

export const goToScreen = (componentId: string, screen: Screens) => {
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
