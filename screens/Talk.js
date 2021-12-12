import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Dimensions, TouchableOpacity, StatusBar, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { firebase } from '../config/firebase.config';
import AppContext from '../context/Appcontext';


const { width, height} = Dimensions.get('screen');
const Talk = ({navigation }) => {
    const [text, setText] = useState('');
    const [chats, setChats] = useState([]);
    const {user} = useContext(AppContext);

    useEffect(() => {
        getChats(); 
        console.log(user)
    }, []);

    const chatsRef = firebase.firestore().collection('chats');

    const getChats = async () => {
        const chats = await chatsRef.get();
        setChats(chats.docs.map(doc => doc.data()));
    }

    const sendMessage = async () => {
        console.log({
            email: user.email,
            message: text,
            usertype: 'client'
        })
        chatsRef.add({
            email: user.email,
            message: text,
            usertype: 'client'
        }).then(() => {
            alert('Sent')
        })
        
       getChats();
    }

    return (<>
        <KeyboardAvoidingView behavior='height'>
        <ScrollView>
        <View style={{
            width: '100%',
            backgroundColor: '#fff',
            paddingBottom: 100
        }}>
            <StatusBar barStyle='dark-content' backgroundColor='#fff' />
           
            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 40,
                    height: 40,
                    borderColor: '#4478c1',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginLeft: 10,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Entypo name='chevron-left' size={30} color='#4478c1' />
                </TouchableOpacity>
                <Text style={{
                    color: '#4478c1',
                    fontSize: 25,
                    marginTop: 10,
                    marginLeft: 30,
                }}>Talk To Us</Text>
            </View>
            <View>
            {
                chats.map((item, idx) => (
                    <View key={idx} style={{
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 10,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#4478c1',
                            alignSelf: item.usertype === 'client' ? 'flex-start' : 'flex-end'
                        }}>{item.usertype === 'client' ? 'User' : 'Supplier'}</Text>
                        { item.toEmail ? <Text style={{
                            textAlign: 'right'
                        }}>To: {item.toEmail}</Text> : <></>}
                        <Text style={{
                            fontSize: 18,
                            marginTop: 5,
                            textAlign: item.usertype === 'client' ? 'left' : 'right'
                        }}>{item.message}</Text>
                        <Text style={{

                        }}>{item.email}</Text>
                    </View>
                ))
            }

            <View style={{
                flexDirection:'row',
                marginTop: 20
            }}>
            <TextInput 
            placeholder='Type a message...'
            onChangeText={(val) => setText(val)}
            style={{
                fontSize: 16,
                width: '80%',
                alignSelf: 'center',
                padding: 5,
                borderWidth: 1,
                borderColor: '#4478c1',
            }} />
            <TouchableOpacity onPress={sendMessage} style={{
                width: '20%',
                padding: 10,
                backgroundColor:'#4478c1',
            }}><Text style={{
                fontSize: 16,
                color: '#fff'
            }}>Send</Text></TouchableOpacity>
            </View>
            </View>
        </View>
        </ScrollView>
            </KeyboardAvoidingView></>
    )
}

export default Talk
