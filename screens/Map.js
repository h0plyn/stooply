import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker, Callout } from 'react-native-maps'
import { View, StyleSheet, Text, Modal } from 'react-native'
import styled from 'styled-components'

import * as firebase from 'firebase'
import secrets from '../secrets'

if (!firebase.apps.length) {
  firebase.initializeApp(secrets)
} else {
  firebase.app()
}

const db = firebase.firestore()

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
  const [items, setItems] = useState([])
  useEffect(() => {
    ;(async () => {
      const firestoreItems = []
      const itemsRef = db.collection('items')
      const snapshot = await itemsRef.get()
      snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data())
        firestoreItems.push(doc.data())
      })
      setItems(firestoreItems)
    })()
  }, [])

  console.log(items)
  return (
    <Container>
      {items && items.length > 0 && (
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 37.785834,
            longitude: -122.406417,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          loadingEnabled
          loadingBackgroundColor="white"
          loadingIndicatorColor="black"
        >
          {items.map((data, idx) => {
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
                  <CalloutText>{data.title}</CalloutText>
                </Callout>
              </Marker>
            )
          })}
        </MapView>
      )}

      <StatusBar style="auto" />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const CalloutText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

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
