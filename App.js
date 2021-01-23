import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

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

function Map() {
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

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Stooply</Text>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <Button title="Browse" onPress={() => navigation.navigate('Map')} />
        <Text style={styles.paragraph}>About</Text>
      </View>
    </View>
  )
}

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Stooply" component={HomeScreen} />
      <Stack.Screen name="Map" component={Map} />
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
