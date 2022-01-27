import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../elements';
import {useAppTheme} from '../../hooks/useAppTheme';

interface Props {
  error: string;
}

export const ErrorText = ({error = ''}: Props) => {
  const {colors} = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={{...styles.text, color: colors.error}}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    height: 24,
  },
  text: {},
});
