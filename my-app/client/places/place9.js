// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place9 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_4x3.jpg',
                        }}
                    />

                    <Booking
                        Hname="Taj Mahal"
                        details="Details"
                        descrip="The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India."
                        place="Place"
                        adderess="📍- Agra, Uttar Pradesh-282001, INDIA"
                        amenities="Views"
                        imageUrl1="https://cdn.i-scmp.com/sites/default/files/images/methode/2016/06/30/ba318890-39de-11e6-9a6a-3421f730b241_image_hires.JPG"
                        imageUrl2="https://blog.redbus.in/wp-content/uploads/2021/08/shutterstock_723246211.jpg"
                        imageUrl3="https://th-thumbnailer.cdn-si-edu.com/WK2SsSKkMLnS8jFfh1K1cNR5jkw=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2F9b%2F14%2F9b14dbbf-77ac-4bcf-9078-c765c709d5e9%2Ftaj_mahal_at_morning_from_south-east.jpg"
                        imageUrl4="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/08/Agra-India-Taj-Mahal-reflected-in-Yamuna-River-in-late-afternoon-light_Credit_Alamy_A5CKE0.jpg"
                        imageUrl5="https://www.unusualtraveler.com/wp-content/uploads/2021/10/P3221562-735x551.jpg.webp"
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
export default Place9;

