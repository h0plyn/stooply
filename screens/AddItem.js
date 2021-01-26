import React, { useEffect, useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { Formik } from 'formik'
import * as ImagePicker from 'expo-image-picker'
import * as firebase from 'firebase'
import secrets from '../secrets'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import StoopButton from '../shared/Button'
import styled from 'styled-components'

if (!firebase.apps.length) {
  firebase.initializeApp(secrets)
} else {
  firebase.app()
}

export default function AddForm() {
  const [image, setImage] = useState(null)
  const [imgHash, setImgHash] = useState('')
  const [location, setLocation] = useState(null)

  let today = new Date()
  let dd = String(today.getDate()).padStart(2, '0')
  let mm = String(today.getMonth() + 1).padStart(2, '0')
  let yyyy = today.getFullYear()
  today = mm + '/' + dd + '/' + yyyy

  useEffect(() => {
    getLocation()
    return () => console.log('done')
  }, [])

  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      Alert.alert('Need locations access')
    }

    let location = await Location.getCurrentPositionAsync({})
    console.log('LOCATION?', location)
    setLocation({ location })
    console.log(location)
  }

  const pickImage = async () => {
    ;(async () => {
      const {
        imagePicker,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (imagePicker !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!')
      }
    })()

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Formik
          initialValues={{ title: '', description: '' }}
          onSubmit={(values, actions) => {
            console.log('LOCATION AT SEND', location)

            actions.resetForm()
            values.imageUrl = image
            values.added = today
            values.latitude = location.location.coords.latitude
            values.longitude = location.location.coords.longitude
            values.thumbsUp = 0
            values.thumbsDown = 0
            values.comments = []

            console.log('Headed to Firestore--->', values)

            firebase.firestore().collection('items').doc(imgHash).set(values)
          }}
        >
          {(props) => (
            <View>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <InputBox
                placeholder="Title"
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                keyboardAppearance="dark"
                placeholderTextColor="grey"
                onBlur={props.handleBlur('title')}
              />
              <InputBox
                placeholder="Description"
                onChangeText={props.handleChange('description')}
                value={props.values.description}
                keyboardAppearance="dark"
                placeholderTextColor="grey"
                onBlur={props.handleBlur('rating')}
              />
              <StoopButton onPress={props.handleSubmit} text="Submit" />
            </View>
          )}
        </Formik>
        <StoopButton onPress={pickImage} text="Camera Roll" />
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

const InputBox = styled.TextInput`
  border-width: 1px;
  border-color: grey;
  padding: 10px;
  font-size: 18px;
  border-radius: 6px;
  background-color: black;
  color: white;
  width: 300px;
  margin: 9px;
`
