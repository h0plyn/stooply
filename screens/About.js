import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export default function About() {
  return (
    <Container>
      <Title style={{ alignSelf: 'flex-start' }}>Origin Story</Title>
      <FeatText>
        The concept for Stooply came about while walking around the Park Slope
        neighborhood of Brooklyn in 2017.
      </FeatText>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 30px;
  padding-bottom: 150px;
  background-color: white;
`

const Title = styled.Text`
  font-size: 39px;
  color: black;
`

const FeatText = styled.Text`
  font-size: 24px;
  color: black;
`
