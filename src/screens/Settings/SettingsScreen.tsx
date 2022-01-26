import React from 'react';
import {StyleSheet, Switch, SwitchChangeEvent, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectIsDarkMode,
  setDarkMode,
} from '../../features/settings/settingsSlice';
import {Text} from '../../elements';

export const SettingsScreen = ({}) => {
  const {colors} = useTheme();

  const dispatch = useDispatch();

  const isDarkMode = useSelector(selectIsDarkMode);

  const onChangeDarkMode = (e: SwitchChangeEvent) => {
    dispatch(setDarkMode(!isDarkMode));
  };

  const backgroundStyle = {
    backgroundColor: colors.background,
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <View style={styles.row}>
        <Text>{'Dark Mode'}</Text>
        <Switch {...{value: !!isDarkMode, onChange: onChangeDarkMode}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
