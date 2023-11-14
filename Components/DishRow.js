import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemWithId, selectBasketItems } from '../features/basketSlice';

export default function DishRow({id, description, price, image, name}) {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    //const items = useSelector(selectBasketItems);
    const items = useSelector((state)=> selectBasketItemWithId(state, id));

    const addItemToBasket =()=>{
        dispatch(addToBasket({id, description, price, image, name}))
    }
    const removeItemFromBasket =()=>{
        if(!items.length > 0) return;
        
        dispatch(removeFromBasket({id}))
    }
 return (
    <>
     <TouchableOpacity onPress={()=> setIsPressed(!isPressed)}
     className={`bg-white p-4 border border-gray-200 ${isPressed && 'border-b-0'}`}>
         <View className='flex-row'>
         <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-500'>{description}</Text>
            <Text className='text-gray-500 mt-2'>${price}</Text>
        </View>

        <View>
            <Image 
            style={{borderWidth:1, borderColor:'#f3f3f4'}}
            className='h-24 w-24 bg-gray-300 p-4 rounded-full'
            source={{uri: urlFor(image).url()}} />
        </View>
         </View>
    </TouchableOpacity>

    {isPressed && (
        <View className='bg-white px-4 pb-1'>
        <View className='flex-row space-x-2'>
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                <MinusCircleIcon size={40} color={items.length > 0 ? '#00ccbb' : 'gray'} />
            </TouchableOpacity>

                <Text className='pt-1 text-lg'> {items.length} </Text>

            <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon size={40} color='#00ccbb' />
            </TouchableOpacity>
        </View>
    </View>
    )}
    </>
   
)
}

const styles = StyleSheet.create({
 container:{}
})