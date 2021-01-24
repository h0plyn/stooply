import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Map from './screens/Map'
import List from './screens/List'
import GiftDetail from './screens/GiftDetail'
import About from './screens/About'
import CameraScreen from './screens/CameraScreen'

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Stooply" component={Home} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="GiftDetail" component={GiftDetail} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    padding: 10,
    fontSize: 20,
  },
})
