import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputField} from '../components/InputField';
import {ButtonCustom} from '../components/ButtonCustom';
import {colors} from '../theme/colors';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {goToScreen} from '../utils/goToScreen';
import {screens} from '../navigation/typeScreens';

export const SignInScreen: NavigationFunctionComponent = ({componentId}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSignIn}>Sign In</Text>
      <InputField label={'Login'} />
      <InputField label={'Password'} secure />
      <ButtonCustom title={'Sign In'} />
      <Text style={styles.textHelp}>
        Not a member yet?{' '}
        <Text
          style={styles.textLink}
          onPress={() => goToScreen(componentId, screens.signUp)}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  textSignIn: {
    fontSize: 36,
    fontWeight: '400',
    color: colors.blue,
    marginBottom: 32,
  },
  textHelp: {
    marginTop: 24,
  },
  textLink: {
    color: colors.red,
    textDecorationStyle: 'solid',
    textDecorationColor: colors.red,
    textDecorationLine: 'underline',
  },
});
