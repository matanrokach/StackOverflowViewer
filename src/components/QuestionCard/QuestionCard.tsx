import React from "react";
import { QuestionTitle } from "..";
import { Card, Text } from "../../elements";

interface Props {
	question: IUserQuestion;
	onPressQuestion(questionUri: string): void;
}

export const QuestionCard = ({ question, onPressQuestion }: Props) => {

	const onPress = () => {
		onPressQuestion(question.link);
	}

	const title = `Title: ${question.title}`;
	const description = `Is answered: ${question.is_answered}`;

	return (
		<Card {...{ onPress }}>
			<>
				<QuestionTitle>{title}</QuestionTitle>
				<Text>{description}</Text>
			</>
		</Card>
	);
}