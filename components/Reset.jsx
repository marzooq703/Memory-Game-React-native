import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function Reset(props) {
	const { onReset } = props;
	return (
		<TouchableOpacity onPress={onReset} style={styles.container}>
			<Card style={styles.card}>
				<Text style={styles.text}>Reset</Text>
			</Card>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
    },
	card: {
		padding: 12,        
	},
    text: {
        fontSize: 20,
    }
});
