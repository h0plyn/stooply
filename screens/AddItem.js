import React, { useEffect, useState } from 'react';
import {
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import StoopButton from '../shared/Button';
import styled from 'styled-components';
import * as yup from 'yup';
import { storage, db } from '../firebase';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  description: yup.string().required().min(4),
});

export default function AddForm({ navigation }) {
  const [image, setImage] = useState(null);
  const [imgHash, setImgHash] = useState('');
  const [location, setLocation] = useState(null);
  const [gallery, setGallery] = useState(false);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  useEffect(() => {
    getLocation();
    return () => console.log('done');
  }, []);

  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      Alert.alert('Need locations access');
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation({ location });
  };

  const pickImage = async () => {
    (async () => {
      const {
        imagePicker,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (imagePicker !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();

    setGallery(true);

    let currentImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!currentImage.cancelled) {
      let fileName = currentImage.uri.substring(
        currentImage.uri.lastIndexOf('/') + 1
      );
      setImage(currentImage.uri);
      setImgHash(fileName);
      uploadImage(currentImage.uri, fileName)
        .then(() => {
          Alert.alert('Image Added!');
          setGallery(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    let ref = storage.ref().child(imageName);

    return ref
      .put(blob)
      .then(() => ref.getDownloadURL())
      .then((downloadURL) => setImage(downloadURL))
      .catch((err) => console.log(err));
  };

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
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            values.imageUrl = image;
            values.added = today;
            values.latitude = location.location.coords.latitude;
            values.longitude = location.location.coords.longitude;
            values.thumbsUp = 0;
            values.thumbsDown = 0;
            values.comments = [];

            db.collection('items').doc(imgHash).set(values);
            navigation.navigate('Map');
          }}
        >
          {(props) => (
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <View>
                {image && (
                  <ImageBox resizeMode="cover" source={{ uri: image }} />
                )}
                {image && gallery && (
                  <Text
                    style={{
                      color: 'red',
                      fontWeight: 'bold',
                      alignSelf: 'center',
                    }}
                  >
                    Please wait until image is uploaded
                  </Text>
                )}
              </View>
              <InputBox
                placeholder="Title"
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                keyboardAppearance="dark"
                placeholderTextColor="grey"
                onBlur={props.handleBlur('title')}
              />
              <Text>{props.touched.title && props.errors.title}</Text>
              <InputBox
                placeholder="Description"
                onChangeText={props.handleChange('description')}
                value={props.values.description}
                keyboardAppearance="dark"
                placeholderTextColor="grey"
                onBlur={props.handleBlur('description')}
              />
              <Text>
                {props.touched.description && props.errors.description}
              </Text>

              <StoopButton onPress={props.handleSubmit} text="Submit" />
            </View>
          )}
        </Formik>
        <StoopButton onPress={pickImage} text="Camera Roll" />
      </View>
    </TouchableWithoutFeedback>
  );
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
`;

const ImageBox = styled.Image`
  background-color: white;
  width: 300px;
  height: 400px;
  margin-top: 15px;
  border-radius: 10px;
  align-items: center;
`;
