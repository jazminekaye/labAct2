import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={increaseCount}>
        <Text style={styles.buttonText}>Increase </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={decreaseCount}>
        <Text style={styles.buttonText}>Decrease </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8a2be2', 
    padding: 15,
    marginVertical: 10,
    borderRadius: 30, 
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CounterScreen;
