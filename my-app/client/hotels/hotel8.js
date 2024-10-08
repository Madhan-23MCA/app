// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel8 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://r1imghtlak.mmtcdn.com/cc5661f4ba7811ed9aae0a58a9feac02.jpeg',
                  }}
              />
          
          <Booking
              Hname="Ramada Encore By Wyndham Indore"
              details="Details"
              descrip="#12 of 501 hotels in Indore."
              place="Place"
              adderess="📍- 150/3 Hare Krishna Vihaar, Near Iskcon Temple, Nipania, Indore , India."
              amenities="Amenities"
              imageUrl1="https://r1imghtlak.mmtcdn.com/cc5661f4ba7811ed9aae0a58a9feac02.jpeg" 
              imageUrl2="https://www.wyndhamhotels.com/content/dam/property-images/en-us/ra/in/others/indore/55782/55782_restaurant_3.jpg?downsize=720:*" 
              imageUrl3="https://cdn1.goibibo.com/voy_ing/t_g/cd865348ba8411ed930d0a58a9feac02.jpg" 
              imageUrl4="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/66/70/0f/ramada-encore-by-wyndham.jpg?w=700&h=-1&s=1" 
              imageUrl5="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/6d/7d/71/ramada-encore-by-wyndham.jpg?w=700&h=-1&s=1" 
        
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
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment8')}>
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
export default Hotel8;

