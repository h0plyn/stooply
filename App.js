import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

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
];

export default function App() {
  const [error, setError] = useState(null);
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setRegion(location);
      console.log('REGION', region);
    })();
  }, []);

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
        <Marker coordinate={dummyData[0]} />
        <Marker coordinate={dummyData[1]} />
        <Marker coordinate={dummyData[2]} />
      </MapView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
