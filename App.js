// External Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

// Component Definition
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Reddit Mockup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
