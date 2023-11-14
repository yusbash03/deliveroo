import React, { useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketTotal, removeFromBasket, selectBasketItems } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'


export default function BasketScreen() {
    const nav = useNavigation();
    const deliveryFee = 5.99;
    const restaurant = useSelector(selectRestaurant);
    const basketTotal = useSelector(getBasketTotal);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        const gorupedItems = items.reduce((results, item)=>{
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})

        setGroupedItemsInBasket(gorupedItems);
    }, [items]);
 return (
 <SafeAreaView className='flex-1 bg-white'>
    <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b bg-white shadow-sm border-[#00ccbb]'>
            <View>
                <Text className='font-bold text-lg text-center'>Basket Items</Text>
                <Text className='font-bold text-gray-400 text-center'>{restaurant.title}</Text>
            </View>

            <TouchableOpacity 
            className='rounded-full bg-gray-100 top-3 right-5 absolute'
            onPress={()=> nav.goBack()}>
                <XCircleIcon color='#00ccbb' height={50} width={50} />
            </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 my-5 bg-white'>
            <Image source={{uri: 'https://links.papareact.com/wru'}}
            className='bg-gr rounded-full h-7 w-7' />
            <Text className='flex-1'>Delivers in 30 - 50 min</Text>
            <TouchableOpacity>
                <Text className='text-[#00ccbb]'>Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-green-200'>
            {Object.entries(groupedItemsInBasket).map(([key, items])=> (
                <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                    <Text className='text-[#00ccbb]'>{items.length} X</Text>
                    <Image className='h-12 w-12 rounded-full' source={{uri: urlFor(items[0]?.image).url()}} />
                    <Text className='flex-1'>{items[0].name}</Text>
                    <Text className='text-gray-400'>${items[0]?.price}</Text>
                    <TouchableOpacity>
                        <Text onPress={()=> dispatch(removeFromBasket({id: key}))}
                         className='text-[#00ccbb] text-xs'>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

        <View className='p-5 mt-5 space-y-4 bg-white'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-500 font-semibold'>Subtotal</Text>
                <Text className='text-gray-500'>${basketTotal}</Text>
            </View>

            <View className='flex-row justify-between'>
                <Text className='text-gray-500 font-semibold'>Delivery fee</Text>
                <Text className='text-gray-500'>${deliveryFee}</Text>
            </View>


            <View className='flex-row justify-between'>
                <Text className='font-semibold'>Order total</Text>
                <Text className='font-extrabold'>${deliveryFee+basketTotal}</Text>
            </View>

            <TouchableOpacity onPress={()=> nav.navigate('PrepareOrder')} className='p-4 bg-[#00ccbb] rounded-full'>
                <Text className='text-white text-lg text-center font-bold'>Place order</Text>
            </TouchableOpacity>
        </View>
    </View>
 </SafeAreaView>
)
}

const styles = StyleSheet.create({
 container:{}
})