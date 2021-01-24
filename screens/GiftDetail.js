import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

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
    <View style={styles.container}>
      <Image
        style={styles.box}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.details}>
        <Text>{title}</Text>
        <Text>{description}</Text>

        <Text>Stooped on {added}</Text>
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <MaterialIcons
              name="thumb-up"
              size={22}
              onPress={() =>
                navigation.setParams({
                  info: { ...route.params.info, thumbsUp: thumbsUp + 1 },
                })
              }
            />
          </View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <MaterialIcons
              name="thumb-down"
              size={22}
              onPress={() =>
                navigation.setParams({
                  info: { ...route.params.info, thumbsDown: thumbsDown + 1 },
                })
              }
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', margin: 5 }}>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Text>{thumbsUp}</Text>
            <MaterialIcons name="thumb-up" color="#00c87b" size={18} />
          </View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <Text>{thumbsDown}</Text>
            <MaterialIcons name="thumb-down" color="#fd5240" size={18} />
          </View>
        </View>
        <Text>Comments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
  },
  box: {
    backgroundColor: 'tomato',
    height: '50%',
    width: '80%',
    marginHorizontal: 100,
    marginVertical: 50,
    borderRadius: 10,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    padding: 10,
    fontSize: 20,
  },
  details: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '80%',
  },
  Text: {
    marginVertical: 10,
  },
})
