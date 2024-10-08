// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place1 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://www.kosha.co/journal/wp-content/uploads/2022/06/leh-ladakhf-1.jpg',
                        }}
                    />

                    <Booking
                        Hname="Leh Ladakh"
                        details="Details"
                        descrip="Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes."
                        place="Place"
                        adderess="📍-  Leh- Ladakh Jammu and Kashmir, Pin 194101 , India."
                        amenities="Views"
                        imageUrl1="https://www.holidify.com/images/bgImages/LADAKH.jpg"
                        imageUrl2="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_48/1429230/364387.jpg"
                        imageUrl3="https://traveldudes.com/wp-content/uploads/2020/09/Leh-Ladakh.jpg"
                        imageUrl4="https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1679120168/bbj/abbu2wae5e86widjjquf.jpg"
                        imageUrl5="https://swastikholiday.com/leh-ladakh/images/leh-ladakh-itinerary-2.jpg "
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
export default Place1;

