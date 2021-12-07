import { Entypo } from '@expo/vector-icons'
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import AppContext from '../context/Appcontext';
import { firebase } from '../config/firebase.config';

const Products = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const { data, setProduct } = useContext(AppContext);

    const brandsRef = firebase.firestore().collection('brands');

    useEffect(() => {   
        getProducts();     
    }, []);

    const getProducts = async () => {
        const productss = await brandsRef.doc(data).collection('products').get();
        setProducts(productss.docs.map(doc => doc.data()));
    }

    const renderItems = ({item}) => {
        return(
            <TouchableOpacity onPress={() => {
                setProduct(item)
                navigation.navigate('Product')
            }} style={{
                width: '98%',
                backgroundColor: '#c4c4c4',
                height: 150,
                borderRadius: 10,
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{
                        color: '#4478c1',
                        fontSize: 30,
                        marginLeft: 10,
                        marginTop: 20,
                    }}>
                        {item.name}
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        marginLeft: 10,
                    }}>
                        Package
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        marginLeft: 10,
                    }}>
                        5000 RWF / Month
                    </Text>
                </View>
                <View style={{
                    marginTop: -25
                }}>
                    <Image source={{ uri: item.image }} resizeMode='stretch' style={{
                        width: 130,
                        height: 100,
                        marginTop: 50,
                        marginRight: 20,
                        borderRadius: 20,
                    }} />
                </View>
            </TouchableOpacity>
        )
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                    marginTop: 10,
                    borderRadius: 5,
                }}>
                    <Entypo name='chevron-left' color='#4478c1' size={30} />
                </TouchableOpacity>

                <Text style={{
                    fontSize: 23,
                    marginTop: 13,
                    marginLeft: 80,
                    color: '#4478c1'
                }}>Products</Text>
            </View>
            <View>
            <FlatList 
                style={{
                    marginLeft: 10,
                }}
                renderItem={renderItems}
                horizontal={false}
                data={products}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.name} 
            />
            </View>
        </View>
    )
}

export default Products
