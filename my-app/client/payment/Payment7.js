// import React from 'react';
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text, Alert } from 'react-native';




const Payment7 = ({ navigation }) => {

  
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');


  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [data, setDate] = useState('');
  const [cvv, setCvv] = useState('');


  const [isClicked, setIsClicked] = useState(false);
  const [isClickedc, setIsClickedc] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.hotel}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c8/09/a1/effotel-hotel.jpg?w=700&h=-1&s=1',
            }}
          />
        </View>


        <View style={styles.pay}>
          <Text style={styles.lab}>Effotel by Sayaji Indore</Text>
          <Text style={styles.lab}>Effotel Hotel is a young & vibrant hotel concept catering to needs of corporate, marriage & leisure traveler. </Text>
          <Text style={styles.lab}>📍- Plot No 10 C C A Scheme No:94 ec C, Scheme 94 Sector CA, Indore 452010 , India.</Text>


          {/* dropdown for upi payment try */}
          <ScrollView>
          <TextInput
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Age"
              value={age}
              onChangeText={(text) => setAge(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="City"
              value={city}
              onChangeText={(text) => setCity(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Pincode"
              value={pincode}
              onChangeText={(text) => setPincode(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Contact Number"
              value={contact}
              onChangeText={(text) => setContact(text)}
              style={styles.input}
            />

            <TouchableOpacity style={styles.dropdown} onPress={() => setIsClicked(!isClicked)}>
              <Text style={styles.upititle}>G-Pay</Text>
              {isClicked ? (<Image
                style={styles.upimg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmv7SGOGNSer_Xh70cU8OtjmnIKNDNFL3zP74WwpOb2FKy-ZTLrAFkooOZ0fDhbQmrsMs&usqp=CAU',
                }}
              />) : (
                <Image
                  style={styles.upimg}
                  source={{
                    uri: 'https://t3.ftcdn.net/jpg/04/83/39/12/360_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg',
                  }}
                />)}
            </TouchableOpacity>
            {/* ===================================dropdown area for pay=================================================================== */}


            {isClicked ? <View style={styles.upipayarea}>
              <Image
                style={styles.qr}
                source={require('./qr1.jpg')}
              />
              <TouchableOpacity style={styles.ord} onPress={() => {
                Alert.alert('Payment Successfully Thanks For Booking')
                navigation.navigate('Home')
              }
              }>
                <Text style={styles.ordbtn}>Pay Now</Text>
              </TouchableOpacity>
            </View> : null}

            {/* ============================================card payment================================================ */}


            <TouchableOpacity style={styles.dropdown} onPress={() => setIsClickedc(!isClickedc)}>
              <Text style={styles.upititle}>Card Payment</Text>
              {isClickedc ? (<Image
                style={styles.upimg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmv7SGOGNSer_Xh70cU8OtjmnIKNDNFL3zP74WwpOb2FKy-ZTLrAFkooOZ0fDhbQmrsMs&usqp=CAU',
                }}
              />) : (
                <Image
                  style={styles.upimg}
                  source={{
                    uri: 'https://t3.ftcdn.net/jpg/04/83/39/12/360_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg',
                  }}
                />)}
            </TouchableOpacity>
            {isClickedc ? <View style={styles.upipayarea}>
              <TextInput
                placeholder="Card Number"
                value={card}
                onChangeText={(text) => setCard(text)}
                style={styles.input}
              />

              <TextInput
                placeholder="MM/YY"
                value={data}
                onChangeText={(text) => setDate(text)}
                style={styles.date}
              />


              <TextInput
                placeholder="Cvv"
                value={cvv}
                onChangeText={(text) => setCvv(text)}
                secureTextEntry
                style={styles.cvv}
              />
              <TouchableOpacity style={styles.ord} onPress={() => {
                Alert.alert('Payment Successfully Thanks For Booking')
                navigation.navigate('Home')
              }}>
                <Text style={styles.ordbtn}>Pay Now</Text>
              </TouchableOpacity>
          <Text style={styles.lab}>RuPay Cards</Text>
          <Text style={styles.lab}>VISA Cards</Text>
          <Text style={styles.lab}>Credit Card</Text>

            </View> : null}
          </ScrollView>
        </View>

      </ScrollView>

    </View>
  )
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 350,
    height: 250,
    marginTop: 50,
    marginBottom: -25,
    marginLeft: 35,
    marginRight: 60,
    alignItems: 'center',
    borderRadius: 5,
  },
  lab: {
    marginRight: 10,
    marginLeft: 40,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  dropdown: {
    width: "90%",
    marginLeft: 5,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 40,
    alignSelf: 'center',
    marginBottom: 10,

  },
  upititle: {
    width: "80%",
    height: 40,
    marginRight: 10,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    borderColor: 'gray',
    paddingLeft: 10,
    // backgroundColor: 'blue',
    paddingTop: 8,
    borderRadius: 9,
  },
  upimg: {
    width: "7%",
    height: 30,
    marginLeft: 320,
    marginBottom: 10,
    marginTop: -50,
  },
  upipayarea: {
    width: "90%",
    height: 400,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 30,
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginBottom: 10,
    elevation: 5,
  },
  qr: {
    width: '94%',
    height: 300,
    alignSelf: 'center',

  },
  pay: {
    backgroundColor: 'white',
    paddingTop: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 7,
    height: 1150,
    width: '90%',
    marginLeft: 10,
    marginBottom: 10,
  },

  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    alignSelf: 'center',

    marginBottom: 18,
    fontSize: 18,
  },
  cvv: {
    width: '38%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft: 185,
    marginTop: -55,
    alignItems: 'center',
    fontSize: 18,
  },
  ord: {
    width: '43%',
    height: 45, // Adjust the height as needed
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 6,
    backgroundColor: 'blue',
  },
  date: {
    width: '38%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft: 32,
    alignItems: 'center',
    fontSize: 18,
  },
  ordbtn: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 23,
    color: 'white',
  },
  
});

export default Payment7;