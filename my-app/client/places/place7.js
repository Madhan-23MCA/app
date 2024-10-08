// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place7 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Bhutan-Punakha-Dzong-Sunset-1326288165-Website-1920x1080-fill-gravityauto.jpg',
                        }}
                    />

                    <Booking
                        Hname="Bhutan"
                        details="Details"
                        descrip="image of Bhutanen.wikipedia.org
                        Bhutan, a Buddhist kingdom on the Himalayas’ eastern edge, is known for its monasteries, 
                        fortresses (or dzongs) and dramatic landscapes that range from subtropical plains to steep mountains and valleys. In the High Himalayas, 
                        peaks such as 7,326m Jomolhari are popular trekking destinations."
                        place="Place"
                        adderess="📍- BHUTAN"
                        amenities="Views"
                        imageUrl1="https://images.indianexpress.com/2023/08/bhutan-horizontal.png"
                        imageUrl2="https://www.nativeplanet.com/img/2023/08/beautiful-landscape-of-bhutan_1692426787777-1200x675-20230819121002.jpg"
                        imageUrl3="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/08/31113048/Bhutan-tourist-fee.jpg"
                        imageUrl4="https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/cover-for-Places-To-Visit-in-Punakha.jpg"
                        imageUrl5="https://s.greattibettour.com/photos/2020/10/paro-dzong-31-13048.jpg"
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
export default Place7;

