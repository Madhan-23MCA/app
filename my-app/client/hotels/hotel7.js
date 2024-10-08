// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel7 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c8/09/a1/effotel-hotel.jpg?w=700&h=-1&s=1',
                  }}
              />
          
          <Booking
              Hname="Effotel by Sayaji Indore"
              details="Details"
              descrip="Effotel Hotel is a young & vibrant hotel concept catering to needs of corporate, marriage & leisure traveler. "
              place="Place"
              adderess="📍- Plot No 10 C C A Scheme No:94 ec C, Scheme 94 Sector CA, Indore 452010 , India."
              amenities="Amenities"
              imageUrl1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c8/09/a1/effotel-hotel.jpg?w=700&h=-1&s=1" 
              imageUrl2="https://sayajihotels.com/images/hotels/effotel-indore/gallery/img2.jpg" 
              imageUrl3="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fb/a7/31/effotel-by-sayaji-indore.jpg?w=700&h=-1&s=1" 
              imageUrl4="https://sayajihotels.com/images/brand-effotel/img5.jpg" 
              imageUrl5="https://i.travelapi.com/lodging/10000000/9090000/9080300/9080282/ef57f997_z.jpg" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Pre Day Price
              </Text>
              <Text style={styles.price}>
              ₹ 7899.00
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment7')}>
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
export default Hotel7;

