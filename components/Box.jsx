import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Card } from 'react-native-paper';

export default function Box(props) {
	const { value, uniqueKey, onCardPress, active, completed } = props;
	const containerStyles = (type) => {
		const colorChooser = () => {
			if (active && !completed) return 'red';
			if (completed) return 'grey';
			return 'transparent';
		};
		if (type == 'container')
			return {
				padding: 30,
				width: 80,
				height: 100,
				backgroundColor: colorChooser(),
			};
		if (type == 'text')
			return {
				color: 'white',
				fontSize: 20,
				fontWeight: 'bold',
			};
	};
	return (
		<TouchableOpacity onPress={() => !active && !completed && onCardPress(uniqueKey, value)}>
			<Card style={containerStyles('container')}>
				<Text style={containerStyles('text')}>{active && value}</Text>
			</Card>
		</TouchableOpacity>
	);
}
