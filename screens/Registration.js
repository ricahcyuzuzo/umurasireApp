import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Dimensions, StatusBar, TouchableOpacity, ScrollView, } from 'react-native';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { firebase } from '../config/firebase.config';
import AppContext from '../context/Appcontext';

const { width, height} = Dimensions.get('window');

const Signup = ({ navigation }) => {

    const [security, setSecurity] = useState(true);
    const [names, setNames] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {setIsLoggedIn, setUser} = useContext(AppContext);

    const onRegisterPress = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                
                const data = {
                    id: uid,
                    email,
                    names,
                };

                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        setIsLoggedIn(false);
                        setUser(data);
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', marginTop: 20,}}>
            <StatusBar barStyle='dark-content' backgroundColor='#fff' />
            <View style={{
                width: width, 
                height: height - 60,
                marginLeft: 20,
                marginRight: 20    
            }}>
                <Text style={{
                    marginTop: 50,
                    color: '#000',
                    fontSize: 25,
                    width: 180,
                    lineHeight: 50,
                    fontWeight: 'bold'
                }}>Register Here!</Text>
                <Text style={{
                    marginTop:-5,
                    color: '#c4c4c4'
                }}>Get Your free account and shop with us!</Text>
                <View style={{
                    marginTop: 70
                }}>
                    <View style={{
                        marginBottom: 15,
                    }}>
                        <TextInput
                            onChangeText={(val) => setNames(val)}
                            placeholder='Names'
                            placeholderTextColor='#989AA9'
                            style={{
                                backgroundColor: '#c4c4c4',
                                padding: 15,
                                paddingLeft: 50,
                                width: '90%',
                                borderRadius: 50,
                                color: '#4c4c4c',
                            }}
                            
                        />
                        <FontAwesome 
                        name="id-card-o" 
                        size={20} 
                        color="#000"
                        style={{
                            position: 'absolute',
                            top: 20,
                            left: 15
                        }}
                        />
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(val) => setEmail(val)}
                            placeholder='Email'
                            keyboardType='email-address'
                            placeholderTextColor='#989AA9'
                            style={{
                                backgroundColor: '#c4c4c4',
                                padding: 15,
                                paddingLeft: 50,
                                width: '90%',
                                borderRadius: 50,
                                color: '#4c4c4c',
                            }}
                            
                        />
                        <MaterialIcons 
                        name="person-outline" 
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
                        marginTop: 15,
                    }}>
                        <TextInput
                            onChangeText={(val) => setPassword(val) }
                            placeholder='Password'
                            placeholderTextColor='#989AA9'
                            secureTextEntry={security}
                            style={{
                                backgroundColor: '#c4c4c4',
                                padding: 15,
                                paddingLeft: 50,
                                width: '90%',
                                borderRadius: 50,
                                color: '#4c4c4c',
                            }}
                            
                        />
                        <MaterialIcons 
                        name="lock-outline" 
                        size={24} 
                        color="#000"
                        style={{
                            position: 'absolute',
                            top: 15,
                            left: 15
                        }}
                        />
                        <TouchableOpacity 
                        style={{
                            position: 'absolute',
                            right: 60,
                            top: 16
                        }}
                        onPress={() => setSecurity(!security)}>
                        <Feather 
                        name={security ? 'eye' : 'eye-off'} 
                        size={24} 
                        color='#000'
                         />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: 20,
                    }}>
                        <TouchableOpacity
                        onPress={onRegisterPress}
                        style={{
                            flexDirection: 'row',
                            padding: 18,
                            width: '90%',
                            borderRadius: 50,
                            marginTop: 20,
                            backgroundColor: '#4478C1'

                        }}>
                            <Text style={{
                                width: '100%',
                                fontWeight: '600',
                                color: '#fff',
                                textAlign: 'center'
                            }}>Sign Up</Text>
                        </TouchableOpacity> 
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            alignSelf: 'center',
                            marginLeft: -30,
                        }}>
                            <Text>You have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{
                                marginLeft: 10,
                            }}><Text style={{
                                color: '#4478c1',
                                fontWeight: 'bold'
                            }}>Login</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ 
                width: width, 
                height: 60,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20

            }}>
            </View>
        </ScrollView>
    )
}

export default Signup
