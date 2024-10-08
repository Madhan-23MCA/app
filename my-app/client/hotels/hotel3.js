// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel3 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/99/fc/35/chic-modern-exclusive.jpg?w=700&h=-1&s=1',
                  }}
              />
          
          <Booking
              Hname="The Park Indore"
              details="Details"
              descrip="Chic, modern, exclusive yet eclectic, THE Park Indore, is a fine blend of extraordinary experiences truly symbolising the many within you."
              place="Place"
              adderess="📍- Mr 10 Ida Plot No 5 Scheme No 7454 Main Road, Indore 452010 , India."
              amenities="Amenities"
              imageUrl1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/99/fc/35/chic-modern-exclusive.jpg?w=700&h=-1&s=1" 
              imageUrl2="https://gos3.ibcdn.com/452d7eb051b511ec92c40a58a9feac02.jpg" 
              imageUrl3="https://www.theparkhotels.com/images/site-specific/indore/home/banner-pic.jpg" 
              imageUrl4="https://www.theparkhotels.com/images/site-specific/indore/rooms/president-suite/presidential-suite-1.jpg" 
              imageUrl5="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2022/05/DSCF0101.jpg" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Pre Day Price
              </Text>
              <Text style={styles.price}>
              ₹ 7799.00
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment3')}>
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
export default Hotel3;

