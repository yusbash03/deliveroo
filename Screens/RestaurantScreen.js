import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, BackwardIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../Components/DishRow';
import BasketIcon from '../Components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

export default function RestaurantScreen() {
    const {params: {id, imgUrl, title, dishes, lat, lng, short_desc, rating, genre, address}} = useRoute();
    const nav = useNavigation();
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(setRestaurant({
         id, imgUrl, title, dishes, lat, lng, short_desc, rating, genre, address
      }))
    }, [])
 return (
   <>
   <BasketIcon />
 <ScrollView>
    <View className='relative'>
        <Image source={{uri: urlFor(imgUrl).url()}}
        className='w-full h-60 bg-gray-300 p-4'
         />

         <TouchableOpacity onPress={()=> nav.goBack()} className='absolute top-14 left-4 bg-gray-100 p-2 rounded-full'>
            <ArrowLeftIcon size={23} color='#00ccbb' className='font-bold' />
         </TouchableOpacity>
    </View>

    <View className='bg-white'>
      <View className='px-4 pt-4'>
         <Text className='font-bold text-3xl'>{title}</Text>
         <View className='flex-row my-1 space-x-2'>
            <View className='flex-row space-x-1'>
            <StarIcon size={22} color='green' opacity={0.5} />
             <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating} </Text>. {genre}</Text>
            </View>

            <View className='flex-row space-x-1 items-center'>
            <MapPinIcon size={22} color='green' opacity={0.5} />
            <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
            </View>
         </View>

         <Text className='text-gray-500 mt-2 pb-4'>{short_desc}</Text>
      </View>

      <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
      <QuestionMarkCircleIcon size={22} color='gray' opacity={0.7} />
      <Text className='flex-1 pl-2 font-bold text-md'>Have any food alergy?</Text>
      <ChevronRightIcon size={22} color='#00ccbb'  />
      </TouchableOpacity>
    </View>
    <View className='pb-36'>
      <Text className='px-4 pt-5 mb-2 font-bold text-lg'>Menu</Text>
      {dishes.map(dish=>(
         <DishRow 
         id={dish._id}
         key={dish._id}
         name={dish.name}
         image={dish.image}
         description={dish.short_description}
         price={dish.price}
           />
      ))}
    </View>
 </ScrollView>
 </>
)
}

const styles = StyleSheet.create({
 container:{}
})