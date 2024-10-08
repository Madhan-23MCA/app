// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place3 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://www.savaari.com/blog/wp-content/uploads/2023/05/Dharamshala-mountain-range-min-1-1.webp',
                        }}
                    />

                    <Booking
                        Hname="Dharamshala"
                        details="Details"
                        descrip="Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile."
                        place="Place"
                        adderess="📍- DHARAMSALA , HIMACHAL PRADESH , Pincode: 176 215 , INDIA."
                        amenities="Views"
                        imageUrl1="https://images.indianexpress.com/2022/01/dharamshala.jpg"
                        imageUrl2="https://www.travelmagica.com/wp-content/uploads/2019/07/dalhousi1.jpg"
                        imageUrl3="https://www.exoticmiles.com/wp-content/uploads/2020/05/Dharamshala-1.jpg"
                        imageUrl4="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/9d/78.jpg"
                        imageUrl5="https://media.istockphoto.com/id/105137790/photo/india-dharamsala.jpg?s=612x612&w=0&k=20&c=0fdwsqdOBn-HvtgNNu6HgucxgPiIPmxUc3FsjqOva_M="
                    />
                    <Text>hello</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 15,
    },
    hotelImg: {
        width: '100%',
        height: 300, // Adjust the height as needed
        borderRadius: 10,
        marginBottom: -10,
    },

});
export default Place3;

