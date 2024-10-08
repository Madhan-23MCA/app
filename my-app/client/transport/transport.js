import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Traincard = ({ title, date, frgo, togo, timing,ftime, ttime }) => {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 6,
        textAlign: 'right',
        marginRight: 5,
        marginTop:-23,
        marginBottom:20,
    },
    description: {
        fontSize: 14,
        marginLeft: 6,
        textAlign: 'justify',
        marginRight: 5,
    },
    togo: {
        fontSize: 14,
        marginLeft: 6,
        textAlign: 'right',
        marginRight: 5,
        marginTop:-17,
        marginBottom:20,
    },
    time:{
        marginLeft: 6,
        textAlign: 'center',
        marginBottom:20,
        color: 'gray',
        marginRight: 5,
    },
    adderes: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 6,
        textAlign: 'justify',
        marginBottom:20,
        marginRight: 5,
    },
    ttime: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 6,
        textAlign: 'right',
        marginRight: 5,
        marginTop:-35,
        marginBottom:20,
    },
});

export default Traincard;



//============================================================================================

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const Traincard = ({ title, date, frgo, togo, timing,ftime, ttime ,fime,ttim }) => {
//     return (
//         <View style={styles.card}>
//             <View style={styles.content}>
//                 <Text style={styles.title}>{title}</Text>
//                 <Text style={styles.date}>{date}</Text>
//                 <Text style={styles.description}>{frgo}</Text>
//                 <Text style={styles.togo}>{togo}</Text>
//                 <Text style={styles.description}>{ftime}</Text>
//                 <Text style={styles.togo}>{ttime}</Text>
//                 <Text style={styles.description}>{fime}</Text>
//                 <Text style={styles.togo}>{ttim}</Text>
                
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
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     date: {
//         fontSize: 12,
//         color: 'gray',
//         marginLeft: 6,
//         textAlign: 'right',
//         marginRight: 5,
//         marginTop:-23,
//         marginBottom:20,
//     },
//     description: {
//         fontSize: 14,
//         marginLeft: 6,
//         marginTop: 17,
//         textAlign: 'justify',
//         marginRight: 5,
//     },
//     togo: {
//         fontSize: 14,
//         marginLeft: 6,
//         textAlign: 'right',
//         marginRight: 5,
//         marginTop:-17,
//         marginBottom:20,
//     },
//     time:{
//         marginLeft: 6,
//         textAlign: 'center',
//         marginBottom:20,
//         color: 'gray',
//         marginRight: 5,
//     },
//     adderes: {
//         fontSize: 14,
//         color: 'gray',
//         marginLeft: 6,
//         textAlign: 'justify',
//         marginBottom:20,
//         marginRight: 5,
//     },
//     ttime: {
//         fontSize: 14,
//         color: 'gray',
//         marginLeft: 6,
//         textAlign: 'right',
//         marginRight: 5,
//         marginTop:-35,
//         marginBottom:20,
//     },
// });

// export default Traincard;
