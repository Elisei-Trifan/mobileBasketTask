import React, {useState} from 'react';
import {
  View,
  Text,
  TextInputProps,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import Eye from '../assets/icons/eye.svg';
import CloseEye from '../assets/icons/close_eye.svg';
import {colors} from '../theme/colors';

interface InputFieldProps extends TextInputProps {
  label?: string;
  secure?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  secure,
  ...rest
}) => {
  const [hide, setHide] = useState(secure);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} secureTextEntry={hide} {...rest} />

        {secure && (
          <Pressable
            style={styles.eyeBtn}
            onPress={() => setHide(prev => !prev)}
            hitSlop={10}>
            {hide ? <CloseEye /> : <Eye />}
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 92,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: colors.grey,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightestGrey,
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    height: 40,
  },
  inputError: {
    borderColor: colors.red,
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: colors.red,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeBtn: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
});
