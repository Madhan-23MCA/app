
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Base_url from './config';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Replace the console.log with your authentication logic
    try {
      const response = await fetch(`http://${Base_url}:3000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Successfully signed in
        const data = await response.json();
        console.log('Signin successful:', data);
        if (data.message === "sucesss") {
          // await AsyncStorage.setItem('token',data.token)
          navigation.navigate("Home")
        }
        else {
          Alert.alert(data.message)
        }
        // You can also navigate t=o a different screen
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
          // uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhotel-room&psig=AOvVaw3sMCoUZyTryfFrRuv2GHLm&ust=1728013850537000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDmjbOn8YgDFQAAAAAdAAAAABAE',
          
        }} // Replace with the path to your image
        style={styles.backgroundImage}
      >
        <Image
          style={styles.tinyLogo}
          // source={require('./logo-removebg-preview.png')}

        // {{
        //   uri: 'https://logo-8fa5.kxcdn.com/wp-content/uploads/2014/10/explorer-travel-logo-free-640x517.jpg',
        // }}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Text style={styles.signin} onPress={(e) => navigation.navigate('Signup')}>Sign Up For New ?</Text>
        {/* <Button style={styles.log} title="Login" onPress={handleLogin} /> */}

        <TouchableOpacity style={styles.ord} onPress={handleLogin}>
          <Text style={styles.ordbtn}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ord} onPress={handleLogin}>
          <Text style={styles.ordbtn}>ADMIN</Text>
        </TouchableOpacity>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rebeccapurple',
  },

  tinyLogo: {
    width: 250,
    height: 200,
    marginTop: 100,
    marginBottom: 10,
    alignItems: 'center',
    marginLeft: 80,
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 40,
    alignItems: 'center',
    padding: 10,
  },
  signin: {
    // color: 'blue',
    marginBottom: 15,
    marginTop: -15,
    marginLeft: 271,
  },
  log: {
    marginLeft: 200,
  },
  ord: {
    width: '43%',
    height: 45, // Adjust the height as needed
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

export default LoginScreen;


//===========================================================modal exam============================================


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
// import Base_url from './config';


// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Add your authentication logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Replace the console.log with your authentication logic
//     try {
//       const response = await fetch(`http://${Base_url}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       if (response.ok) {
//         // Successfully signed in
//         const data = await response.json();
//         console.log('Signin successful:', data);
//         if (data.message === "sucesss") {
//           // await AsyncStorage.setItem('token',data.token)
//           navigation.navigate("Home")
//         }
//         else {
//           Alert.alert(data.message)
//         }
//         // You can also navigate t=o a different screen
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
//        <Text style={styles.ctext}>RVS COLLOGE OF ARTS AND SCIENCE</Text>
//           <Text style={styles.ctext}>SULUR</Text>
//           <Text style={styles.text}>MCA LAB</Text>
//         <Text style={styles.texts}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           onChangeText={text => setEmail(text)}
//           value={email}
//         />
//         <Text style={styles.texts}>Password</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           onChangeText={text => setPassword(text)}
//           value={password}
//         />
//         {/* <Button style={styles.log} title="Login" onPress={handleLogin} /> */}

//         <TouchableOpacity style={styles.ord} onPress={handleLogin}>
//           <Text style={styles.ordbtn}>LOGIN</Text>
//         </TouchableOpacity>
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
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'rebeccapurple',
//   },

//   tinyLogo: {
//     width: 250,
//     height: 200,
//     marginTop: 100,
//     marginBottom: 10,
//     marginLeft: 80,
//   },
//   text: {
//     marginBottom: 20,
//     alignSelf: 'center',
//     padding: 10,
//     fontSize: 44,
//     color: 'white',
//     marginTop: 10,
//     marginBottom: 70,
//   },
//   texts: {
//     marginBottom: 20,
//     marginLeft: 40,
//     padding: 10,
//     fontSize: 16,
//     color: 'white',
//     marginTop: 0,
//     marginBottom: 0,
//   },
//   input: {
//     color: 'white',
//     width: '80%',
//     height: 45,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     marginLeft: 40,
//     alignItems: 'center',
//     padding: 10,
//   },
//   signin: {
//     // color: 'blue',
//     marginBottom: 15,
//     marginTop: -15,
//     marginLeft: 271,
//   },
//   log: {
//     marginLeft: 200,
//   },
//   ord: {
//     width: '43%',
//     height: 45, // Adjust the height as needed
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginBottom: 10,
//     marginTop: 6,
//     backgroundColor: 'white',
//   },
//   ordbtn: {
//     textAlign: 'center',
//     marginBottom: 10,
//     marginTop: 6,
//     fontWeight: 'bold',
//     fontSize: 23,
//     color: 'black',
//   },
//   ctext: {
//     fontSize: 24,
//     color: 'white',
//     marginTop: 10,
//     marginBottom: 0,
//     alignSelf: 'center',
//   },
// });

// export default LoginScreen;

// ------------------------------

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Image, Alert, ImageBackground, TouchableOpacity } from 'react-native';
// import Base_url from './config';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (isAdmin = false) => {
//     // Log the type of login
//     console.log('Login attempt:', isAdmin ? 'Admin' : 'User');
//     console.log('Email:', email);
//     console.log('Password:', password);

//     try {
//       const response = await fetch(`http://${Base_url}:3000/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           role: isAdmin ? 'admin' : 'user', // Sending role in request
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login successful:', data);

//         if (data.message === 'success') {
//           // Role-based navigation
//           if (data.role === 'admin') {
//             navigation.navigate('Admin'); // Navigate to the Admin screen
//           } else {
//             navigation.navigate('Home'); // Navigate to the Home screen for regular users
//           }
//         } else {
//           Alert.alert('Login failed', data.message);
//         }
//       } else {
//         console.error('Login failed:', response.statusText);
//         Alert.alert('Login Error', 'Invalid credentials, please try again.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       Alert.alert('Error', 'An error occurred during login. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={{}} // Replace with your background image if needed
//         style={styles.backgroundImage}
//       >
//         <Image
//           style={styles.logo}
//           source={require('./logo-removebg-preview.png')} // Replace with your logo
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           onChangeText={setEmail}
//           value={email}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           onChangeText={setPassword}
//           value={password}
//         />

//         <Text style={styles.signupText} onPress={() => navigation.navigate('Signup')}>
//           Sign Up For New?
//         </Text>

//         {/* User Login Button */}
//         <TouchableOpacity style={styles.button} onPress={() => handleLogin(false)}>
//           <Text style={styles.buttonText}>User Login</Text>
//         </TouchableOpacity>

//         {/* Admin Login Button */}
//         <TouchableOpacity style={styles.button} onPress={() => handleLogin(true)}>
//           <Text style={styles.buttonText}>Admin Login</Text>
//         </TouchableOpacity>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: 900,
//     resizeMode: 'cover',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 250,
//     height: 200,
//     marginBottom: 30,
//     alignSelf: 'center',
//   },
//   input: {
//     width: '80%',
//     height: 45,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   signupText: {
//     alignSelf: 'flex-end',
//     marginRight: 40,
//     marginBottom: 20,
//     color: '#007BFF',
//   },
//   button: {
//     width: '60%',
//     height: 45,
//     borderRadius: 10,
//     backgroundColor: '#007BFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

// export default LoginScreen;




  