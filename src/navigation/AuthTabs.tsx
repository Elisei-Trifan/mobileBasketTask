import React from 'react';
import {useWindowDimensions} from 'react-native';
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {SceneRendererProps, TabView} from 'react-native-tab-view';

export const AuthTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    {key: 'signIn', title: 'Вход'},
    {
      key: 'signUp',
      title: 'Регистрация',
    },
  ]);

  interface Route {
    key: 'signIn' | 'signUp';
    title: string;
  }

  type RenderSceneProps = SceneRendererProps & {route: Route};

  const renderScene = ({route}: RenderSceneProps) => {
    switch (route.key) {
      case 'signIn':
        return <SignInScreen setIndex={setIndex} />;
      case 'signUp':
        return <SignUpScreen setIndex={setIndex} />;
      default:
        return null;
    }
  };

  return (
    <TabView
      renderScene={renderScene}
      initialLayout={{width: layout.width}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
    />
  );
};
