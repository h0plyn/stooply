import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker, Callout } from 'react-native-maps'
import { View, StyleSheet, Text } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const CalloutText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

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
    <Container>
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
          return (
            <Marker
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
              key={idx}
              pinColor="black"
            >
              <Callout
                style={styles.callout}
                tooltip={true}
                onPress={() => navigation.navigate('GiftDetail', data)}
              >
                <CalloutText>{data.info.title}</CalloutText>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <StatusBar style="auto" />
    </Container>
  )
}

const styles = StyleSheet.create({
  callout: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  calloutText: {
    color: 'white',
  },
})
