import { Entypo } from '@expo/vector-icons'
import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import AppContext from '../context/Appcontext';

const ViewProduct = ({ navigation }) => {
    const [oneProduct, setProduct] = useState({})
    const {product} = useContext(AppContext);
    
    useEffect(() => {
        setProduct(product);
        console.log(oneProduct)
    }, [])

    return (
        <View style={{
            marginTop: 20,
        }}>
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
                }}>Details</Text>
            </View>
            <ScrollView>
            <View>
                <View>
                    <Image source={{ uri: oneProduct.image}} resizeMode='contain' style={{
                        width: 300,
                        height: 300,
                        alignSelf: 'center'
                    }} />
                    <Text style={{
                        color: '#4478c1',
                        fontSize: 30,
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                    }}>
                        {oneProduct.name}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight:"bold",
                        color: '#4478c1',
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                        marginTop: 10,
                        marginBottom: 10,
                    }}>Description</Text>
                    <Text style={{
                        width: '90%',
                        alignSelf: 'center'
                    }}>{oneProduct.description}</Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight:"bold",
                        color: '#4478c1',
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                        marginTop: 10,
                        marginBottom: 10,
                    }}>Capacity</Text>
                    <Text style={{
                        width: '90%',
                        alignSelf: 'center'
                    }}> 
                        {oneProduct.capacity}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight:"bold",
                        color: '#4478c1',
                        alignSelf: 'flex-start',
                        marginLeft: 20,
                        marginTop: 10,
                        marginBottom: 20,
                    }}>Appliances</Text>
                    <View>
                    {
                        oneProduct.appliances?.map((item, idx) => {
                            return(
                                <View key={idx} style={{
                                    flexDirection: 'row',
                                    marginLeft: 20,
                                    marginTop: 10,
                                }}>
                                    <Image source={{ uri: item.image }} style={{
                                        width: 50,
                                        height: 50,
                                        borderColor: '#4478c1',
                                        borderRadius: 50,
                                        borderWidth: 1,
                                        marginRight: 20,

                                    }} />
                                    <Text style={{
                                        color: '#256f32',
                                        fontWeight: '700',
                                        fontSize: 18,
                                        lineHeight: 40,
                                        marginTop: 5,
                                    }}>{item.name}</Text>
                                </View>
                            )
                        })
                    }
                    </View>

                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Pay')} style={{
                width: '90%',
                backgroundColor: '#4478c1',
                padding: 10,
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 18,
                }}>Order</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Talk')} style={{
                width: '90%',
                backgroundColor: '#4478c1',
                padding: 10,
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 100,
            }}>
                <Text style={{
                     color: '#fff',
                     fontSize: 18,
                }}>Talk to Us</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ViewProduct
