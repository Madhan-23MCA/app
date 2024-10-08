

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Traincard from './transport/transport';

const Upadte = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');



    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://media.istockphoto.com/id/652899770/photo/computer-room.jpg?s=612x612&w=0&k=20&c=xqCQeechjpoFN4szIQNlEp8FkoIsFD0uerl0YOpHleI=',
                }}
                style={styles.backgroundImage}
            >
                <ScrollView style={styles.signpage}>
                    <View style={styles.placeviewbt}>
                        <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Home')}>
                            <Text style={styles.ordbtn}>MY INQUIRY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Update')}>

                            <Text style={styles.ordbtn}>UPDATES</Text>
                        </TouchableOpacity>



                        {/* row 2 */}

                        <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Train')}>
                            <Text style={styles.ordbtn}>NOTIFICATION</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('Login')}>
                            <Text style={styles.ordbtn}>LOGOUT</Text>
                        </TouchableOpacity>

                    </View>


                    <Text style={styles.text}>UPDATES</Text>

                  
                    <Traincard
                        title="Inquiry"
                        frgo="Inquiry type"
                        togo="Internet Not Working"
                        ftime="Location"
                        ttime="MCA LAB"
                        fime="Reportin time"
                        ttim="1 Hour age"
                        timing="---------------------------------------------------------------------------------------"
                    />
                    
                    <Traincard
                        title="Inquiry"
                        frgo="Inquiry type"
                        togo="Internet Not Working"
                        ftime="Location"
                        ttime="MCA LAB"
                        fime="Reportin time"
                        ttim="1 Hour age"
                        timing="---------------------------------------------------------------------------------------"
                    />
                    <Traincard
                        title="Inquiry"
                        frgo="Inquiry type"
                        togo="Internet Not Working"
                        ftime="Location"
                        ttime="UG LAB - B"
                        fime="Reportin time"
                        ttim="1 Hour age"
                        timing="---------------------------------------------------------------------------------------"
                    />
                    <Traincard
                        title="Inquiry"
                        frgo="Inquiry type"
                        togo="Internet Not Working"
                        ftime="Location"
                        ttime="UG LAB - A"
                        fime="Reportin time"
                        ttim="1 Hour age"
                        timing="---------------------------------------------------------------------------------------"
                    />
                    <Traincard
                        title="Inquiry"
                        frgo="Inquiry type"
                        togo="Internet Not Working"
                        ftime="Location"
                        ttime="MCA LAB"
                        fime="Reportin time"
                        ttim="1 Hour age"
                        timing="---------------------------------------------------------------------------------------"
                    />
                    <Traincard
                        title="Inquiry"
                        frgo="Inquiry type"
                        togo="Internet Not Working"
                        ftime="Location"
                        ttime="UG LAB - C"
                        fime="Reportin time"
                        ttim="1 Hour age"
                        timing="---------------------------------------------------------------------------------------"
                    />
                    <Traincard
                        title="Inquiry"
                        frgo="Inquiry type"
                        togo="Internet Not Working"
                        ftime="Location"
                        ttime="UG LAB - B"
                        fime="Reportin time"
                        ttim="1 Hour age"
                        timing="---------------------------------------------------------------------------------------"
                    />




                    <TouchableOpacity style={styles.ord} onPress={(e) => navigation.navigate('add')}>
                        <Text style={styles.ordbtn}>ADD UPDATE</Text>
                    </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: 1200,
        resizeMode: 'cover', // Cover the entire container
        marginBottom: 20,

    },
    signpage: {
        width: '100%',
        padding: 0,
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        width: 40,
        height: 50,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 10,
        alignItems: 'center',
    },
    tinyLogo: {
        width: 300,
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 50,
        alignItems: 'center',
    },
    header: {
        fontSize: 23,
        marginLeft: 62,
        marginTop: 10,
    },
    placeviewbt: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: -70,
        marginTop: 15,
        height: 55,
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingLeft: 7,
    },

    text: {
        marginBottom: 20,

        alignSelf: 'center',
        padding: 10,
        fontSize: 34,
        color: 'white',
        marginTop: 100,
        marginBottom: 10,
    },
    texts: {
        marginBottom: 20,
        marginLeft: 40,
        padding: 10,
        fontSize: 16,
        color: 'white',
        marginTop: 0,
        marginBottom: 0,
    },
    input: {
        width: '80%',
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
        marginLeft: 40,
        alignItems: 'center',
        marginBottom: 18,
        fontSize: 18,
    },
    cvv: {
        width: '38%',
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
        marginLeft: 199,
        marginTop: -55,
        alignItems: 'center',
        fontSize: 18,
    },
    date: {
        width: '38%',
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
        marginLeft: 42,
        alignItems: 'center',
        fontSize: 18,
    },
    ord: {
        width: '24%',
        height: 35, // Adjust the height as needed
        borderRadius: 0,
        // borderWidth: 1,
        // borderColor: 'gray',
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 6,
        marginRight: 2,
        backgroundColor: 'white',
    },
    ordbtn: {
        textAlign: 'center',
        marginBottom: 0,
        marginTop: 6,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
});

export default Upadte;


