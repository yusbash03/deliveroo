import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native'
import HomeScreen from '../Screens/HomeScreen';
import RestaurantScreen from '../Screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from '../store';
import BasketScreen from '../Screens/BasketScreen';
import PreparingOrderScreen from '../Screens/PreparingOrderScreen';
import DeliveryScreen from '../Screens/DeliveryScreen';
const stack = createNativeStackNavigator();
//console.log(stack);

export default function AppNavigation() {
 return (
    <NavigationContainer>
        <Provider store={store}>
       <stack.Navigator>
            <stack.Screen name="Home" options={{headerShown:false}} component ={HomeScreen} />
            <stack.Screen name="Restaurant" options={{headerShown:false}} component ={RestaurantScreen} />
            <stack.Screen name="Basket" options={{headerShown:false, presentation: 'modal'}} component ={BasketScreen} />
            <stack.Screen name="PrepareOrder" options={{headerShown:false, presentation:"fullScreenModal"}} component ={PreparingOrderScreen} />
            <stack.Screen name="Delivery" options={{headerShown:false, presentation:"fullScreenModal"}} component ={DeliveryScreen} />
        </stack.Navigator>
        </Provider>
    </NavigationContainer>
)
}

