import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../elements";

interface Props {
	error: string;
}

export const ErrorText = ({ error = '' }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	},
	text: {
		color: 'red',
	},
});