import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, TextInput as RNTextInput, TextInputProps, View } from 'react-native';

export const TextInput = (props: TextInputProps) => {
	const { colors } = useTheme();

	return (
		<View
			style={[
				styles.container,
				{backgroundColor: colors.card},
			]}
		>
			<RNTextInput
				{...{
					...props,
					style: {
						...styles.textInput,
						...props.style as object,
						borderColor: colors.border,
						backgroundColor: colors.card,
					}
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// borderColor: 'green',
		// backgroundColor: 'red',
		borderWidth: 1,
		alignSelf: 'stretch',
		marginHorizontal: 20,
		paddingHorizontal: 10,
		// paddingVertical: 10,
		borderRadius: 6,

		// flexDirection: 'row',
		// flex: 1,
	},
	textInput: {
		borderColor: 'red',
		paddingVertical: 10,
	},
})