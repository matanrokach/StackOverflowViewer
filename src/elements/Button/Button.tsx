import React from 'react';
import { StyleSheet, TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';

export const Button = (props: TouchableOpacityProps) => {
	const { colors } = useAppTheme();

	return (
		<RNTouchableOpacity
			{...{
				...props,
				style: {
					...styles.button,
					...props.style as object,
					borderColor: colors.border,
					backgroundColor: colors.background,
					...props.disabled && { borderColor: colors.disabled },
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