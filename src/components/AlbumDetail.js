// Import  libraries for making a Component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// A functional component as it just displays stuff no callback
// destruce props o object
const AlbumDetail = ({ album }) => {

  // destructure the title album and artist out of the object
  const { title, artist, thumbnail_image, image, url } = album ;
  const { imageStyle, headerTextStyle, thumbnailContainerStyle, thumbnailStyle, headerContentStyle } = styles ;
  return (
    // The prop is called album thats why we have used the name and not albums

 <Card>
  <CardSection>
  <View style= {thumbnailContainerStyle}>
  <Image   style= {thumbnailStyle}
  source={ { uri: thumbnail_image } }
  />
  </View>
  <View style= {headerContentStyle}>
   <Text style = {headerTextStyle}>{ title}</Text>
   <Text>{ artist}</Text>
  </View>
   </CardSection>

   <CardSection>
   <Image  style= {imageStyle}
   source ={ { uri: image }} />
   </CardSection>

   <CardSection>
   <Button  onPress = {() => Linking.openURL(url)}>
    BUY NOW
   </Button>
   </CardSection>
 </Card>

  );
};

const styles = {
headerContentStyle: {
flexDirection: 'column',
justifyContent: 'space-around'
},
headerTextStyle: {
fontSize: 18

},
thumbnailStyle: {
  height: 50,
  width: 50
},
thumbnailContainerStyle: {
justifyContent: 'center',
alignItems: 'center',
marginLeft: 10,
marginRight: 10
},
imageStyle:{
height: 300,
flex: 1,
width: null

}



};

export default AlbumDetail;
//by putting flex=1 and width null is width is match parent
