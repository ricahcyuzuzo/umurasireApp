import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Dimensions, StatusBar, TouchableOpacity, } from 'react-native';
import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { firebase } from '../config/firebase.config';
import AppContext from '../context/Appcontext';

const { width, height} = Dimensions.get('window');

const Login = ({ navigation }) => {

    const [security, setSecurity] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser, setIsLoggedIn} = useContext(AppContext)
    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection('users');
                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if(!firestoreDocument.exists){
                            alert('User does not exist anymore. Contact the support at 0788999900');
                            return;
                        }

                        const user = firestoreDocument.data();
                        setUser(user);
                        setIsLoggedIn(true);
                    }).catch(error => {
                        alert(error);
                    })
            })
            .catch(error => {
                alert(error);
            }) 
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 20,}}>
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
                }}>Welcome Back!</Text>
                <Text style={{
                    marginTop:-5,
                    color: '#c4c4c4'
                }}>Experience the solar electriicity</Text>
                <View style={{
                    marginTop: 70
                }}>
                    <View>
                        <TextInput
                            onChangeText={(val) => setEmail(val)}
                            placeholder='Email'
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
                            onChangeText={(val) => setPassword(val)}
                            placeholder='Password'
                            placeholderTextColor='#989AA9'
                            autoCapitalize='none'
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
                        onPress={onLoginPress}
                        style={{
                            flexDirection: 'row',
                            padding: 18,
                            width: '90%',
                            borderRadius: 50,
                            backgroundColor: '#4478C1',

                        }}>
                            <Text style={{
                                width: '100%',
                                fontWeight: '600',
                                color: '#fff',
                                textAlign: 'center'
                            }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={{
                            flexDirection: 'row',
                            padding: 18,
                            width: '90%',
                            borderRadius: 50,
                            backgroundColor: '#fff',
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: '#4478C1'

                        }}>
                            <Text style={{
                                width: '100%',
                                fontWeight: '600',
                                color: '#000',
                                textAlign: 'center'
                            }}>Sign Up</Text>
                        </TouchableOpacity>
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
        </View>
    )
}

export default Login
