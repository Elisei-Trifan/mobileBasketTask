import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {InputField} from '../components/InputField';
import {ButtonCustom} from '../components/ButtonCustom';

export const SignInScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSignIn}>Sign In</Text>
      <InputField label={'Login'} />
      <InputField label={'Password'} secure />
      <ButtonCustom title={'Sign In'} />
      <Text style={styles.textHelp}>
        Not a member yet? <Text style={styles.textLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignIn: {
    fontSize: 36,
    fontWeight: '400',
    color: '#344472',
    marginBottom: 32,
  },
  textHelp: {
    marginTop: 24,
  },
  textLink: {
    color: '#E4163A',
    textDecorationStyle: 'solid',
    textDecorationColor: '#E4163A',
    textDecorationLine: 'underline',
  },
});
