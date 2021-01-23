import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function GiftDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Gift Image</Text>
      <Text>Gift Title</Text>
      <Text>Gift Description</Text>
      <Text>Time since Posted</Text>
      <Text>Thumbs up or Thumbs Down</Text>
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
