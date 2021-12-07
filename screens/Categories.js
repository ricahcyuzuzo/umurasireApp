import React, {useContext, useEffect, useState} from 'react'
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import AppContext from '../context/Appcontext';
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../config/firebase.config';

const Categories = ({ navigation }) => {
    const [brands, setBrands] = useState([]);
    const [ids, setIds] = useState([]);
    const {setData, setUser} = useContext(AppContext); 

    const brandsRef = firebase.firestore().collection('brands');
    
    useEffect(() => {
        getAllBrands(); 
        // getSub();   
    }, [])

    const getAllBrands = async () => {
        const datas = await brandsRef.get();
        setBrands((datas.docs.map(doc => {
            return {
                id: doc.id,
                data: doc.data()
            }
        })));
    }

    // const getSub = () => {
    //     brandsRef.doc('LUreo8C1aOU1to3zmD87').collection('products').get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach(doc => {
    //                 console.log(doc.id,' => ' , doc.data())
    //             });
    //         })
    // }

    const Categories = [{
        image: 'https://pbs.twimg.com/profile_images/1271430509231517703/3IEQlhpr.jpg',
        brand: 'Bboxx',
        id: 1,
        products: [
            {
                name: 'bPower20',
                description: 'A high performance energy solution designed for great customer experience at a low lifetime cost',
                capacity: 'Battery type: 6.4V, 9.9Ah LFP (LiFePO4 - Lithium Iron Phosphate), Battery size: 64 Wh, DC and Solar Panel: 20W (only compatible with supplied Bboxx Solar Panel)',
                appliances: [
                    "1.2 W LED Lights",
                    "Mobile Charger",
                    "Radio",
                    "Torch"
                ],
                image: 'https://cdn.statically.io/img/www.bboxx.com/wp-content/uploads/bPower20-Perspective-No-Cables-No-Shadows.png?w=1920&quality=90&f=auto'
            },
            {
                name: 'bPower50',
                description: 'AbPower50 is a versatile ‘Plug and Play’ Solar Home System, designed for the rural off-grid customers typically using candles and kerosene lamps',
                capacity: 'Battery type: Configuration 1 – 12.8 V, 9.9 Ah LiFePO4 battery (up to 110 Wh usable daily energy) Configuration 2 – 12.8 V, 13.2 Ah LiFePO4 battery (up to 150 Wh usable daily energy), Battery size: 200 Wh, DC and Solar Panel: 50W (only compatible with supplied Bboxx Solar Panel)',
                appliances: [
                    "1.2 W LED Lights",
                    "Mobile Charger",
                    "Radio",
                    "Torch",
                    "24″ TV",
                    "Shaver"
                ],
                image: 'https://cdn.statically.io/img/www.bboxx.com/wp-content/uploads/bPower50_Banner_616x390px.png?w=616&quality=90&f=auto'
            },
            {
                name: 'bPower300',
                description: 'bPower300 provides reliable PAYG energy to a range of customers between rural and peri-urban settings for residential and commercial use ',
                capacity: 'The system provides up to 650 Wh daily usable energy, supporting a wide range of appliances including fans, large TVs and fridges. It comes with a built-in digital user interface, which indicates connectivity, payment status, energy consumption, and other supporting details.',
                appliances: [
                    "1.8 W LED Lights",
                    "40″ TV",
                    "Laptop Charger",
                    "Pedestal Fan",
                    "Refrigerator",
                    "Subwoofer"
                ],
                image: 'https://cdn.statically.io/img/www.bboxx.com/wp-content/uploads/bPower300_Banner_616x390px.png?w=616&quality=90&f=auto'
            },
        ]

    },
    {
        image: 'https://www.lightingafrica.org/wp-content/uploads/2019/05/mobisol-logo-300x202.jpg',
        brand: 'Mobisol',
        id: 2,
        products: [
            {
                name: 'Small Familly',
                description: 'This is a package for a small family in a small home',
                capacity: 'It can light up to 9 lamps and Tv',
                appliances: [
                    "19\" TV",
                    "5 Lamps",
                    "Solar Panel",
                    "Torch"
                ],
                image: 'https://www.engineeringforchange.org/wp-content/uploads/2018/04/rsz_1capture.jpg'
            },
            {
                name: 'Big Familly',
                description: 'This is a package for big familly in big house with so many appliances.',
                capacity: 'It can Light up to 20 Lamps, a TV and a Laptop',
                appliances: [
                    "24\" TV",
                    "Radio",
                    "Torch",
                    "5 Lamp",
                ],
                image: 'https://cleanleap.com/sites/default/files/images/featured/2993/MOBISOL%20SYSTEM.jpg'
            },
            {
                name: 'Business',
                description: 'This is a package for Business',
                capacity: 'It can light up to 20 Lamps, TV and a refrigerator',
                appliances: [
                    "32″ TV",
                    "Radio",
                    "Torch",
                    "5 Lamps",
                ],
                image: 'https://taarifa.rw/wp-content/uploads/2019/09/Mobisol-200Wp-SHS.jpg'
            },
        ]
    },
    {
        image: 'https://www.realestategist.com/md/images_now/Zola-logo-2.jpg',
        brand: 'Zola',
        id: 3,
        products: [
            {
                name: 'Zola flex 1',
                description: 'A Powerbox for the family that can power a home.',
                capacity: 'Flex Power Box with a Capacity of 130Wh Lithium-ion storage and user interface',
                appliances: [
                    "Solar Panel",
                    "Mobile Charger",
                    "Lamps"
                ],
                image: 'https://rwanda.zolaelectric.com/wp-content/uploads/sites/41/2020/11/Flex-Config-03-1024x1024.png'
            },
            {
                name: 'Zola flex 2',
                description: 'A Second Powerbox for the family that can power a home',
                capacity: 'Flex Power Box with a Capacity of 260Wh Lithium-ion storage and user interface',
                appliances: [
                    "Lamps",
                    "Mobile Charger",
                    "Radio",
                    "Tv",
                    "Ventilator"
                    ],
                image: 'https://rwanda.zolaelectric.com/wp-content/uploads/sites/41/2020/11/Flex-fan-1024x737.png'
            },
        ]
    }
]

    const renderItems = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {
                setData(item.id);
                navigation.navigate('Products');
            }} style={{
                borderWidth: 1,
                borderColor: '#4478c1',
                height: 300,
                width: 320,
                alignSelf: 'center',
                borderRadius: 10,
                marginLeft: 18,
                marginRight: 10,
            }}>
                <Image resizeMode='stretch' source={{ uri: item.data.image }} style={{
                    width: 250,
                    height: 150,
                    borderRadius: 20,
                    alignSelf: 'center',
                    marginTop: 10,
                }} />
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 25,
                    width: '90%',
                    textAlign: 'center',
                    marginTop: 40,
                    color: '#4478c1'
                }}>{item.data.brand}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            backgroundColor: '#fff',
            minHeight: '100%',
            marginTop: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{
                    marginLeft: 20,
                    marginTop: 20,
                    borderColor: '#4478c1',
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                }}>
                    <Ionicons name="person" size={24} color="#4478c1" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setUser(null)} style={{
                    marginTop: 30,
                    marginRight: 20,
                }}>
                    <Entypo name='log-out' size={30} color='#4478c1' />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    fontSize: 25,
                    width: '80%',
                    marginLeft: 20,
                    marginTop: 60,
                    color: '#4478c1'
                }}>Choose your suitable solar system </Text>

                <View style={{
                    marginTop: 40,
                }}>
                    <FlatList 
                        renderItem={renderItems}
                        horizontal={true}
                        data={brands}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

export default Categories
