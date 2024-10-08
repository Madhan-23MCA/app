
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';


const Logo = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.ord} onPress={() => {
      navigation.navigate('Login')
    }}>
      <ImageBackground
        source={{
          uri: 'data:image/jpeg;base64,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',
        }} // Replace with the path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.container}>

          <Image
            style={styles.tinyLogo}
            source={require('./logo-removebg-preview.png')}
          />
          {/* <Text style={styles.text}>Travel Explorer</Text> */}
          {/* <Button title="Sign up" style={styles.welcome} onPress={(e)=>navigation.navigate('Login')}/> */}

        </View>

      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 44,
    color: 'white',
    marginTop: 50,
    marginBottom: 30,
  },
  det: {
    marginTop: 10,
    width: 400,
    marginBottom: 50,
  },

  tinyLogo: {
    width: 250,
    height: 200,
    marginTop: -340,
    alignItems: 'center',
  },
  ord: {
    height: 1000,

  },
});
export default Logo;







//==============================================modal exam rn==========================================================


// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';


// const Logo = ({ navigation }) => {
//   return (
//     <TouchableOpacity style={styles.ord}
//     //  onPress={() => { navigation.navigate('Login')    }}
//     >
//       <ImageBackground
//         source={{
//           uri: 'https://media.istockphoto.com/id/652899770/photo/computer-room.jpg?s=612x612&w=0&k=20&c=xqCQeechjpoFN4szIQNlEp8FkoIsFD0uerl0YOpHleI=',
//         }} // Replace with the path to your image
//         style={styles.backgroundImage}
//       >
//         <View style={styles.container}>
//           <Text style={styles.ctext}>RVS COLLOGE OF ARTS AND SCIENCE</Text>
//           <Text style={styles.ctext}>SULUR</Text>
//           <Text style={styles.text}>MCA LAB</Text>
//           <Button title=" Sign In for admin" style={styles.welcome} onPress={(e) => navigation.navigate('Login')} />
//           <Text style={styles.txt}></Text>
//           <Button title=" Sign In for faculty" style={styles.welcome} onPress={(e) => navigation.navigate('Login')} />
//           <Text style={styles.txt}></Text>
//           <Button title="Sign up for new user" style={styles.welcome} onPress={(e) => navigation.navigate('Signup')} />
          
//         </View>

//       </ImageBackground>
//     </TouchableOpacity>
//   );
// };
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Cover the entire container
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   text: {
//     fontSize: 44,
//     color: 'white',
//     marginTop: -150,
//     marginBottom: 100,
//   },
//   ctext: {
//     fontSize: 24,
//     color: 'white',
//     marginTop: -150,
//     marginBottom: 150,
//   },
//   det: {
//     marginTop: 10,
//     width: 400,
//     marginBottom: 50,
//   },
//   txt: {
//     fontSize: 23,
//     color: 'red',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   tinyLogo: {
//     width: 250,
//     height: 200,
//     marginTop: -340,
//     alignItems: 'center',
//   },
//   ord: {
//     height: 1000,

//   },
//   welcome: {
//     marginTop: 50,
//     marginBottom: 30,
//   },
  
// });
// export default Logo;


