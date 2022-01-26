import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../../elements";

interface Props {
	children: string;
}

export const Title = ({ children }: Props) => {

	return (
		<Text style={styles.title}>{children}</Text>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: '500',
	},
})