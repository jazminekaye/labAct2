import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('Counter')}
      >
        <Text style={styles.buttonText}>Counter Widget </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('Todo')}
      >
        <Text style={styles.buttonText}>To-Do List Widget </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('DatePicker')}
      >
        <Text style={styles.buttonText}>Date Picker Widget </Text>
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
  button: {
    backgroundColor: '#8a2be2', 
    padding: 15,
    marginVertical: 10,
    borderRadius: 25, 
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    textAlign: 'center', 
  },
});

export default HomeScreen;
