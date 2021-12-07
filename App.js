import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { encode, decode } from 'base-64';
import Login from './screens/Login';
import Signup from './screens/Registration';
import Categories from './screens/Categories';
import Products from './screens/Products';
import AppContext from './context/Appcontext';
import ViewProduct from './screens/ViewProduct';
import Pay from './screens/Pay';
import { firebase } from './config/firebase.config';
import Talk from './screens/Talk';

if(!global.btoa) { global.btoa = encode };
if(!global.atob) { global.atob = decode };

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if(user){
        usersRef
          .doc(user.uid)
          .get()
          .then(document => {
            const userData = document.data()
            setUser(userData);
            setLoading(false);
          })
          .catch(err => {
            console.log(err)
          })

      }else{
        setLoading(false);
      };
    });
  }, [])

  if(loading){
    return(
      <>
      </>
    )
  }else{
  return (
    <AppContext.Provider value={{ data, setData, product, setProduct, setUser, user, isLoggedIn, setIsLoggedIn }}>    
      <NavigationContainer>
        <Stack.Navigator>
          {
            user ? (
              <>
                <Stack.Screen name='Home' component={Categories} options={{ headerShown: false }} />
                <Stack.Screen name='Products' component={Products} options={{ headerShown: false }} />
                <Stack.Screen name='Product' component={ViewProduct} options={{ headerShown: false }} />
                <Stack.Screen name='Talk' component={Talk} options={{ headerShown: false }} />
                <Stack.Screen name='Pay' component={Pay} options={{ headerShown: false }} />
              </>
            ):(
              <>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );}
}
