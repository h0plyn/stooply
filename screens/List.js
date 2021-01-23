import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

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
      added: '1/7/21',
      thumbsUp: 6,
      thumbsDown: 9,
      comments: [],
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
      comments: [],
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
      added: '1/7/21',
      thumbsUp: 6,
      thumbsDown: 9,
      comments: [],
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
          <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri: item.info.imageUrl,
              }}
            />

            <View>
              <Text>{item.info.title}</Text>
              <Text>{item.info.added}</Text>
              <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                <MaterialIcons name="thumb-up" color="#00c87b" size={18} />
                <Text>{item.info.thumbsDown}</Text>
                <MaterialIcons name="thumb-down" color="#fd5240" size={18} />
                <Text>{item.info.thumbsUp}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
