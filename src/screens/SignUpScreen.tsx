import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputField} from '../components/InputField';
import {ButtonCustom} from '../components/ButtonCustom';
import {CheckboxCustom} from '../components/CheckboxCustom';
import {colors} from '../theme/colors';

export const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSignIn}>Sign Up</Text>
      <InputField label={'Name'} />
      <InputField label={'Login'} />
      <InputField label={'Password'} secure />
      <InputField label={'Enter your password again'} secure />
      <CheckboxCustom text={'I accept the agreement'} />
      <ButtonCustom title={'Sign Up'} />
      <Text style={styles.textHelp}>
        Already a member? <Text style={styles.textLink}>Sign In</Text>
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
