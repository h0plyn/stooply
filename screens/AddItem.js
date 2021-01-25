import React, { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, Button, Image, Alert } from 'react-native'
import { Formik } from 'formik'
import * as ImagePicker from 'expo-image-picker'
import * as firebase from 'firebase'
import secrets from '../secrets'

if (!firebase.apps.length) {
  firebase.initializeApp(secrets)
} else {
  firebase.app() // if already initialized, use that one
}

export default function AddForm() {
  const [image, setImage] = useState(null)
  const [imgHash, setImgHash] = useState('')

  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0')
  let yyyy = today.getFullYear()
  today = mm + '/' + dd + '/' + yyyy

  useEffect(() => {
    ;(async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      let fileName = result.uri.substring(result.uri.lastIndexOf('/') + 1)
      setImage(result.uri)
      setImgHash(fileName)
      uploadImage(result.uri, fileName)
        .then(() => Alert.alert('Image Added!'))
        .catch((err) => console.log(err))
    }
  }

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    let ref = firebase.storage().ref().child(imageName)

    return ref
      .put(blob)
      .then(() => ref.getDownloadURL())
      .then((downloadURL) => setImage(downloadURL))
      .catch((err) => console.log(err))
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm()
          values.imageUrl = image
          values.added = today
          values.latitude = 'x'
          values.longitute = 'x'
          values.thumbsUp = 0
          values.thumbsDown = 0
          values.comments = []

          console.log('Headed to Firestore--->', values)

          firebase.firestore().collection('items').doc(imgHash).set(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              keyboardAppearance="dark"
              placeholderTextColor="grey"
              onBlur={props.handleBlur('title')}
            />
            <TextInput
              multiline
              minHeight={60}
              placeholder="Description"
              style={styles.input}
              onChangeText={props.handleChange('description')}
              value={props.values.description}
              keyboardAppearance="dark"
              placeholderTextColor="grey"
              onBlur={props.handleBlur('rating')}
            />
            <Button onPress={props.handleSubmit} title="Submit Stoop Gift" />
          </View>
        )}
      </Formik>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#433983',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: 'black',
    color: 'white',
    width: 300,
    margin: 9,
  },
})
