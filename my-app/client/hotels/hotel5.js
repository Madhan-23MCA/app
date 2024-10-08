// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel5 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e3/35/90/indore-marriott-hotel.jpg?w=700&h=-1&s=1',
                  }}
              />
          
          <Booking
              Hname="Indore Marriott Hotel"
              details="Details"
              descrip="Indore Marriott Hotel, a 5-star hotel in Indore, India, has a total of 216 residential rooms including 11 suites."
              place="Place"
              adderess="📍- H-2, Scheme No 54, Meghdoot Garden, Vijay Nagar, Indore 452010 , India."
              amenities="Amenities"
              imageUrl1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e3/35/90/indore-marriott-hotel.jpg?w=700&h=-1&s=1"
              imageUrl2="https://media.hrs.com/media/image/2c/c9/ab/Indore_Marriott_Hotel-Indore-Aussenansicht-1-216204.jpg" 
              imageUrl3=" https://www.hotelierindia.com/cloud/2022/04/12/PSX_20220330_190418.jpg" 
              imageUrl4=" https://cache.marriott.com/content/dam/marriott-renditions/IDRMH/idrmh-guestroom-0045-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" 
              imageUrl5="https://q-xx.bstatic.com/xdata/images/hotel/max500/461653093.jpg?k=03aeec1c4cec9cfad987e16b7f469c2fcfb7099776fe58e6fb032112b17215ee&o=&isSkia=true" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Pre Day Price
              </Text>
              <Text style={styles.price}>
              ₹ 7889.00
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment5')}>
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
export default Hotel5;

