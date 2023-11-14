import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { getBasketTotal, selectBasketItems } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native';

export default function BasketIcon() {
   const items = useSelector(selectBasketItems);
   const basketTotal = useSelector(getBasketTotal);
   const nav = useNavigation();
 return (
 <View className='w-full z-50 bottom-10 absolute'>
    <TouchableOpacity onPress={()=> nav.navigate('Basket')}
     className='bg-[#00ccbb] mx-6 p-4 rounded-lg flex-row items-center space-x-2'>
      <Text className='py-1 px-2 text-white font-extrabold bg-green-800 text-lg'>{items.length}</Text>
      <Text className='flex-1 text-lg text-center text-white font-extrabold'>View Basket</Text>
      <Text className='font-extrabold text-xl text-white'>${basketTotal}</Text>
    </TouchableOpacity>
 </View>
)
}

const styles = StyleSheet.create({
 container:{}
})