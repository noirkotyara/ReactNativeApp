import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    photoName: {
        flex:2,
        width: '50',
        height: '50',
        padding: 10,
    },
    userName: {
        flex:2,
      
    },
    photo: {
        flex: 2.5,
        width: 250,
        height: 250,
  
    },
    preloader: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    preloader: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
