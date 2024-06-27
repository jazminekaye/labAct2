import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TodoScreen = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { key: Math.random().toString(), value: text }]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add To-Do"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Add </Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text style={styles.todoItem}>{item.value}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#6a0dad',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  button: {
    backgroundColor: '#8a2be2', 
    padding: 15,
    borderRadius: 30, 
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 18,
  },
});

export default TodoScreen;
