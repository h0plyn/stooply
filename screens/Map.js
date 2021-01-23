import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker, Callout } from 'react-native-maps'
import { View, StyleSheet, Text } from 'react-native'

const dummyData = [
  {
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
          console.log('DATA', data)
          return (
            <Marker
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
              key={idx}
              pinColor="blue"
            >
              <Callout
                style={styles.callout}
                tooltip={true}
                onPress={() => navigation.navigate('GiftDetail', data)}
              >
                <Text style={styles.calloutText}>{data.info.title}</Text>
              </Callout>
            </Marker>
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
  callout: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  calloutText: {
    color: 'white',
  },
})
