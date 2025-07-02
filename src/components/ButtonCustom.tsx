import React from 'react';
import {Pressable, StyleSheet, Text, PressableProps} from 'react-native';
import {colors} from '../theme/colors';

interface ButtonCustomProps extends PressableProps {
  title: string;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({title, ...rest}) => {
  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.red,
    width: '100%',
    height: 40,
    marginHorizontal: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 24,
    color: 'white',
  },
});
