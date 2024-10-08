// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel9 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://indorerocks.com/uploadimages/hotel/croppedimage/sayaji_20190621062438.jpg',
                  }}
              />
          
          <Booking
              Hname="Enrise By Sayaji Rau Indore"
              details="Details"
              descrip="Enrise By Sayaji Indore has a garden, fitness center, a bar and shared lounge in Indore."
              place="Place"
              adderess="📍- 27/1 27/2 Village Pigdambar Tehsil Mhow, Indore 453331 , India."
              amenities="Amenities"
              imageUrl1="https://indorerocks.com/uploadimages/hotel/croppedimage/sayaji_20190621062438.jpg" 
              imageUrl2="https://content.r9cdn.net/rimg/kimg/1d/8d/607968c4444133cb.jpg?width=1200&height=630&crop=true" 
              imageUrl3="https://content.jdmagicbox.com/comp/indore/q2/0731px731.x731.190920193119.u2q2/catalogue/enrise-by-sayaji-rau-indore-restaurants-9lzzyxt7gn.jpg" 
              imageUrl4="https://r1imghtlak.mmtcdn.com/c5c6a612dec311e9b08b0242ac110004.jpg" 
              imageUrl5="https://images.trvl-media.com/lodging/38000000/37890000/37889900/37889832/88f7c8f8.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium" 
        
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
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment9')}>
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
export default Hotel9;

