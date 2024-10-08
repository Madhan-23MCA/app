import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const Booking = ({ Hname, details, descrip, place, adderess, amenities, imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, }) => {
  return (
    <View style={styles.bookingpg}>

      <View style={styles.content}>
        <Text style={styles.title}>{Hname}</Text>
        <Text style={styles.stitle}>{details}</Text>
        <Text style={styles.description}>{descrip}</Text>
        <Text style={styles.stitle}>{place}</Text>
        <Text style={styles.adderes}>{adderess}</Text>
        <Text style={styles.stitle}>{amenities}</Text>
        <Image source={{ uri: imageUrl1 }} style={styles.img} />
        <Image source={{ uri: imageUrl2 }} style={styles.img} />
        <Image source={{ uri: imageUrl3 }} style={styles.img} />
        <Image source={{ uri: imageUrl4 }} style={styles.img} />
        <Image source={{ uri: imageUrl5 }} style={styles.img} />


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookingpg: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
    marginTop: -40,
    height: 1570,
    width: '100%',
  },

  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'justify',
    marginRight: 5,
  },
  stitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'rgb(255, 0, 0)',
  },
  description: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 6,
    paddingRight: 5,
    marginBottom: 14,
    textAlign: 'justify',
    marginRight: 5,
  },
  adderes: {
    fontSize: 15,
    marginTop: 5,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 6,
    marginRight: 5,
    marginBottom: 14,
    textAlign: 'justify',
  },
  img: {
    width: '100%',
    height: 240, // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 10,
  },

});

export default Booking;