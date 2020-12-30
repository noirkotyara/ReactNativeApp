import React from 'react'
import { View, Image, Text } from 'react-native';

import styles from './../../style/Style'

const Photo = ({ photo, index, ...props }) => {

    let onClickPhoto = (id) => {
        props.changeCurPhoto(id)
        props.navigation.navigate('Photo')
        console.log('photo was clicked')
    }

    return (
        <View style={styles.content} key={photo.id}>
            <Image
                onClick={() => onClickPhoto(photo.id)}
                style={styles.photo}
                source={photo.urls.regular} />
            <Text style={styles.photoName}> {photo.alt_description} </Text>
            <Text style={styles.userName}> {photo.user.first_name + photo.user.last_name} </Text>
        </View>)
}


export default Photo;