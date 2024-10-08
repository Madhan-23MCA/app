import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profilecard = ({ title, date, frgo, togo, timing, ftime, ttime, imageUrl }) => {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
            <Text style={styles.date}>{date}</Text>

            <View style={styles.icon}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{frgo}</Text>
                <Text style={styles.togo}>{togo}</Text>
                <Text style={styles.adderes}>{ftime}</Text>
                <Text style={styles.ttime}>{ttime}</Text>
                <Text style={styles.time}>{timing}</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3, // For Android shadow
        marginTop: 20,

    },
    content: {
        paddingHorizontal: 10,

    },
    icon:{
        flexDirection: 'row',
        width: '100%',
    },
    image: {
        width: '15%',
        height: 50, // Adjust the height as needed
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 70,
        marginTop: -50,
        marginBottom: 25,
    },
    date: {
        fontSize: 12,
        marginLeft: 6,
        marginRight: 5,
        marginTop: 3,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        marginLeft: 6,
        textAlign: 'justify',
        marginLeft: 20,
        marginRight: 5,
    },
    togo: {
        fontSize: 14,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 17,
        marginBottom: 20,
    },
    time: {
        marginLeft: 6,
        textAlign: 'center',
        marginBottom: 20,
        marginRight: 5,
    },
    adderes: {
        fontSize: 14,
        marginLeft: 6,
        textAlign: 'justify',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 5,
    },
    ttime: {
        fontSize: 14,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 0,
        marginBottom: 20,
    },
});

export default Profilecard;


///==============================modal exam=============================
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const Profilecard = ({ title, date, frgo, togo, timing, ftime, ttime, imageUrl }) => {
//     return (
//         <View style={styles.card}>
//             <View style={styles.content}>
//                 <Text style={styles.date}>{date}</Text>

//                 <View style={styles.icon}>
//                     <Image source={{ uri: imageUrl }} style={styles.image} />
//                 </View>
//                 <Text style={styles.title}>{title}</Text>
//                 <Text style={styles.description}>{frgo}</Text>
//                 <Text style={styles.togo}>{togo}</Text>
//                 {/* <Text style={styles.adderes}>{ftime}</Text> */}
//                 <Text style={styles.ttime}>{ttime}</Text>
//                 <Text style={styles.time}>{timing}</Text>

//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         padding: 15,
//         marginBottom: 3,
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3, // For Android shadow
//         marginTop: 20,

//     },
//     content: {
//         paddingHorizontal: 10,

//     },
//     icon: {
//         flexDirection: 'row',
//         width: '100%',
//     },
//     image: {
//         width: '15%',
//         height: 50, // Adjust the height as needed
//         borderRadius: 10,
//         marginBottom: 10,
//     },
//     title: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         textAlign: 'right',
//         marginRight: 70,
//         marginTop: -50,
//         marginBottom: 25,
//     },
//     date: {
//         fontSize: 12,
//         marginLeft: 6,
//         marginRight: 5,
//         marginTop: 3,
//         marginBottom: 10,
//     },
//     description: {
//         fontSize: 14,
//         marginLeft: 6,
//         textAlign: 'justify',
//         marginLeft: 20,
//         marginRight: 5,
//     },
//     togo: {
//         fontSize: 14,
//         marginLeft: 20,
//         marginRight: 5,
//         marginTop: 17,
//         marginBottom: 20,
//     },
//     time: {
//         marginLeft: 6,
//         textAlign: 'center',
//         marginBottom: 20,
//         marginRight: 5,
//     },
//     adderes: {
//         fontSize: 14,
//         marginLeft: 6,
//         textAlign: 'justify',
//         marginBottom: 20,
//         marginLeft: 20,
//         marginRight: 5,
//     },
//     ttime: {
//         fontSize: 14,
//         marginLeft: 20,
//         marginRight: 5,
//         marginTop: 0,
//         marginBottom: 20,
//     },
// });

// export default Profilecard;
