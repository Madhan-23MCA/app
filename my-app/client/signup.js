
//  // =====================================OG============================================


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , Image , Alert , ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import Base_url from "./config"

const SignInScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [contact, setContact] = useState('');



  const handleSignIn = async () => {
    try {
      const response = await fetch(`http://${Base_url}:3000/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          age,
          address,
          city,
          pincode,
          contact,
        }),
      });

      if (response.ok) {
        // Successfully signed in
        const data = await response.json();
        console.log('Signin successful:', data);
        // navigation.navigate('Login')
        // You can also navigate t=o a different screen
        if(data.message==="sucesss"){
          navigation.navigate("Login")
        }
        else{
          Alert.alert(data.message);
          navigation.navigate("Login")
        }
      } else {
        // Handle errors
        console.error('Signin failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <View style={styles.container}>
       <ImageBackground
        source={{
          uri: 'https://images.squarespace-cdn.com/content/v1/5b08f0e9266c07fe672e16ba/1662813533964-TZQEACVY5KFHJM7KWEVJ/Explorer%2BX%2BHERO%2BTraveling%2BMan.jpeg?format=1500w',
        }} // Replace with the path to your image
        style={styles.backgroundImage}
      >
      <ScrollView style={styles.signpage}>
      <Image
        style={styles.tinyLogo}
        source={require('./logo-removebg-preview.png')}

        // {{
        //   uri: 'https://logo-8fa5.kxcdn.com/wp-content/uploads/2014/10/explorer-travel-logo-free-640x517.jpg',
        // }}
      />
      <TextInput
        placeholder="Name"
        value={ name}
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
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
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
        placeholder="Contact Number"
        value={contact}
        onChangeText={(text) => setContact(text)}
        style={styles.input}
      />
      {/* <Button title="Sign in" onPress={handleSignIn} /> */}
      <TouchableOpacity style={styles.ord} onPress={handleSignIn}>
          <Text style={styles.ordbtn}>SIGN UP</Text>
        </TouchableOpacity>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 900,
    resizeMode: 'cover', // Cover the entire container
  },
  signpage:{
    width:'100%',
    padding:20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  back:{
    width: 40,
    height: 50,
    marginTop: 50,
    marginBottom : -50,
    marginLeft:10,
    alignItems : 'center',
  },
  tinyLogo: {
    width: 300,
    height: 200,
    marginTop: 10,
    marginBottom : 10,
    marginLeft:50,
    alignItems : 'center',
  },
  header: {
    fontSize: 23,
    marginLeft:62,
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft:40,
    alignItems:'center',
    marginBottom: 18,
    fontSize:18,
  },
  ord: {
    width: '49%',
    height: 40, // Adjust the height as needed
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 6,
    backgroundColor: 'white',
  },
  ordbtn: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 23,
    color: 'black',
  },
});

export default SignInScreen;



//======================== exam rn =====================================================================



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
// import Base_url from "./config"

// const SignInScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [age, setAge] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [contact, setContact] = useState('');



//   const handleSignIn = async () => {
//     try {
//       const response = await fetch(`http://${Base_url}/create`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           age,
//           address,
//           city,
//           pincode,
//           contact,
//         }),
//       });

//       if (response.ok) {
//         // Successfully signed in
//         const data = await response.json();
//         console.log('Signin successful:', data);
//         // navigation.navigate('Login')
//         // You can also navigate t=o a different screen
//         if (data.message === "sucesss") {
//           navigation.navigate("Login")
//         }
//         else {
//           Alert.alert(data.message);
//           navigation.navigate("Login")
//         }
//       } else {
//         // Handle errors
//         console.error('Signin failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={{
//           uri: 'https://media.istockphoto.com/id/652899770/photo/computer-room.jpg?s=612x612&w=0&k=20&c=xqCQeechjpoFN4szIQNlEp8FkoIsFD0uerl0YOpHleI=',
//         }} // Replace with the path to your image
//         style={styles.backgroundImage}
//       >
//         <ScrollView style={styles.signpage}>
//           <Text style={styles.ctext}>RVS COLLOGE OF ARTS AND SCIENCE</Text>
//           <Text style={styles.ctext}>SULUR</Text>
//           <Text style={styles.text}>MCA LAB</Text>

//           <Text style={styles.texts}>Name</Text>
//           <TextInput
//             placeholder="Name"
//             value={name}
//             onChangeText={(text) => setName(text)}
//             style={styles.input}
//           />
//           <Text style={styles.texts}>Email</Text>
//           <TextInput
//             placeholder="Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             style={styles.input}
//           />
//           <Text style={styles.texts}>Password</Text>
//           <TextInput
//             placeholder="Password"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry
//             style={styles.input}
//           />
//           <Text style={styles.texts}>User Type</Text>

//           <TextInput
//             placeholder="User Type"
//             value={contact}
//             onChangeText={(text) => setContact(text)}
//             style={styles.input}
//           />
//           {/* <Button title="Sign in" onPress={handleSignIn} /> */}
//           <TouchableOpacity style={styles.ord} onPress={handleSignIn}>
//             <Text style={styles.ordbtn}>SIGN UP</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: 900,
//     resizeMode: 'cover', // Cover the entire container
//   },
//   signpage: {
//     width: '100%',
//     padding: 20,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   back: {
//     width: 40,
//     height: 50,
//     marginTop: 50,
//     marginBottom: -50,
//     marginLeft: 10,
//     alignItems: 'center',
//   },
//   tinyLogo: {
//     width: 300,
//     height: 200,
//     marginTop: 10,
//     marginBottom: 10,
//     marginLeft: 50,
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 23,
//     marginLeft: 62,
//     marginTop: 10,
//   },
//   text: {
//     marginBottom: 20,
//     alignSelf: 'center',
//     padding: 10,
//     fontSize: 44,
//     color: 'white',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   texts: {
//     marginBottom: 20,
//     marginLeft: 40,
//     padding: 10,
//     fontSize: 19,
//     color: 'white',
//     marginTop: 0,
//     marginBottom: 0,
//   },
//   input: {
//     width: '80%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//     marginLeft: 40,
//     alignItems: 'center',
//     marginBottom: 18,
//     fontSize: 18,
//     color: 'white',
//   },
//   ord: {
//     width: '49%',
//     height: 40, // Adjust the height as needed
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginBottom: 10,
//     marginTop: 6,
//     backgroundColor: 'white',
//   },
//   ctext: {
//     fontSize: 24,
//     color: 'white',
//     marginTop: 10,
//     marginBottom: 0,
//     alignSelf: 'center',
//   },
//   ordbtn: {
//     textAlign: 'center',
//     marginBottom: 10,
//     marginTop: 6,
//     fontWeight: 'bold',
//     fontSize: 23,
//     color: 'black',
//   },
// });

// export default SignInScreen;





