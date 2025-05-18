import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101820FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FEE715FF',
  },
});

export default Home;
