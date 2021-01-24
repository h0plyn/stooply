import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'

export default function AddForm(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm()
          console.log(values)
          // Do Something
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
              value={props.values.rating}
              keyboardAppearance="dark"
              placeholderTextColor="grey"
              onBlur={props.handleBlur('rating')}
            />
            <Button onPress={props.handleSubmit} title="Submit Stoop Gift" />
          </View>
        )}
      </Formik>
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
