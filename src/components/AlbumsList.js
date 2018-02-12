import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumsList extends Component {
  // To iniliase a initial value to the state thus our app will be rendered
  // twice
  state = { albums: [] };

//This gets rendered just as the component is started
  componentWillMount(){
    // Http request
    // request handler calls setState method which rerenders
 axios.get('https://rallycoding.herokuapp.com/api/music_albums')
 .then( response => this.setState({ albums: response.data}));
  }
// Helper method that will render the screen and update it using map
// Key is the unique id or the prop used to identify each album
  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title}  album={album} />
      );
  }

// to show many details as in we have to pass album as a prop to detail
  render() {
console.log(this.state);
 return (
     <ScrollView>
  {this.renderAlbums()}
     </ScrollView>
// this is for scrolling components but the root view shud have flex =1
 );
}
}
export default AlbumsList;
