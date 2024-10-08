// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Bookorder = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/61/22/33/exterior-view.jpg?w=700&h=-1&s=1',
                  }}
              />
          
          <Booking
              Hname="Hotel Royal Savoy"
              details="Details"
              descrip="Hotel Royal Savoy is a luxurious 4* hotel situated behind the heritage Shalimar Mughal Gardens. The property has on viewing Chinar Trees of the Heritage Shalimar Bagh. Hotel offers all modern facilities, centrally Air conditioning Rooms , luxury rooms, modern bathrooms with shower cubicals."
              place="Place"
              adderess="📍- Behind Shalimar Garden, Srinagar , Kashmir - 190023 , India."
              amenities="Amenities"
              imageUrl1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/61/22/33/exterior-view.jpg?w=700&h=-1&s=1" 
              imageUrl2="https://www.kayak.co.in/rimg/himg/13/e4/76/leonardo-1166089-Panoramic_View_O-353068.jpg?width=1366&height=768&crop=true" 
              imageUrl3="https://cf.bstatic.com/xdata/images/hotel/max1024x768/422900236.jpg?k=0fa9583702555bfb6eeacc66be44c6921b7d3e2040276af963088ed4a8aa54aa&o=&hp=1" 
              imageUrl4="https://c4.wallpaperflare.com/wallpaper/705/173/127/5bf5270d8c1ab-wallpaper-preview.jpg" 
              imageUrl5="https://royal-savoy-villas-sharm-el-sheikh.booked.net/data/Photos/OriginalPhoto/11329/1132914/1132914213/Royal-Savoy-Sharm-El-Sheikh-Hotel-Exterior.JPEG" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Pre Day Price
              </Text>
              <Text style={styles.price}>
              ₹ 8999.00
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment')}>
              <Text style={styles.ordbtn}>Book Now</Text>
            </TouchableOpacity>
     
          </View>
          </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop:15,
    },
    hotelImg: {
      width: '100%',
      height: 300, // Adjust the height as needed
      borderRadius: 10,
      marginBottom: -10,
    },
    orderarea:{
      width: '100%',
      height: 80, // Adjust the height as needed
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: 'linen',
      
    },
    tprice:{
      fontSize: 14,
      marginTop:19,
      marginLeft: 36,
      marginRight:5,
      color: 'gray',
      fontWeight: 'bold',
    },
    price:{
      fontSize: 20,
      marginTop:5,
      fontWeight: 'bold',
      marginLeft: 30,
      marginRight:5,
    },
    ord:{
        width: '43%',
        height: 50, // Adjust the height as needed
        borderRadius: 10,
        marginLeft:190,
        marginBottom: 10,
        marginTop:-46,
        backgroundColor:'blue',
      },
    ordbtn:{
        textAlign:'center',
        marginBottom: 10,
        marginTop:9,
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white',
    },
  });
export default Bookorder;

