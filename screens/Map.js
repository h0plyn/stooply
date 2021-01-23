import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet } from 'react-native'

const dummyData = [
  {
    latitude: 40.679728,
    longitude: -74.014908,
  },
  {
    latitude: 40.674812,
    longitude: -74.016092,
  },
  {
    latitude: 40.678005,
    longitude: -74.010903,
  },
]

export default function Map({ navigation }) {
  const [error, setError] = useState(null)
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 40.6734,
          longitude: -74.0083,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {dummyData.map((data, idx) => {
          console.log(data)
          return (
            <Marker
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
              key={idx}
            />
          )
        })}
      </MapView>

      <StatusBar style="auto" />
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
