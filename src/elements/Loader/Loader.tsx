import React, { ReactNode } from "react";
import { View } from "react-native";
import { Text } from "../Text/Text";

interface Props {
	isLoading: boolean;
	children: JSX.Element;
}

export const Loader = ({ isLoading, children }: Props) => {
	if (isLoading) {
		return (
			<View>
				<Text>{'LOADING...'}</Text>
			</View>
		);
	}
	
	return children;
}