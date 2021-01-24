import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Stooply</Text>
      <View>
        <Button title="Browse Map" onPress={() => navigation.navigate('Map')} />
        <Button
          title="Browse List"
          onPress={() => navigation.navigate('List')}
        />
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <Button
          title="Camera"
          onPress={() => navigation.navigate('CameraScreen')}
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
