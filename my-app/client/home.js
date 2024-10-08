
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import Card from './Card';


const Homepg = ({ navigation }) => {

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
            <TouchableOpacity style={styles.ord1}>
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


        {/* hotel list */}
        {/* hotel 1 */}
        {/* <TouchableOpacity onPress={(e) => navigation.navigate('Booking')}>
          <Card
            imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/61/22/33/exterior-view.jpg?w=700&h=-1&s=1"
            title="Hotel Royal Savoy"
            // title={item.title}
            description="Hotel Royal Savoy is a luxurious 4* hotel situated behind the heritage Shalimar Mughal Gardens."
            adderes="📍- Behind Shalimar Garden, Srinagar , Kashmir - 190023 , India."
          />
        </TouchableOpacity> */}

        {filteredCards.map((card, index) =>(
<TouchableOpacity key={index} onPress={(e) => navigation.navigate(card.screen)}>
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              adderes={card.address}
            />
          </TouchableOpacity>
          ))}



        {/* Add more cards as needed */}
      </ScrollView>


      {/* nav bottom */}


    </View>
  );
};
const allCards = [
  {
    // hotel1
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/61/22/33/exterior-view.jpg?w=700&h=-1&s=1',
    title: 'Hotel Royal Savoy',
    description: 'Hotel Royal Savoy is a luxurious 4* hotel situated behind the heritage Shalimar Mughal Gardens.',
    address: '📍- Behind Shalimar Garden, Srinagar , Kashmir - 190023 , India.',
    screen: 'Booking',
  },
  {
    // hotel2
    imageUrl: 'https://image.wedmegood.com/resized/800X/uploads/member/34520/1452832096_10_110415_14120816250023836835.jpg',
    title: 'Sayaji Indore',
    description: 'Sayaji Hotel Indore offers a 5-star experience and is renowned for its delectable dining options and extraordinary services & no-tip policy.',
    address: '📍- H/1 , Scheme No.54 Vijay Nagar, Indore 452010 , India.',
    screen: 'hotel2',
  },
  {
    //hotel3
    // imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/99/fc/35/chic-modern-exclusive.jpg?w=700&h=-1&s=1',
    imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fhotel-room&psig=AOvVaw0-DJLrdXnL2CJq3x3gKBCx&ust=1728015068680000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDT5fSr8YgDFQAAAAAdAAAAABAE',
    title: 'The Park Indore',
    description: 'Chic, modern, exclusive yet eclectic, THE Park Indore, is a fine blend of extraordinary experiences truly symbolising the many within you.',
    address: '📍- Mr 10 Ida Plot No 5 Scheme No 7454 Main Road, Indore 452010 , India.',
    screen: 'hotel3',
  },
  {
    //hotel4
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/24/f2/11/e5/hrj-sarovar-portico-indore.jpg',
    title: 'HRJ Sarovar Portico, Indore',
    description: 'Finding an ideal quiet hotel in Indore does not have to be difficult. Welcome to Sarovar Portico - Indore, a nice option for travellers like you.',
    address: '📍- 562 Mahatma Gandhi Road Regal Square, Indore 452001 , India.',
    screen: 'hotel4',
  },
  {
    //hotel5
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e3/35/90/indore-marriott-hotel.jpg?w=700&h=-1&s=1",
    title: "Indore Marriott Hotel",
    description: "Indore Marriott Hotel, a 5-star hotel in Indore, India, has a total of 216 residential rooms including 11 suites.",
    address: "📍- H-2, Scheme No 54, Meghdoot Garden, Vijay Nagar, Indore 452010 , India.",
    screen: 'hotel5',
  },
  {
    //hotel6
    imageUrl:"https://media-cdn.tripadvisor.com/media/photo-s/1d/dc/5d/0a/playotel-premier-vijay.jpg",
    title:"Playotel Premier Vijay Nagar",
    description:"Playotel Premier Vijay Nagar, Indore is an upscale business hotel in Indore, India.",
    address:"📍- C-92, Vasant Vihar Vijay Nagar, Indore 452010 , India",
    screen: 'hotel6',
  },
  {
    //hotel7

    imageUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c8/09/a1/effotel-hotel.jpg?w=700&h=-1&s=1",
    title:"Effotel by Sayaji Indore",
    description:"Effotel Hotel is a young & vibrant hotel concept catering to needs of corporate, marriage & leisure traveler. ",
    address:"📍- Plot No 10 C C A Scheme No:94 ec C, Scheme 94 Sector CA, Indore 452010 , India.",
    screen: 'hotel7',
  },
  {
    //hotel8
    imageUrl:"https://r1imghtlak.mmtcdn.com/cc5661f4ba7811ed9aae0a58a9feac02.jpeg",
    title:"Ramada Encore By Wyndham Indore",
    description:"#12 of 501 hotels in Indore.",
    address:"📍- 150/3 Hare Krishna Vihaar, Near Iskcon Temple, Nipania, Indore , India.",
    screen: 'hotel8',
  },
  {
    //hotel9
    imageUrl:"https://indorerocks.com/uploadimages/hotel/croppedimage/sayaji_20190621062438.jpg",
    title:"Enrise By Sayaji Rau Indore",
    description:"Enrise By Sayaji Indore has a garden, fitness center, a bar and shared lounge in Indore.",
    address:"📍- 27/1 27/2 Village Pigdambar Tehsil Mhow, Indore 453331 , India.",
    screen: 'hotel9',
  },
  // {
  //   //hotel10
  //   imageUrl:"https://images.oyoroomscdn.com/uploads/hotel_image/87265/46fd8dd8a3ffd1f0.jpg",
  //   title:"OYO 4042 Hotel Mehar Residency",
  //   description:"How to Reach While hiring a taxi/auto-rickshaw from anywhere in the city to the hotel is a convenient option, you could also use the local city buses until the nearest bus stop.",
  //   address:"📍- 13 Residency Kibe Compound Behind Mdhumilan Talkies, Indore 452001 , India",
  //   screen: 'hotel10',
  // },
  // Add more card data here
];

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

export default Homepg;


//=======================exam rn============================================


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
// import Traincard from './transport/transport';

// const Homepg = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [contact, setContact] = useState('');



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


//           <Text style={styles.text}>MCA LAB</Text>

//           <Traincard
//             title="Recent Daily Update"
//             frgo="we have the issue with airtel sever  , so today Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state. Create a function that handles the logout action. This function can clear any user session data, such as tokens, and navigate to a login or sign-in screen. If you're using state management libraries like Redux or Mobx, you might need to dispatch an action to update the state."
//             timing="---------------------------------------------------------------------------------------"
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
//           <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('add')}>
//             <Text style={styles.ordbtn}>ADD INQUIRY</Text>
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

// export default Homepg;





