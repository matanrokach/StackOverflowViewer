import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
	onPress(): void;
	children: JSX.Element;
}

export const Card = ({ onPress, children }: Props) => {

	return (
		<TouchableOpacity
			{...{
				onPress,
				style: styles.container,
			}}
		>
				{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 6,
		alignSelf: 'stretch',
		padding: 10,
		marginVertical: 5,
		marginHorizontal: 10,
	},
});