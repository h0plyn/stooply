import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Map from './screens/Map';
import List from './screens/List';
import GiftDetail from './screens/GiftDetail';
import About from './screens/About';
import CameraScreen from './screens/CameraScreen';
import ImageScreen from './screens/ImageScreen';
import AddItem from './screens/AddItem';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Stooply" component={Home} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="GiftDetail" component={GiftDetail} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
      <Stack.Screen name="AddItem" component={AddItem} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
