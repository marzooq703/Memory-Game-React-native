import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function counter(props) {
  const { value } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      Number of Attempts: {value}
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