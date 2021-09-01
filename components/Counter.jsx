import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function counter(props) {
  const { value, matches } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      Number of Attempts: {value}
      </Text>
      <Text style={styles.text}>
      Matches Completed: {matches}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: 'red',
    fontSize: 20,
  }
});