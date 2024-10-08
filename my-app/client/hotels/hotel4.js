// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel4 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://media-cdn.tripadvisor.com/media/photo-s/24/f2/11/e5/hrj-sarovar-portico-indore.jpg',
                  }}
              />
          
          <Booking
              Hname="HRJ Sarovar Portico, Indore"
              details="Details"
              descrip="Finding an ideal quiet hotel in Indore does not have to be difficult. Welcome to Sarovar Portico - Indore, a nice option for travellers like you."
              place="Place"
              adderess="📍- 562 Mahatma Gandhi Road Regal Square, Indore 452001 , India. "
              amenities="Amenities"
              imageUrl1="https://media-cdn.tripadvisor.com/media/photo-s/24/f2/11/e5/hrj-sarovar-portico-indore.jpg" 
              imageUrl2="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74234243807940/QS1042/QS1042-Q1/Sarovar-Portico-Indore-Hotel-Restaurant.JPEG" 
              imageUrl3="https://q-xx.bstatic.com/xdata/images/hotel/840x460/343740135.jpg?k=eb69571b0fb0799d9be4013794838346e21d27b80674bc4b492c93f339128d4f&o=" 
              imageUrl4="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3334/x_0,y_523,w_4997,h_2811,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/sarovar-portico-indore/_B3A0751_ogvbc5" 
              imageUrl5="https://q-xx.bstatic.com/xdata/images/hotel/max500/343740177.jpg?k=240543cf65614fcbbafa2ab5fa1e63eb8c92009da6ac59cebc4994e4102e5639&o=" 
        
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
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment4')}>
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
export default Hotel4;

