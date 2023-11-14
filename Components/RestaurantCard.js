import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({id, imgUrl, title, dishes, lat, lng, short_desc, rating, genre, address}) {
    const nav = useNavigation();
 return (
 <TouchableOpacity onPress={()=> nav.navigate('Restaurant', {
    id, imgUrl, title, dishes, lat, lng, short_desc, rating, genre, address
 })} 
    className='bg-white mr-3 shadow'>
    <Image source={{uri: urlFor(imgUrl).url() }} className='w-60 h-36 rounded' />
    <View className='px-3 pb-2'>
    <Text className='font-bold text-lg pt-2'>{title}</Text>
    <View className='flex-row items-center space-x-1'>
        <StarIcon size={22} color='green' opacity={0.5} />
        <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating} </Text>. {genre}</Text>
    </View>
    <View className='flex-row items-center space-x-1'>
        <MapPinIcon size={22} color='green' opacity={0.5} />
        <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
    </View>
    </View>
    
 </TouchableOpacity>
)
}

const styles = StyleSheet.create({
 container:{}
})