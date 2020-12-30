import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/redux/redux-store';
import { Provider } from 'react-redux';
import GalleryContainer from './src/components/Gallery/GalleryContainer';
import PhotoMaxContainer from './src/components/Gallery/Photo/PhotoMaxContainer';


const Stack = createStackNavigator();
export default function App() {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Gallery"
            component={GalleryContainer}
          />
          <Stack.Screen
            name="Photo"
            component={PhotoMaxContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </Provider>

  );
}


