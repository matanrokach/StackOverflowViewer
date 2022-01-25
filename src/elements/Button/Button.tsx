import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity as RNTouchableOpacity, TextInputProps, TouchableOpacityProps, View } from 'react-native';

export const Button = (props: TouchableOpacityProps) => {
	const { colors } = useTheme();

	return (
		<RNTouchableOpacity
			{...{
				...props,
				style: {
					...styles.button,
					...props.style as object,
					borderColor: colors.border,
					backgroundColor: colors.background,
				}
			}}
		/>
	);
}

const styles = StyleSheet.create({
	button: {
		borderColor: 'red',
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 6,
	},
})