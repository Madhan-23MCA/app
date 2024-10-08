// ==========================Place view screen ==========================================

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Booking from '../bookingscreen';

const Place4 = () => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.hotel}>
                    <Image
                        style={styles.hotelImg}
                        source={{
                            uri: 'https://static.toiimg.com/photo/73667509.cms',
                        }}
                    />

                    <Booking
                        Hname="Khajjiar"
                        details="Details"
                        descrip="Khajjiar is a hill station in the north Indian state of Himachal Pradesh. Dating from the 12th century, Khajji Nag Temple is dedicated to a serpent god."
                        place="Place"
                        adderess="📍- KHAJJIAR, HIMACHAL PRADESH, Pincode-176314, INDIA"
                        amenities="Views"
                        imageUrl1="https://miro.medium.com/v2/resize:fit:1049/1*1Mey5brFIBHu9wiwTZD5eQ.jpeg"
                        imageUrl2="https://cf.bstatic.com/xdata/images/hotel/max1024x768/409655298.jpg?k=b6e3b26e4f5f7678b40f5da075b7d43c7d7a1735f9db81edcde7295badc83d22&o=&hp=1"
                        imageUrl3="https://travellingslacker.com/wp-content/uploads/2020/12/View-of-Khajjiar-Meadows-form-Hotel-Devdar-01.jpeg"
                        imageUrl4="https://hblimg.mmtcdn.com/content/hubble/img/khajjiar/mmt/activities/t_ufs/m_Khajjiar%20Lake-2_l_463_617.jpg"
                        imageUrl5="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1664244799.jpg"
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
export default Place4;

