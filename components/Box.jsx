import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function box(props) {
  const { value, uniqueKey } = props;
  console.log(uniqueKey);
  const onCardPress = () => {
    console.log("hey!", uniqueKey);
  }
  return (
    <TouchableOpacity
        onPress={onCardPress}
      >
    <Card style={styles.container}>
      <Text style={styles.text}>
        {value}
      </Text>
    </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 80,
    height: 100,
    backgroundColor: 'red'
  },
  text: {
    color: 'white',
  }
});
