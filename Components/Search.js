import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import {ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline'
import {AntDesign, Ionicons} from 'react-native-vector-icons'

export default function Search() {
 return (
    <View className='flex-row items-center mx-3 mb-4'>
    <View className='flex-row flex-1 p-2 space-x-2 bg-slate-200 rounded-full'>
        <MagnifyingGlassIcon size={30} color='#00ccbb' />
        <TextInput placeholder='search'  />
    </View>
    <AdjustmentsHorizontalIcon color='#00ccbb'  size={30} />
 </View>
)
}



