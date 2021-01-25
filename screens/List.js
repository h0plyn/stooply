import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components'

const dummyData = [
  {
    id: 1,
    latitude: 40.679728,
    longitude: -74.014908,
    info: {
      imageUrl:
        'https://pbs.twimg.com/media/EjQw1BsUwAEwj5F?format=jpg&name=4096x4096',
      title: 'Books',
      description: 'A box full of the classics',
      added: '1/19/21',
      thumbsUp: 6,
      thumbsDown: 9,
      comments: [
        {
          avatar: 'www.test.com',
          name: 'Stanley',
          comment: 'C++ YUCK!',
        },
        {
          avatar: 'www.test.com',
          name: 'Kaitlin',
          comment: 'Just take the Ferry to Fullstack...',
        },
      ],
    },
  },
  {
    id: 2,
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
      comments: [
        {
          avatar: 'www.test.com',
          name: 'Garrett',
          comment: 'Dibs!',
        },
        {
          avatar: 'www.test.com',
          name: 'Kaitlin',
          comment: "Is this still fresh? It's been 2 weeks?!",
        },
      ],
    },
  },
  {
    id: 3,
    latitude: 40.678005,
    longitude: -74.010903,
    info: {
      imageUrl:
        'https://viewcameraaustralia.org/wp-content/uploads/2018/01/main-photo-chamonix-45f-1-1020x680.jpg',
      title: 'Camera',
      description: 'Sony a7RIV. Works great.',
      added: '1/26/21',
      thumbsUp: 6,
      thumbsDown: 9,
      comments: [
        {
          avatar: 'www.test.com',
          name: 'Sarah',
          comment: 'This is a great camera! I used this in the 70s',
        },
        {
          avatar: 'www.test.com',
          name: 'Garrett',
          comment: 'Can I come pick this up?',
        },
      ],
    },
  },
]

export default function List({ navigation }) {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('GiftDetail', item)}
        >
          <ItemContainer>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 10,
              }}
            >
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: item.info.imageUrl,
                }}
              />
              {/* Break out into ListCard */}
              <InfoContainer>
                <Title>{item.info.title}</Title>
                <Info>{item.info.added}</Info>
                <ThumbContainer>
                  <MaterialIcons name="thumb-up" color="#00c87b" size={16} />
                  <Count>{item.info.thumbsDown}</Count>
                  <MaterialIcons
                    style={{ marginLeft: 6 }}
                    name="thumb-down"
                    color="#fd5240"
                    size={16}
                  />
                  <Count>{item.info.thumbsUp}</Count>
                </ThumbContainer>
              </InfoContainer>
              {/* End ListCard */}
            </View>
          </ItemContainer>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

const ItemContainer = styled.View`
  border-width: 2px;
  border-radius: 2px;
  background-color: white;
  border-top-width: 1px;
  border-left-width: 1px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px lightgrey;
`
const Title = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`

const InfoContainer = styled.View`
  margin-left: 10px;
  justify-content: center;
  margin-top: 12px;
`

const Info = styled.Text`
  color: black;
  font-size: 16px;
`

const Count = styled.Text`
  font-size: 14px;
  margin-left: 3px;
`

const ThumbContainer = styled.View`
  margin-top: 8px;
  flex: 1;
  flex-direction: row;
`
