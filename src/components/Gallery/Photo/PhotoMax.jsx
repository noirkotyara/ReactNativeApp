import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';



const PhotoMax = props => {
    return (
        <View >
                <Image
                    style={styles.photo}
                    source={props.currentPhoto.urls.raw} />
        </View>
    )
}

const win = Dimensions.get('window');
export const styles = StyleSheet.create({
    photo: {
        width: '100%',
        height: win.height
    }
});


export default PhotoMax;