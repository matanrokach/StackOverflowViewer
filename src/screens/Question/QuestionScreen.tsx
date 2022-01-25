import { NavigationProp, RouteProp } from '@react-navigation/native';
import React from 'react';
import { WebView } from 'react-native-webview';

interface Props {
	navigation: NavigationProp<any>;
	route: RouteProp<{ params: { uri: string } }>;
}

export const QuestionScreen = (props: Props) => {

	const uri = props.route?.params?.uri;

	return (
		<WebView source={{ uri }} />
	);
}