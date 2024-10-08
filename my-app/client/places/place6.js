// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place6 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://static.toiimg.com/photo/77906016.cms',
                        }}
                    />

                    <Booking
                        Hname="Nepal"
                        details="Details"
                        descrip="Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain."
                        place="Place"
                        adderess="📍- Nepal"
                        amenities="Views"
                        imageUrl1="https://static.toiimg.com/photo/69789748.cms"
                        imageUrl2="https://static.toiimg.com/photo/msid-76439790/76439790.jpg?pl=76439790"
                        imageUrl3="https://www.dailyexcelsior.com/wp-content/uploads/2023/03/13-4.jpg"
                        imageUrl4="https://www.state.gov/wp-content/uploads/2019/04/Nepal-2123x1406.jpg"
                        imageUrl5="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg"
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
export default Place6;

