import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {SceneRendererProps, TabBar, TabView} from 'react-native-tab-view';
import {colors} from '../theme/colors';

enum AuthTabsEnum {
  signIn = 'signIn',
  signUp = 'signUp',
}

interface Route {
  key: AuthTabsEnum;
  title: string;
}
type RenderSceneProps = SceneRendererProps & {route: Route};

interface AuthTabsProps {
  componentId: string;
}

export const AuthTabs: React.FC<AuthTabsProps> = ({componentId}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    {key: AuthTabsEnum.signIn, title: 'Вход'},
    {
      key: AuthTabsEnum.signUp,
      title: 'Регистрация',
    },
  ]);

  const renderScene = ({route}: RenderSceneProps) => {
    switch (route.key) {
      case 'signIn':
        return <SignInScreen setIndex={setIndex} componentId={componentId} />;
      case 'signUp':
        return <SignUpScreen setIndex={setIndex} componentId={componentId} />;
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
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={tabStyles.indicator}
          style={tabStyles.tabBar}
          labelStyle={tabStyles.label}
          activeColor={colors.blue}
          inactiveColor={colors.grey}
        />
      )}
    />
  );
};

export const tabStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    elevation: 0,
  },
  indicator: {
    backgroundColor: colors.red,
    height: 1.5,
    borderRadius: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'none',
  },
});
