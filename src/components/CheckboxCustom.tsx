import React, {useState} from 'react';
import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

interface CheckboxCustomProps extends PressableProps {
  text?: string;
}

export const CheckboxCustom: React.FC<CheckboxCustomProps> = ({text}) => {
  const [checked, setChecked] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <Pressable style={styles.container} onPress={() => setChecked(!checked)}>
      <View
        style={[
          styles.checkbox,
          checked && styles.checked,
          isError && styles.isError,
        ]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 2,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: colors.red,
    borderColor: colors.red,
  },
  isError: {
    borderColor: colors.red,
  },
  checkmark: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '800',
  },
  label: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '500',
    color: colors.grey,
  },
});
