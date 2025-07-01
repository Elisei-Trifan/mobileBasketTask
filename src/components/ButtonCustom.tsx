import React from 'react';
import {
  Button,
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface ButtonCustomProps extends ButtonProps {
  title: string;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E4163A',
    width: 320,
    height: 40,
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
