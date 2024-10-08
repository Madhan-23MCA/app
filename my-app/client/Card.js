import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, description, imageUrl,adderes }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.adderes}>{adderes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, // For Android shadow
    marginTop:20,
    
  },
  image: {
    width: '100%',
    height: 300, // Adjust the height as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 6,
    textAlign:'justify',
    marginRight:5,

  },
  adderes:{
    fontSize: 11,
    marginTop:5,
    color: 'gray',
    marginLeft: 6,
    marginRight:5,
  },
});

export default Card;
