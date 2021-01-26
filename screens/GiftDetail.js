import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function GiftDetail({ route, navigation }) {
  const [clickThumbsUp, setClickThumbsUp] = useState(false)
  const [clickThumbsDown, setClickThumbsDown] = useState(false)

  const {
    imageUrl,
    title,
    description,
    added,
    thumbsUp,
    thumbsDown,
    comments,
  } = route.params

  return (
    <Container
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
              color={clickThumbsUp ? 'black' : 'grey'}
              name="thumb-up"
              size={22}
              onPress={() => {
                navigation.setParams({
                  ...route.params,
                  thumbsUp: parseInt(thumbsUp) + 1,
                })
                setClickThumbsUp(true)
                setClickThumbsDown(false)
              }}
            />
          </CountContainer>
          <CountContainer>
            <MaterialIcons
              color={clickThumbsDown ? 'black' : 'grey'}
              name="thumb-down"
              size={22}
              onPress={() => {
                navigation.setParams({
                  ...route.params,
                  thumbsDown: parseInt(thumbsDown) + 1,
                })
                setClickThumbsDown(true)
                setClickThumbsUp(false)
              }}
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
        <View>
          {comments &&
            comments.length > 0 &&
            comments.map((comment) => {
              console.log(comment)
              return (
                <TouchableOpacity key={comment.name}>
                  <CommentContainer>
                    <AvatarBar>
                      <Image
                        source={{ uri: comment.avatar, width: 40, height: 40 }}
                        style={{ borderRadius: 50 }}
                      />
                      <UserName>{comment.name}</UserName>
                    </AvatarBar>
                    <View>
                      <CommentContent>{comment.comment}</CommentContent>
                    </View>
                  </CommentContainer>
                </TouchableOpacity>
              )
            })}
        </View>
      </ContentView>
    </Container>
  )
}

const Container = styled.ScrollView`
  display: flex;

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

const AvatarBar = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 3px;
`
const CommentTitle = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`
const CommentContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 70px;
`
const UserName = styled.Text`
  font-weight: 600;
  margin-left: 5px;
`

const CommentContent = styled.Text`
  margin-top: 3px;
`
