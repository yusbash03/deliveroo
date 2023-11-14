import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { urlFor } from '../sanity'

export default function CategoryCard({imgUrl, title}) {
 return (
 <TouchableOpacity className='relative mr-2'>
    <Image source={{uri: urlFor(imgUrl).url()}} className='w-20 h-20 rounded'/>
    <Text className='absolute bottom-1 left-1 font-bold text-white'>{title}</Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
 container:{}
})