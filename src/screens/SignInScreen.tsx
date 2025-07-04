import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputField} from '../components/InputField';
import {ButtonCustom} from '../components/ButtonCustom';
import {colors} from '../theme/colors';
interface SignInScreenProps {
  setIndex: (index: number) => void;
}

export const SignInScreen: React.FC<SignInScreenProps> = ({setIndex}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSignIn}>Sign In</Text>
      <InputField label={'Login'} />
      <InputField label={'Password'} secure />
      <ButtonCustom title={'Sign In'} />
      <Text style={styles.textHelp}>
        Not a member yet?{' '}
        <Text style={styles.textLink} onPress={() => setIndex(1)}>
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
