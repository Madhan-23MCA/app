
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import Card from './Card';



const Placepg = ({ navigation }) => {


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
            <TouchableOpacity style={styles.ord1}>
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


        {/* places list */}

        {filteredCards.map((card, index) => (
          <TouchableOpacity key={index} onPress={(e) => navigation.navigate(card.screen)}>
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
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
    // place1
    imageUrl: "https://www.kosha.co/journal/wp-content/uploads/2022/06/leh-ladakhf-1.jpg",
    title: "Leh Ladakh",
    description: "Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes.",
    screen: 'place1',
  },
  {
    // place2           
    imageUrl:"https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg",
    title: "Manali",
    description: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
    screen: 'place2',
  },
  {
    // place3
    imageUrl:"https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp",
    title:"Dharamshala",
    description:"Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile.",
    screen: 'place3',
  },
  {
    // place4
    
    imageUrl:"https://static.toiimg.com/photo/73667509.cms",
    title:"Khajjiar",
    description:"Khajjiar is a hill station in the north Indian state of Himachal Pradesh. Dating from the 12th century, Khajji Nag Temple is dedicated to a serpent god.",
    screen: 'place4',
  },
  {
    // place5
    imageUrl:"https://media2.thrillophilia.com/images/photos/000/110/596/original/1685714722_1qpoy0zzvawzvr8ar2qv68nl84fk_244.jpg?width=975&height=600",
    title:"Spiti Valley",
    description:"Spiti is a high-altitude region of the Himalayas, located in the north-eastern part of the northern Indian state of Himachal Pradesh. The name `Spiti` means `The middle land`",
    screen: 'place5',
  },
  {
    // place6
    imageUrl:"https://static.toiimg.com/photo/77906016.cms",
    title:"Nepal",
    description:"Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain.",
    screen: 'place6',
  },
  {
    // place7
    imageUrl:"https://www.andbeyond.com/wp-content/uploads/sites/5/Bhutan-Punakha-Dzong-Sunset-1326288165-Website-1920x1080-fill-gravityauto.jpg",
    title:"Bhutan",
    description:"image of Bhutanen.wikipedia.org Bhutan, a Buddhist kingdom on the Himalayas’ eastern edge, is known for its monasteries, fortresses (or dzongs) and dramatic landscapes that range from subtropical plains to steep mountains and valleys. In the High Himalayas, peaks such as 7,326m Jomolhari are popular trekking destinations.",
    screen: 'place7',
  },
  {
    // place8
    imageUrl:"https://www.esikkimtourism.in/wp-content/uploads/2019/04/3rd-image.jpg",
    title:"Sikkim",
    description:"Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga.",
    screen: 'place8',
  },
  {
    //place9
    imageUrl:"https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg",
    title:"Taj Mahal ",
    description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
    screen: 'place9',
  },
  {
    //place10
    imageUrl:"https://www.hindustantimes.com/ht-img/img/2023/05/19/1600x900/Gulmarg_Kashmir_Valley_1684489094985_1684489103602.jpg",
    title:"Gulmarg",
    description:"Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, popular tourist destination, popular skiing destination and a notified area committee in the Baramulla district in the Indian union territory of Jammu and Kashmir. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar.",
    screen: 'place10',
  },
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

export default Placepg;
