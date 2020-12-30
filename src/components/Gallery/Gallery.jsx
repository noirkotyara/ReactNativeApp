import React from 'react';
import { Text, View } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import Preloader from './../common/Preloader';
import Photo from './Photo/Photo';
import styles from './../style/Style';

const GalleryScreen = React.memo(props => {

    useEffect(() => {
        props.setPhotosThunkCreator()
    }, [props.gallery])

    if (props.gallery.length === 0)
       return <View style={styles.preloader}><Preloader /> </View> 
    else {
        return (
            <View style={styles.container}>
                <Text><h3>GalleryScreen</h3></Text>
                <View>
                    {props.gallery.map((photo, index) => {
                        return <Photo
                            key={photo.id}
                            index={index}
                            photo={photo}
                            navigation={props.navigation}
                            changeCurPhoto={props.setCurrentPhoto}
                        />
                    }
                    )}
                </View>

            </View>
        )
    }
})



export default GalleryScreen;