// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place2 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://www.justahotels.com/wp-content/uploads/2023/10/Places-To-Visit-in-Manali.jpg',
                        }}
                    />

                    <Booking
                        Hname="Manali"
                        details="Details"
                        descrip="Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination."
                        place="Place"
                        adderess="📍-  Manali , Himachal Pradesh , Pin Code:-175131 , INDIA"
                        amenities="Views"
                        imageUrl1="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Manali_Mountains.jpg/1200px-Manali_Mountains.jpg"
                        imageUrl2="https://image.kesari.in/upload/H3/paragliding-in-solang.jpg"
                        imageUrl3="https://www.holidify.com/images/bgImages/MANALI.jpg"
                        imageUrl4="https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg"
                        imageUrl5="https://www.thestatesman.com/wp-content/uploads/2019/12/manali.jpg"
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
export default Place2;

