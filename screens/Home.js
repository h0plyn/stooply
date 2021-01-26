import React from 'react'
import { StatusBar } from 'expo-status-bar'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet, Text, Button, ScrollView, Image } from 'react-native'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'

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
        <Logo source={logo} />
        <LogoText>stooply</LogoText>
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
        ></Button>
        <MaterialIcons name="add-circle" size={50} />
      </Footer>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: white;
`

const Logo = styled.Image`
  width: 250px;
  height: 200px;
`

const LogoText = styled.Text`
  font-size: 39px;
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
  width: 80%;
  border-radius: 10px;
`
const Footer = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 100px;
  margin-top: 10px;
`
