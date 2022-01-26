import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Results} from '../Results';

interface IItem {
  text: string;
}

const renderItem = ({item, index}: {item: IItem; index: number}) => (
  <TouchableOpacity>
    <Text>{item.text}</Text>
  </TouchableOpacity>
);

const data = [{text: 'some text 1'}, {text: 'some text 2'}];

const keyExtractor = (item: IItem) => item.text;

describe('Results', () => {
  it('should match snapshot', () => {

		const props = {
			data,
			renderItem,
			keyExtractor,
		};

    const {toJSON} = render(<Results<IItem> {...props} />);

		expect(toJSON()).toMatchSnapshot();

  });

	it('should have N items', () => {

		const props = {
			data,
			renderItem,
			keyExtractor,
		};

		const { getByText } = render(<Results {...props} />);

		props.data.forEach((item => {
			expect(getByText(item.text)).toBeDefined();
		}));

	});

	it('should have clickable items', () => {

		const mockOnPress = jest.fn();

		const renderItem = ({item, index}: {item: IItem; index: number}) => (
			<TouchableOpacity onPress={() => mockOnPress(item)}>
				<Text>{item.text}</Text>
			</TouchableOpacity>
		);

		const props = {
			data,
			renderItem,
			keyExtractor,
		};

		const {getByText} = render(<Results<IItem> {...props} />);

		const listItem = getByText(props.data[0].text);

		fireEvent.press(listItem);

		expect(mockOnPress).toHaveBeenCalledWith(props.data[0]);

	});
	
});
