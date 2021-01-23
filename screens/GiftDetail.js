import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
      <Text>{imageUrl}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{added}</Text>
      <Text>
        Thumbs up: {thumbsUp} — Thumbs Down: {thumbsDown}
      </Text>
      <Text>Comments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
