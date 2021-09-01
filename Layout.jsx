import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Box from './components/Box.jsx';
import Counter from './components/Counter.jsx';
import Reset from './components/Reset.jsx';

export default function Layout() {
	const [numberOfPresses, setNumberOfPresses] = useState(0);
	const [matches, setMatches] = useState(0);
	const [activeKeys, setActiveKeys] = useState([]);
	const [completed, setCompleted] = useState([]);

	// Return a sorted Array of Alphabets
	const getAlphabets = () => {
		const renderList = [];
		const UTF_16 = [
			Array.from(Array(4)).map((e, i) => i + 65),
			Array.from(Array(4)).map((e, i) => i + 69),
		];
		UTF_16.forEach((utf) => {
			for (let i = 0; i < 2; i++) {
				const tempAlphabets = UTF_16[i].map((x) => String.fromCharCode(x));
				renderList.push(tempAlphabets);
			}
		});
		// Randomly sorting the values of each array
		for (let i = 0; i < 4; i++) {
			renderList[i].sort(function (a, b) {
				return 0.5 - Math.random();
			});
		}
		return renderList;
	};

	// setting the alphabets to the State for rendring
	const [sort, setSort] = useState(getAlphabets());

	// This handle the press event of the card
	const onCardPress = (key, alphabet) => {
		setNumberOfPresses(numberOfPresses + 1);
		let tempActiveKeys = [];
		if (activeKeys.length < 1) {
			tempActiveKeys = [key];
			setActiveKeys(tempActiveKeys);
		}
		if (activeKeys.length === 1) {
			tempActiveKeys = [key, ...activeKeys];
			setActiveKeys(tempActiveKeys);
			// Closing the opened box
			console.log('activeKeys', activeKeys);
			console.log('key', key);
			if (activeKeys[0].charAt(0) == alphabet) {
				setCompleted([alphabet, ...completed]);
				setMatches(matches + 1);
			}
			setTimeout(() => {
				setActiveKeys([]);
			}, 100);
		}
	};

	// Generates keys based on our algorithm
	// since we only compare 2 set of values for each alphabet
	// we're getting randomly changing the order of the row
	const keyGenerator = (alphabet, i) => {
		let index = i;
		if (index === 0) index = 1;
		if (index === 3) index = 2;
		return `${alphabet}${index}`;
	};
	const handleReset = () => {
		console.log('reset');
		setSort(getAlphabets());
		setNumberOfPresses(0);
		setMatches(0);
		setActiveKeys([]);
		setCompleted([]);
	};
	return (
		<>
			<Counter value={numberOfPresses} matches={matches} />
			<View style={styles.container}>
				{sort.map((subContainer, i) => (
					<View style={styles.subContainer} key={`subContainer${i}`}>
						{subContainer.map((alphabet) => (
							<View style={styles.element} key={keyGenerator(alphabet, i)}>
								<Box
									value={alphabet}
									uniqueKey={keyGenerator(alphabet, i)}
									onCardPress={onCardPress}
									active={activeKeys.includes(keyGenerator(alphabet, i))}
									completed={completed.includes(alphabet)}
								/>
							</View>
						))}
					</View>
				))}
			</View>
			<Reset onReset={handleReset} />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	subContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	element: {
		marginBottom: 10,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
