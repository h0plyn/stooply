import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const LogoText = styled.Text`
  font-size: 39;
  color: black;
`

const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 25px;
  justify-content: center;
  align-items: center;
`

const MainView = styled.ScrollView`
  display: flex;
  border: black;
  border-width: 5px
  width: 80%;
`
const Footer = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
`

export default function Home({ navigation }) {
  return (
    <Container>
      <MainView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LogoText>Stooply</LogoText>
        <ButtonView>
          <Button
            title="Map"
            color="black"
            onPress={() => navigation.navigate('Map')}
          />
          <Button
            color="black"
            title="List"
            onPress={() => navigation.navigate('List')}
          />
        </ButtonView>
      </MainView>
      <Footer>
        <Button
          title="About"
          color="black"
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title="Camera"
          color="black"
          onPress={() => navigation.navigate('CameraScreen')}
        />
        <Button
          title="Add Item"
          color="black"
          onPress={() => navigation.navigate('AddItem')}
        />
      </Footer>
    </Container>
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
