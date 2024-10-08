// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel10 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://images.oyoroomscdn.com/uploads/hotel_image/87265/46fd8dd8a3ffd1f0.jpg',
                  }}
              />
          
          <Booking
              Hname="OYO 4042 Hotel Mehar Residency"
              details="Details"
              descrip="How to Reach While hiring a taxi/auto-rickshaw from anywhere in the city to the hotel is a convenient option, you could also use the local city buses until the nearest bus stop."
              place="Place"
              adderess="📍- 13 Residency Kibe Compound Behind Mdhumilan Talkies, Indore 452001 , India"
              amenities="Amenities"
              imageUrl1="https://images.oyoroomscdn.com/uploads/hotel_image/87265/46fd8dd8a3ffd1f0.jpg" 
              imageUrl2="https://news.resolver.in/wp-content/uploads/2019/08/bz15-oyo-uae-1130x650.jpg" 
              imageUrl3="https://images.oyoroomscdn.com/uploads/hotel_image/35526/62419a45dc28e35f.jpg" 
              imageUrl4="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c7/ed/9a/getlstd-property-photo.jpg?w=700&h=-1&s=1" 
              imageUrl5="https://images.oyoroomscdn.com/uploads/hotel_image/78654/33968a8c2a8f5d31.jpg" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
               
             <Text style={styles.tprice}> 
              Pre Day Price
              </Text>
              <Text style={styles.price}>
              ₹ 4899.00
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment10')}>
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
export default Hotel10;

