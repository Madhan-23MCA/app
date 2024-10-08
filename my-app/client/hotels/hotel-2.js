// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from '../bookingscreen';

const Hotel2 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://image.wedmegood.com/resized/800X/uploads/member/34520/1452832096_10_110415_14120816250023836835.jpg',
                  }}
              />
          
          <Booking
              Hname="Sayaji Indore"
              details="Details"
              descrip="Sayaji Hotel Indore offers a 5-star experience and is renowned for its delectable dining options and extraordinary services & no-tip policy."
              place="Place"
              adderess="📍- H/1 , Scheme No.54 Vijay Nagar, Indore 452010 , India."
              amenities="Amenities"
              imageUrl1="https://image.wedmegood.com/resized/800X/uploads/member/34520/1452832096_10_110415_14120816250023836835.jpg" 
              imageUrl2="https://www.hotelierindia.com/cloud/2022/03/10/Sayaji-Indore-Mediterra.jpg" 
              imageUrl3="https://www.hotelierindia.com/cloud/2022/03/10/Sayaji-Indore-Kebabville.jpg" 
              imageUrl4="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/13/94/fd/sayaji-hotel.jpg?w=700&h=-1&s=1" 
              imageUrl5="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH2525360159130/QS1042/QS1042-Q1/1607340846678.jpeg" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Pre Day Price
              </Text>
              <Text style={styles.price}>
              ₹ 7599.00
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment2')}>
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
export default Hotel2;

