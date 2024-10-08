// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place5 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://media2.thrillophilia.com/images/photos/000/110/596/original/1685714722_1qpoy0zzvawzvr8ar2qv68nl84fk_244.jpg?width=975&height=600',
                        }}
                    />

                    <Booking
                        Hname="Spiti Valley"
                        details="Details"
                        descrip="Spiti is a high-altitude region of the Himalayas, located in the north-eastern part of the northern Indian state of Himachal Pradesh. The name `Spiti` means `The middle land`."
                        place="Place"
                        adderess="📍- SPITI VALLEY , HIMACHAL PRADESH , pincode-172114 , India"
                        amenities="Views"
                        imageUrl1="https://www.india.com/wp-content/uploads/2020/12/spiti-valley.jpg"
                        imageUrl2="https://www.transformingtravels.com/wp-content/uploads/2021/05/Key-Monastery.jpg"
                        imageUrl3="https://www.tripsavvy.com/thmb/nMLOLSs6ZISWixPUvOuZRBsK2yE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-519309190-7706d8f2e6f84dd0ad3b0ed1b164feff.jpg"
                        imageUrl4="https://www.travelkingindia.com/wp-content/uploads/2021/01/IMG_1769-01-01.jpeg"
                        imageUrl5="https://instahimachal.com/wp-content/uploads/2022/09/Spiti-Winter-Trip-Himachal-Pradesh-Insta-Himachal-jpeg.webp"
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
export default Place5;

