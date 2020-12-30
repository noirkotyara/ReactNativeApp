import React from 'react';
import preloader from './preloader.svg';
import { StyleSheet, View} from 'react-native';

const Preloader = () => {
    return (
        <View className={styles.divPreloader}>
            <img className={styles.preloader} src={preloader} alt="preloader" />
        </View>
    );
}

const styles = StyleSheet.create({
    divPreloader: {
        textAlign: 'center'
    }
  });
  
export default Preloader;