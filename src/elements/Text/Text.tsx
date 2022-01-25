import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text as RNText, TextProps } from 'react-native';

export const Text = (props: TextProps) => {
	const { colors } = useTheme();

	return (
		<RNText
			{...{
				...props,
				style: {
					color: colors.text,
					...props.style as object,
				}
			}}
		/>
	);
}