// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place8 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://www.esikkimtourism.in/wp-content/uploads/2019/04/3rd-image.jpg',
                        }}
                    />

                    <Booking
                        Hname="Sikkim"
                        details="Details"
                        descrip="Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. 
                        Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga."
                        place="Place"
                        adderess="📍- SIKKIM, Pincode-737101, INDIA"
                        amenities="Views"
                        imageUrl1="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/07/Tsomgo-Lake1-1.jpg"
                        imageUrl2="https://www.holidify.com/images/cmsuploads/compressed/silk-route-to-nathula-pass_20220131160855.jpeg"
                        imageUrl3="https://i0.wp.com/eos.org/wp-content/uploads/2021/03/kanchenjunga-mountain-tshoka-basecamp.jpg?fit=820%2C615&ssl=1"
                        imageUrl4="https://media1.thrillophilia.com/filestore/16s75l0cbrove9e5p7q0cp0dogii_shutterstock_1803558928.jpg"
                        imageUrl5="https://www.nationsonline.org/gallery/India/Terraced-rice-fields-of-Sikkim-India.jpg"
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
export default Place8;

