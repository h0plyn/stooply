import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, StyleSheet, Text, Modal } from 'react-native';
import styled from 'styled-components';

import * as firebase from 'firebase';
import secrets from '../secrets';

if (!firebase.apps.length) {
  firebase.initializeApp(secrets);
} else {
  firebase.app();
}

const db = firebase.firestore();

export default function Map({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const firestoreItems = [];
      const itemsRef = db.collection('items');
      const snapshot = await itemsRef.get();
      snapshot.forEach((doc) => {
        firestoreItems.push(doc.data());
      });
      setItems(firestoreItems);
    })();
  }, []);

  return (
    <Container>
      {items && items.length > 0 && (
        <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 40.6734,
            longitude: -74.0083,
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
            );
          })}
        </MapView>
      )}

      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CalloutText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const styles = StyleSheet.create({
  callout: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  calloutText: {
    color: 'white',
  },
});
