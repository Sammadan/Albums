// Import a library to help us create a component(anything on the screen like image boxs etc)
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumsList from './src/components/AlbumsList';





// Create a component
const App = () => (
  <View style= {{ flex:1 }}>
  <Header headerText= {'Albums!!!'}/>
  <AlbumsList />
  </View>
);



// Render it to device
AppRegistry.registerComponent('albums', () => App);
