import React from 'react';

import {View, Text, TextInputProps, TextInput, StyleSheet} from 'react-native';

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string | null;
  secure?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  secure,
  error,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 20,
    marginLeft: 20,
    height: 92,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    width: 320,
    height: 40,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: 'red',
  },
});
