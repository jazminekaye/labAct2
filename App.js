import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CounterScreen from './CounterScreen';
import TodoScreen from './TodoScreen';
import DatePickerScreen from './DatePickerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Counter" component={CounterScreen} />
    <Stack.Screen name="Todo" component={TodoScreen} />
    <Stack.Screen name="DatePicker" component={DatePickerScreen} />
  </Stack.Navigator>
</NavigationContainer>
);
}