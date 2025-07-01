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

const App = () => {
  return (
    // <Text>
    <SignInScreen />
    // </Text>
  );
};

const styles = StyleSheet.create({});

export default App;
