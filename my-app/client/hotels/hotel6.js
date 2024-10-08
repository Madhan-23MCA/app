// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel6 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/dc/5d/0a/playotel-premier-vijay.jpg',
                  }}
              />
          
          <Booking
              Hname="Playotel Premier Vijay Nagar"
              details="Details"
              descrip="Playotel Premier Vijay Nagar, Indore is an upscale business hotel in Indore, India."
              place="Place"
              adderess="📍- C-92, Vasant Vihar Vijay Nagar, Indore 452010 , India"
              amenities="Amenities"
              imageUrl1="https://media-cdn.tripadvisor.com/media/photo-s/1d/dc/5d/0a/playotel-premier-vijay.jpg" 
              imageUrl2="https://cdn3.shopvii.com/1231/985/premier_reception.png" 
              imageUrl3="https://cdn1.goibibo.com/voy_ing/t_g/d2fa319412d011ecbc3d0a58a9feac02.jfif" 
              imageUrl4="https://cdn3.shopvii.com/1231/985/delux_premier.png" 
              imageUrl5="https://images.trvl-media.com/lodging/74000000/73580000/73578200/73578107/ad8b6c17.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Pre Day Price
              </Text>
              <Text style={styles.price}>
              ₹ 6899.00
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment6')}>
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
export default Hotel6;

