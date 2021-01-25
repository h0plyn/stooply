import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components'

export default function GiftDetail({ route, navigation }) {
  const {
    imageUrl,
    title,
    description,
    added,
    thumbsUp,
    thumbsDown,
  } = route.params.info

  return (
    <Container>
      <ImageBox
        source={{
          uri: imageUrl,
        }}
      />
      <ContentView>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Stooped>Stooped on {added}</Stooped>
        <ClickableThumbContainer>
          <CountContainer>
            <MaterialIcons
              name="thumb-up"
              size={22}
              onPress={() =>
                navigation.setParams({
                  info: { ...route.params.info, thumbsUp: thumbsUp + 1 },
                })
              }
            />
          </CountContainer>
          <CountContainer>
            <MaterialIcons
              name="thumb-down"
              size={22}
              onPress={() =>
                navigation.setParams({
                  info: { ...route.params.info, thumbsDown: thumbsDown + 1 },
                })
              }
            />
          </CountContainer>
        </ClickableThumbContainer>
        <CountContainer>
          <CountContainer>
            <Count>{thumbsUp}</Count>
            <MaterialIcons
              style={{ paddingTop: 3 }}
              name="thumb-up"
              color="#00c87b"
              size={18}
            />
          </CountContainer>
          <CountContainer style={{ marginLeft: 10 }}>
            <Count>{thumbsDown}</Count>
            <MaterialIcons
              style={{ paddingTop: 3 }}
              name="thumb-down"
              color="#fd5240"
              size={18}
            />
          </CountContainer>
        </CountContainer>
        <CommentTitle>Comments</CommentTitle>
      </ContentView>
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

const ImageBox = styled.Image`
  background-color: black;
  height: 50%;
  width: 80%;
  margin-bottom: 30px;
  margin-top: 15px;
  border-radius: 10px;
`

const ContentView = styled.View`
  flex: 1;
  justify-content: flex-start;
  width: 80%;
`
const Title = styled.Text`
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
`
const Description = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 8px;
`

const Stooped = styled.Text`
  font-size: 15px;
  color: black;
  margin-bottom: 8px;
`

const ClickableThumbContainer = styled.View`
  flex-direction: row;
`

const Count = styled.Text`
  font-size: 18px;
  margin-right: 6px;
`

const CountContainer = styled.View`
  flex-direction: row;
  margin: 5px;
`
const CommentTitle = styled.Text`
  font-size: 18px;
  margin-top: 10px;
`
