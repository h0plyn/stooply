import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function GiftDetail({ route, navigation }) {
  console.log(route.params)
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
        <Text>
          Thumbs up: {thumbsUp} — Thumbs Down: {thumbsDown}
        </Text>
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
