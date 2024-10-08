
// import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import Profilecard from './profilecard';



const Profile = ({ navigation }) => {

// const [data,setDate]=useState()
// useEffect(()=>{
//   const fetchdata=async()=>{
//   const token =  await AsyncStorage.getItem('token',data.token)
//     const data=await fetch("http://192.168.214.61/profile",{
//       method : 'get',
//       headers : {
//         Authorization:"Bearer "+ token,
//         'Content-Type':'application/json'
//       }
//     })
//     const result = await data.json()
//     console.log(result)
//   }
// })

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* input seach bar */}
        <View style={styles.seachbar}>
          <TextInput
            style={styles.input}
            placeholder="Search"
          />

          <View style={styles.placeviewbt}>
            <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Home')}>
              <Image
                style={styles.hotelicon}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmeHH6jcIAytcvLjLIfQBiHe2UPbC_iCj1dA&usqp=CAU',
                }}
              />
              <Text style={styles.ordbtn}>HOTELS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Place')}>
              <Image
                style={styles.hotelicon}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Sa9T5flN0ovGcmvY7luILcPvrgHf-fxNSBNrvomZm6TMUC4_WzZX7635bSO69Rf2Z68&usqp=CAU',
                }}
              />
              <Text style={styles.ordbtn}>PLACES</Text>
            </TouchableOpacity>
          </View>


          {/* row 2 */}

          <View style={styles.placeviewbt}>
            <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Train')}>
              <Image
                style={styles.hotelicon}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1042/1042307.png',
                }}
              />
              <Text style={styles.ordbtn}>TRAINS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ord1} onPress={(e) => navigation.navigate('profiles')}>
              <Image
                style={styles.hotelicon}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgOxvcASreAbVug6IyRbJL6V06_7AYbhG6UaGwhcLv_TLzEGyy8XnoI6OKnf5jkZBt4E&usqp=CAU',
                }}
              />
              <Text style={styles.ordbtn}>PROFILE</Text>
            </TouchableOpacity>

          </View>
        </View>


        {/* hotel list */}
        {/* hotel 1 */}

          <Profilecard
            date="PERSONAL DETAILS"
            imageUrl="https://cdn-icons-png.flaticon.com/512/6646/6646519.png"
            title="M adhan "
            frgo="Age                                   :          22"
            togo="Gender                             :          Male"
            ftime="Contact                            :          9345015975"
            ttime="Email                                 :          madhanv3303@gmail.com"
            timing="---------------------------------------------------------------------------------------"
          />



      </ScrollView>


      {/* nav bottom */}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: -10,
    marginBottom: 1,
  },
  seachbar: {
    height: 178,
    marginTop: 4,
    marginBottom: -20,

  },
  input: {
    height: 44,
    width: 370,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 7,
    paddingLeft: 13,
    fontSize: 18,
  },
  placeviewbt: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 0,
  },
  ord: {
    width: '47%',
    height: 45, // Adjust the height as needed
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginRight: 20,
    marginTop: 4,
    backgroundColor: 'white',
  },
  ord1: {
    width: '47%',
    height: 45, // Adjust the height as needed
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginRight: 20,
    marginTop: 4,
    // backgroundColor: 'white',
    backgroundColor: '#A7A8AE',
  },
  ordbtn: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -22,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 25,
    color: 'black',
  },
  hotelicon: {
    height: 20,
    marginLeft: 39,
    marginTop: 10,
    width: 20,
  },
});

export default Profile;


//============================modal exam rn==============================================

// // import React, { useEffect, useState } from 'react';
// import { View, ScrollView, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
// import Profilecard from './profilecard';



// const Profile = ({ navigation }) => {

//   // const [data,setDate]=useState()
//   // useEffect(()=>{
//   //   const fetchdata=async()=>{
//   //   const token =  await AsyncStorage.getItem('token',data.token)
//   //     const data=await fetch("http://192.168.214.61/profile",{
//   //       method : 'get',
//   //       headers : {
//   //         Authorization:"Bearer "+ token,
//   //         'Content-Type':'application/json'
//   //       }
//   //     })
//   //     const result = await data.json()
//   //     console.log(result)
//   //   }
//   // })

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={{
//           uri: 'https://getsiteowl.com/wp-content/uploads/2023/02/Header-image.jpg',
//         }}
//         style={styles.backgroundImage}
//       >
//         <ScrollView style={styles.signpage}>
//           <View style={styles.placeviewbt}>
//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Home')}>
//               <Text style={styles.ordbtn}>HOME</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Home')}>

//               <Text style={styles.ordbtn}>EXPERIENCE</Text>
//             </TouchableOpacity>
//           </View>


//           {/* row 2 */}

//           <View style={styles.placeviewbt}>
//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Train')}>
//               <Text style={styles.ordbtn}>SKLLS</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('profiles')}>
//               <Text style={styles.ordbtn}>PROFILE</Text>
//             </TouchableOpacity>

//           </View>


//           <Text style={styles.text}>PROFILE</Text>

//           <Profilecard
//             date="PERSONAL DETAILS"
//             imageUrl="https://cdn-icons-png.flaticon.com/512/6646/6646519.png"
//             title="MOHAMED ASHIK  "
//             frgo="                   EDUCATION          :          MCA"
//             togo="                      Current Working Google"
//             timing="---------------------------------------------------------------------------------------"
//           />


//           <Profilecard
//             title="Experience                         "
//             frgo=" FullStack Developer"
//             togo="
//                    Current Working Google                                          
//             "
//             ttime="Mar 2019 - Present 2 months"
//             timing="---------------------------------------------------------------------------------------"
//           />

//           <Profilecard
//             title="Education                          "
//             frgo="  MCA"
//             togo=" RVS college of arts and science , sulur"
//             ttime="2022  -  2024"
//             timing="---------------------------------------------------------------------------------------"
//           />
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: 1200,
//     resizeMode: 'cover', // Cover the entire container
//     marginBottom: 20,

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
//     marginBottom: 50,
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
//   placeviewbt: {
//     display: 'flex',
//     flexDirection: 'row',
//     marginBottom: -70,
//     marginTop: 70,
//   },

//   text: {
//     marginBottom: 20,
//     marginLeft: 120,
//     alignItems: 'center',
//     padding: 10,
//     fontSize: 34,
//     color: 'white',
//     marginTop: 100,
//     marginBottom: 10,
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
//   },
//   cvv: {
//     width: '38%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//     marginLeft: 199,
//     marginTop: -55,
//     alignItems: 'center',
//     fontSize: 18,
//   },
//   date: {
//     width: '38%',
//     height: 45,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//     marginLeft: 42,
//     alignItems: 'center',
//     fontSize: 18,
//   },
//   ord: {
//     width: '49%',
//     height: 40, // Adjust the height as needed
//     borderRadius: 10,
//     alignSelf: 'center',
//     marginBottom: 10,
//     marginTop: 6,
//     marginRight: 8,
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
// });

// export default Profile;
