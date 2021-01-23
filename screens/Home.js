import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Stooply</Text>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <Button title="Browse" onPress={() => navigation.navigate('Map')} />
        <Button title="About" onPress={() => navigation.navigate('About')} />
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