import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet, Text, Button } from 'react-native'

const giftData = {
  latitude: 40.679728,
  longitude: -74.014908,
  info: {
    imageUrl: 'www.url.com',
    title: 'Suitcase',
    description: 'an old suitcase',
    added: '1/7/21',
    thumbsUp: 6,
    thumbsDown: 9,
    comments: [],
  },
}

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Stooply</Text>
      <View>
        <Button title="Browse" onPress={() => navigation.navigate('Map')} />
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <Button
          title="Gift"
          onPress={() => navigation.navigate('GiftDetail', giftData)}
        />
      </View>
    </View>
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
