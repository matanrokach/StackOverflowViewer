import React from "react";
import { ErrorText, Title } from "../../../../components";
import { Button, Text, TextInput } from "../../../../elements";

interface Props {
	searchTerm: string;
	onSearchTermChange(searchTerm: string): void;
	onSubmit(): void;
	error: string;
}

export const Search = ({ searchTerm, onSearchTermChange, onSubmit, error }: Props) => {

	return (
		<>
			<Title>{'Enter user id:'}</Title>
				<TextInput
					{...{
						value: searchTerm,
						onChangeText: onSearchTermChange,
						placeholder: 'e.g: 123456',
					}}
				/>
				<Button onPress={onSubmit}>
					<Text>{'SEARCH'}</Text>
				</Button>

				<ErrorText {...{error}} />
		</>
	);
}