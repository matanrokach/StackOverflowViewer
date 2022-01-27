import React from "react";
import { TextInputProps } from "react-native";
import { ErrorText, Title } from "../../../../components";
import { Button, Text, TextInput } from "../../../../elements";

interface Props {
	searchTerm: string;
	onSearchTermChange(searchTerm: string): void;
	onSubmit(): void;
	error: string;
	keyboardType: TextInputProps["keyboardType"];
	isSubmitDisabled: boolean;
}

export const Search = ({ searchTerm, onSearchTermChange, onSubmit, error, keyboardType, isSubmitDisabled }: Props) => {

	return (
		<>
			<Title>{'Enter user id:'}</Title>
				<TextInput
					{...{
						value: searchTerm,
						onChangeText: onSearchTermChange,
						placeholder: 'e.g: 123456',
						keyboardType,
					}}
				/>
				<Button onPress={onSubmit} disabled={isSubmitDisabled}>
					<Text>{'SEARCH'}</Text>
				</Button>

				<ErrorText {...{error}} />
		</>
	);
}