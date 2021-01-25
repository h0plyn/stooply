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
import ImageScreen from './screens/ImageScreen'
import AddItem from './screens/AddItem'

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
      <Stack.Screen name="Image" component={ImageScreen} />
      <Stack.Screen name="AddItem" component={AddItem} />
    </Stack.Navigator>
  )
}

export default function App() {
  const [giftItems, setGiftItems] = useState([
    {
      id: 1,
      latitude: 40.679728,
      longitude: -74.014908,
      info: {
        imageUrl:
          'https://pbs.twimg.com/media/EjQw1BsUwAEwj5F?format=jpg&name=4096x4096',
        title: 'Books',
        description: 'A box full of the classics',
        added: '1/7/21',
        thumbsUp: 6,
        thumbsDown: 9,
        comments: [],
      },
    },
    {
      id: 2,
      latitude: 40.674812,
      longitude: -74.016092,
      info: {
        imageUrl:
          'http://www.bunboyeatsnyc.com/wp-content/uploads/2016/04/IMG_5571-1.jpg',
        title: 'BBQ',
        description: 'Free BBQ today at 12PM',
        added: '1/7/21',
        thumbsUp: 6,
        thumbsDown: 9,
        comments: [],
      },
    },
    {
      id: 3,
      latitude: 40.678005,
      longitude: -74.010903,
      info: {
        imageUrl:
          'https://viewcameraaustralia.org/wp-content/uploads/2018/01/main-photo-chamonix-45f-1-1020x680.jpg',
        title: 'Camera',
        description: 'Sony a7RIV. Works great.',
        added: '1/7/21',
        thumbsUp: 6,
        thumbsDown: 9,
        comments: [],
      },
    },
  ])

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
