import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Главный экран</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.blue,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
