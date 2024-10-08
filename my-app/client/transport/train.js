
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import Traincard from './transport';



const Train = ({ navigation }) => {


  const [search, setSearch] = useState('');
  // Filter the cards based on the search query
  const filteredCards = allCards.filter((card) => card.title.toLowerCase().includes(search.toLowerCase()));



  return (
    <View style={styles.container}>
      <ScrollView>
        {/* input seach bar */}
        <View style={styles.seachbar}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={search}
            onChangeText={(text) => setSearch(text)}
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
            <TouchableOpacity style={styles.ord1} onPress={(e) => navigation.navigate('Train')}>
              <Image
                style={styles.hotelicon}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1042/1042307.png',
                }}
              />
              <Text style={styles.ordbtn}>TRAINS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('profiles')}>
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


        {/*trains list */}
        {filteredCards.map((card, index) => (
          <TouchableOpacity key={index} >
            <Traincard
              title={card.title}
              date={card.date}
              frgo={card.frgo}
              togo={card.togo}
              ftime={card.ftime}
              ttime={card.ttime}
              timing={card.timing}
            />
          </TouchableOpacity>
        ))}



      </ScrollView>


      {/* nav bottom */}


    </View>
  );
};


const allCards = [
  {
    // train1
    title:"LADAKH EXPRESS | 12079",
    date:"- M - W - F -",
    frgo:"New Delhi",
    togo:"Ladakh",
    ftime:"03:15 PM",
    ttime:"05:40 AM",
    timing:"<------------------------- 38h 25m ------------------------->"
  },
  {
    // train2
    title:"MANALI EXPRESS | 15063",
    date:"S M - W T F S",
    frgo:"New Delhi",
    togo:"Manali",
    ftime:"03:15 AM",
    ttime:"12:40 PM",
    timing:"<------------------------- 8h 25m ------------------------->"
  },  
  {
    // train3
    title:"GULMARG EXPRESS | 11079",
    date:"- M T W - F S",
    frgo:"New Delhi",
    togo:"Gulmarg",
    ftime:"03:15 PM",
    ttime:"05:40 AM",
    timing:"<------------------------- 38h 25m ------------------------->"
  },
  {
    // train4
    title:"AGRA EXPRESS | 13059",
    date:"S M T W - F S",
    frgo:"New Delhi",
    togo:"Agra",
    ftime:"03:15 PM",
    ttime:"05:40 PM",
    timing:"<------------------------- 2h 25m ------------------------->"
  },
  {
    // train5
    title:"NEPAL EXPRESS | 16049",
    date:"S - T W - F -",
    frgo:"New Delhi",
    togo:"Nepal",
    ftime:"03:15 PM",
    ttime:"05:40 AM",
    timing:"<------------------------- 38h 25m ------------------------->"
  },
  {
    // train6
    title:"SIKKIM EXPRESS | 15039",
    date:"S M T W T F S",
    frgo:"New Delhi",
    togo:"Sikkim",
    ftime:"03:15 PM",
    ttime:"05:40 AM",
    timing:"<------------------------- 38h 25m ------------------------->"
  },
  {
    // train7
    title:"DHARAMSHALA EXPRESS | 18043",
    date:"S M T - T F S",
    frgo:"New Delhi",
    togo:"Dharamshala",
    ftime:"03:15 PM",
    ttime:"05:40 AM",
    timing:"<------------------------- 38h 25m ------------------------->"
  },


]







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

export default Train;


//=======================modal exam ==========================================



// import React from 'react';
// import { View, ScrollView, StyleSheet, TextInput, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
// import Traincard from './transport';



// const Train = ({ navigation }) => {


//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={{
//           uri: 'https://media.istockphoto.com/id/652899770/photo/computer-room.jpg?s=612x612&w=0&k=20&c=xqCQeechjpoFN4szIQNlEp8FkoIsFD0uerl0YOpHleI=',
//         }}
//         style={styles.backgroundImage}
//       >
//         <ScrollView style={styles.signpage}>
//           <View style={styles.placeviewbt}>
//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Home')}>
//               <Text style={styles.ordbtn}>MY INQUIRY</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Update')}>

//               <Text style={styles.ordbtn}>UPDATES</Text>
//             </TouchableOpacity>



//             {/* row 2 */}

//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Train')}>
//               <Text style={styles.ordbtn}>NOTIFICATION</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Login')}>
//               <Text style={styles.ordbtn}>LOGOUT</Text>
//             </TouchableOpacity>

//           </View>


//           <Text style={styles.text}>NOTIFICATION</Text>

//           <Traincard
//             title="Recent Daily Update"
//             frgo="we have the issue with airtel sever  , so today Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state. Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state."
           
//           />



//           <Traincard
//             title="Your Recent Inquiry"
//             frgo="Inquiry type"
//             togo="Internet"
//             ftime="Location"
//             ttime="MCA LAB - 2"
//             fime="Reportin time"
//             ttim="NOV - 7 , 12:45 pm"
//             timing="---------------------------------------------------------------------------------------"
//           />

//           <Traincard
//             title="Recent Daily Update"
//             frgo="we have the issue with airtel sever  , so today Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state. Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state."
            
//           />



//           <Traincard
//             title="Your Recent Inquiry"
//             frgo="Inquiry type"
//             togo="contant"
//             ftime="Location"
//             ttime="MCA LAB - 3"
//             fime="Reportin time"
//             ttim="NOV - 3 , 2:45 pm"
//             timing="---------------------------------------------------------------------------------------"
//           />


          
//           <Traincard
//             title="Recent Daily Update"
//             frgo="we have the issue with airtel sever  , so today Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state. Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state."
            
//           />



//           <Traincard
//             title="Your Recent Inquiry"
//             frgo="Inquiry type"
//             togo="ccty not working"
//             ftime="Location"
//             ttime="MCA LAB - 7"
//             fime="Reportin time"
//             ttim="NOV - 2 , 1:45 pm"
//             timing="---------------------------------------------------------------------------------------"
//           />



//           <Traincard
//             title="Recent Daily Update"
//             frgo="we have the issue with airtel sever  , so today Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state. Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state."
           
//           />

//           <Traincard
//             title="Your Recent Inquiry"
//             frgo="Inquiry type"
//             togo="Internet"
//             ftime="Location"
//             ttime="MCA LAB - 2"
//             fime="Reportin time"
//             ttim="NOV - 7 , 12:45 pm"
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
//     padding: 0,
//     marginTop: 20,
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
//     marginTop: 15,
//     height: 55,
//     width: '100%',
//     backgroundColor: 'white',
//     paddingTop: 10,
//     paddingLeft: 7,
//   },

//   text: {
//     marginBottom: 20,
//     alignSelf: 'center',
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
//     width: '24%',
//     height: 35, // Adjust the height as needed
//     borderRadius: 0,
//     // borderWidth: 1,
//     // borderColor: 'gray',
//     alignSelf: 'center',
//     marginBottom: 10,
//     marginTop: 6,
//     marginRight: 2,
//     backgroundColor: 'white',
//   },
//   ordbtn: {
//     textAlign: 'center',
//     marginBottom: 0,
//     marginTop: 6,
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: 'black',
//   },
// });

// export default Train;
