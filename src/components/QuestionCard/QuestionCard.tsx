import React from "react";
import { Card, Text } from "../../elements";

interface Props {
	title: string;
	description: string;
	onPress(): void;
}

export const QuestionCard = ({ title, description, onPress }: Props) => {

	return (
		<Card {...{ onPress }}>
			<>
				<Text
					style={{
						fontSize: 18,
						paddingBottom: 10,
					}}>{title}</Text>
				<Text>{description}</Text>
			</>
		</Card>
	);
}