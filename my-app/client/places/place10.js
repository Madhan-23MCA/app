// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place10 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://www.hindustantimes.com/ht-img/img/2023/05/19/1600x900/Gulmarg_Kashmir_Valley_1684489094985_1684489103602.jpg',
                        }}
                    />

                    <Booking
                        Hname="Gulmarg"
                        details="Details"
                        descrip="Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, popular tourist destination, popular skiing destination and a notified area committee in the Baramulla district in the Indian union territory of Jammu and Kashmir. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar."
                        place="Place"
                        adderess="📍- Gulmarg , Baramulla , Jammu & Kashmir , Pincode - 193403, India"
                        amenities="Views"
                        imageUrl1="https://feeds.abplive.com/onecms/images/uploaded-images/2021/12/08/42f66ea496eda15419abdcb1b93a2797_original.jpg?impolicy=abp_cdn&imwidth=650"
                        imageUrl2="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/1a/2b/ed/gulmarg.jpg?w=700&h=500&s=1"
                        imageUrl3="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201510/khyber-himalyan-resort-and-spa-story_647_102615070427.jpg?VersionId=sIJY3ZGCc1bgZP1PtEcMQfg181wk767"
                        imageUrl4="https://www.shraddharane.com/wp-content/uploads/2022/08/the-gondola-ride-in-gulmarg.png"
                        imageUrl5="https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Gulmarg-In-Summer-cover_17th-Jan.jpg"
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
export default Place10;

