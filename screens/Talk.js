import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const { width, height} = Dimensions.get('screen');
const Talk = ({navigation }) => {
    return (
        <View style={{
            width: '100%',
            height: height,
            backgroundColor: '#fff'
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

            <View style={{
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#4478c1'
                }}>Me</Text>
                <Text style={{
                    fontSize: 18,
                    marginTop: 5
                }}>Hallo, I wanted to ask when will I recieve the package</Text>
            </View>

            <View style={{
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#4478c1',
                    alignSelf: 'flex-end'
                }}>Supplier</Text>
                <Text style={{
                    fontSize: 18,
                    marginTop: 5
                }}>Hallo Dear customer, you will get the package in 3 days of work. thank you for choosing Us.</Text>
            </View>

            <View style={{
                flexDirection:'row',
                marginTop: height - 350
            }}>
            <TextInput 
            placeholder='Type a message...'
            style={{
                fontSize: 16,
                width: '80%',
                alignSelf: 'center',
                padding: 5,
                borderWidth: 1,
                borderColor: '#4478c1',
            }} />
            <TouchableOpacity style={{
                width: '20%',
                padding: 10,
                backgroundColor:'#4478c1',
            }}><Text style={{
                fontSize: 16,
                color: '#fff'
            }}>Send</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Talk
