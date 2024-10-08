import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const AdminPage = () => {
  const [hotels, setHotels] = useState([
    {
      title: 'Hotel Royal Savoy',
      description: 'A luxurious hotel near the heritage Shalimar Mughal Gardens.',
      address: '📍 Behind Shalimar Garden, Srinagar, India',
    },
    {
      title: 'Sayaji Indore',
      description: 'A 5-star hotel known for great service and delicious food.',
      address: '📍 H/1 Scheme No.54 Vijay Nagar, Indore 452010, India',
    },
  ]);
  const [hotelDetails, setHotelDetails] = useState({
    title: '',
    description: '',
    address: '',
  });
  const [editIndex, setEditIndex] = useState(-1);

  // Function to handle input changes
  const handleInputChange = (key, value) => {
    setHotelDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  // Function to handle adding a new hotel
  const addHotel = () => {
    if (!hotelDetails.title || !hotelDetails.description || !hotelDetails.address) {
      Alert.alert('All fields are required!');
      return;
    }

    if (editIndex !== -1) {
      // Editing existing hotel
      const updatedHotels = hotels.map((hotel, index) =>
        index === editIndex ? hotelDetails : hotel
      );
      setHotels(updatedHotels);
      setEditIndex(-1);
    } else {
      // Adding new hotel
      setHotels([...hotels, hotelDetails]);
    }

    setHotelDetails({ title: '', description: '', address: '' });
  };

  // Function to handle editing a hotel
  const editHotel = (index) => {
    setHotelDetails(hotels[index]);
    setEditIndex(index);
  };

  // Function to handle deleting a hotel
  const deleteHotel = (index) => {
    Alert.alert('Confirm', 'Are you sure you want to delete this hotel?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const updatedHotels = hotels.filter((_, i) => i !== index);
          setHotels(updatedHotels);
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Admin - Manage Hotels</Text>

      <TextInput
        style={styles.input}
        placeholder="Hotel Title"
        value={hotelDetails.title}
        onChangeText={(text) => handleInputChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={hotelDetails.description}
        onChangeText={(text) => handleInputChange('description', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={hotelDetails.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />

      <TouchableOpacity style={styles.button} onPress={addHotel}>
        <Text style={styles.buttonText}>{editIndex !== -1 ? 'Update Hotel' : 'Add Hotel'}</Text>
      </TouchableOpacity>

      <View>
        {hotels.map((hotel, index) => (
          <View key={index} style={styles.hotelContainer}>
            <Text style={styles.hotelTitle}>{hotel.title}</Text>
            <Text>{hotel.description}</Text>
            <Text>{hotel.address}</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionButton} onPress={() => editHotel(index)}>
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => deleteHotel(index)}>
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hotelContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  hotelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AdminPage;
