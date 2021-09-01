import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Box from './components/Box.jsx';
import Counter from './components/Counter.jsx';

export default function Layout() {
  // const getUtf = (val) => Array.from(Array(4)).map((e, i) => i + val + 1);
  const UTF_16 = [Array.from(Array(4)).map((e, i) => i + 65), Array.from(Array(4)).map((e, i) => i + 69)];
  const renderList = [];
  UTF_16.forEach(utf => {
      const tempAlphabets = utf.map((x) => String.fromCharCode(x));
      renderList.push(tempAlphabets);
  });
  for (let i = 0; i < 4; i++) {
    renderList[i].sort(function(a, b){return 0.5 - Math.random()});
  }
  console.log(renderList);
  return (
    <>
      <Counter value={10} />
    <View style={styles.container}>
      {renderList.map((subContainer) => (
      <View style={styles.subContainer}>
      {subContainer.map((alphabet, i) => (
      <View style={styles.element} key={i}>        
        <Box value={alphabet} uniqueKey={i} />
      </View>
      ))}
      </View>            
      ))}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
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
  }
});
