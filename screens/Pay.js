import { Entypo } from '@expo/vector-icons'
import React, { useState, useContext, useEffect} from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import AppContext from '../context/Appcontext';
import { firebase } from '../config/firebase.config';

const Pay = ({ navigation }) => {
    const [loading, setLoading] = useState(false); 
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const {user, product} = useContext(AppContext);

    const handlePay = () => {
        setLoading(true);
        const ordersRef = firebase.firestore().collection('orders');
        ordersRef.add({
            cutomerNames: user.names,
            customerEmail: user.email,
            phoneNumber: phone,
            customerAddress: address,
            status: 'pending',  
            delivered: 'pending',
            amount: '2,000',
            name: product.name
        }).then(() => {
            alert('Order has been sent, please proceed to for payment.')
            setLoading(false);
            navigation.navigate('Home');
        })


    }

    return (
        <View style={{
            marginTop: 20,
        }}>
            <View style={{
                flexDirection: 'row'
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
                    <Entypo name='chevron-left' size={24} color='#4478c1' />
                </TouchableOpacity>
                <Text style={{
                    color: '#4478c1',
                    fontSize: 25,
                    marginTop: 10,
                    marginLeft: 30,
                }}>Pay</Text>
            </View>
            <View>
            <View style={{
                    marginTop: 100,
                    marginLeft: 30
                }}>
                <TextInput 
                    onChangeText={(val) => setPhone(val)}
                    placeholder='Phone number'
                    placeholderTextColor='#4c4c4c'
                    maxLength={10}
                    keyboardType='phone-pad'
                    style={{
                        backgroundColor: '#c4c4c4',
                        padding: 15,
                        paddingLeft: 50,
                        width: '90%',
                        borderRadius: 5,
                        color: '#989AA9',
                    }}    
                />
                <MaterialIcons 
                        name='phone' 
                        size={24} 
                        color="#000"
                        style={{
                            position: 'absolute',
                            top: 15,
                            left: 15
                        }}
                        />
                </View>
                <View style={{
                    marginTop: 20,
                    marginLeft: 30
                }}>
                <TextInput 
                    onChangeText={(val) => setAddress(val)}
                    placeholder='Province/District/Sector/Cell/Village'
                    placeholderTextColor='#4c4c4c'
                    style={{
                        backgroundColor: '#c4c4c4',
                        padding: 15,
                        paddingLeft: 50,
                        width: '90%',
                        borderRadius: 5,
                        color: '#989AA9',
                    }}    
                />
                <MaterialIcons 
                        name='location-on' 
                        size={24} 
                        color="#000"
                        style={{
                            position: 'absolute',
                            top: 15,
                            left: 15
                        }}
                        />
                </View>
                <TouchableOpacity 
                onPress={handlePay}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#4478c1',
                    padding: 15,
                    width: '82%',
                    borderRadius: 5,
                    alignSelf: 'center',
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: '#fff'
                    }}>{loading ? 'Sending...' : 'Proceed'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pay
