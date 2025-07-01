/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {SignInScreen} from './src/screens/SignInScreen';
import {SignUpScreen} from './src/screens/SignUpScreen';

const App = () => {
  return (
    // <SignInScreen />
    <SignUpScreen />
  );
};

const styles = StyleSheet.create({});

export default App;
