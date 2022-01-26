import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { Search } from '../Search';

describe('Search', () => {
  it('should match snapshot', () => {

		const props = {
			searchTerm: "some search term",
			onSearchTermChange: () => {},
			onSubmit: () => {},
			error: '',
		};

    const {toJSON} = render(<Search {...props} />);

		expect(toJSON()).toMatchSnapshot();

  });

	it('should have search term typed in text input', () => {

		const props = {
			searchTerm: "some search term",
			onSearchTermChange: () => {},
			onSubmit: () => {},
			error: '',
		};

		const { getByDisplayValue } = render(<Search {...props} />);

		expect(getByDisplayValue(props.searchTerm)).toBeDefined();

	});

	it('should be able to change search term', () => {

		const mockOnSearchTermChange = jest.fn();

		const props = {
			searchTerm: "some search term",
			onSearchTermChange: mockOnSearchTermChange,
			onSubmit: () => {},
			error: '',
		};

		const {getByDisplayValue} = render(<Search {...props} />);

		const textInput = getByDisplayValue(props.searchTerm);

		const newSearchTerm = 'new search term';

		fireEvent.changeText(textInput, newSearchTerm);

		expect(mockOnSearchTermChange).toHaveBeenCalledWith(newSearchTerm);

	});

	it('should have clickable search button', () => {

		const mockOnSubmit = jest.fn();

		const props = {
			searchTerm: "some search term",
			onSearchTermChange: () => {},
			onSubmit: mockOnSubmit,
			error: '',
		};

		const searchButtonText = "SEARCH";

		const {getByText} = render(<Search {...props} />);

		const button = getByText(searchButtonText);

		fireEvent.press(button);

		expect(mockOnSubmit).toHaveBeenCalled();

	});
	it('should have clickable search button', () => {

		const mockOnSubmit = jest.fn();

		const props = {
			searchTerm: "some search term",
			onSearchTermChange: () => {},
			onSubmit: mockOnSubmit,
			error: '',
		};

		const searchButtonText = "SEARCH";

		const {getByText} = render(<Search {...props} />);

		const button = getByText(searchButtonText);

		fireEvent.press(button);

		expect(mockOnSubmit).toHaveBeenCalled();

	});
	
	it('should show error', () => {

		const props = {
			searchTerm: "some search term",
			onSearchTermChange: () => {},
			onSubmit: () => {},
			error: 'some error',
		};

		const {getByText} = render(<Search {...props} />);

		const errorText = getByText(props.error);

		expect(errorText).toBeDefined();

	});
	
});
