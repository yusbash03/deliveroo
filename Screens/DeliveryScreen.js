import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import { PhoneIcon, XCircleIcon } from 'react-native-heroicons/outline'
import { XIcon, XMarkIcon } from 'react-native-heroicons/solid'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';

export default function DeliveryScreen() {
    const nav = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    //console.log(restaurant);

 return (
 <View className='bg-[#00ccbb] flex-1'>
    <SafeAreaView className='z-50'>
        <View className='flex-row justify-between p-5 items-center'>
            <TouchableOpacity onPress={()=> nav.navigate('Home')}>
                <XMarkIcon size={30} color='whitesmoke' />
            </TouchableOpacity>
            <Text className='txt-lg font-light text-white'>Order Help</Text>
        </View>

        <View className='mx-5 my-2 bg-white rounded-md p-6 z-50 shadow-lg'>
            <View className='flex-row justify-between'>
                <View className=''>
                <Text className='text-lg text-gray-500'>Estimated Arrival time</Text>
                <Text className='text-3xl font-bold'>30-45 minutes</Text>
                </View>
              
                <Image className='h-20 w-20' source={{uri: 'https://links.papareact.com/wru'}} />
            </View>
            <View className='p-2'>
            <Progress.Bar size={50} indeterminate={true} width={200} color='#00ccbb' />
            </View>
            
            <Text className='mt-4 text-gray-500'>
                Your order at {restaurant.title} is being prepared
            </Text>

        </View>
    </SafeAreaView>

    <MapView
    initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    }}
    mapType='mutedStandard'
    className='flex-1 -mt-10 z-0'
    >
        <Marker
        coordinate={{    latitude: restaurant.lat,
            longitude: restaurant.lng,}}
        title={restaurant.title}
        description={restaurant.short_desc}
        identifier='origin'
        pinColor='red'
         />
    </MapView>

    <SafeAreaView className='flex-row bg-white space-x-5 items-center h-28'>
    <Image className='h-16 w-16 bg-gray-300 ml-5 p-4 rounded-full' source={{uri: 'https://links.papareact.com/wru'}} />
        <View className='flex-1'>
            <Text className='text-gray-700 text-lg'>Yusuf Bash</Text>
            <Text className='text-gray-400'>Your Rider</Text>
        </View>

<Animatable.View
 animation="pulse"
 easing="ease-in-out"
  iterationCount={"infinite"}
  className='rounded-full border-teal-400 border-solid '
>
<TouchableOpacity className='mr-4 bg-[#00ccbb] p-3 rounded-full' onPress={()=> Alert.alert('Attention!', 'Not yet available')}>
    <PhoneIcon color='white' size={30} />
</TouchableOpacity >
</Animatable.View>

        {/* <Text>Call</Text> */}
      
    </SafeAreaView>
 </View>
)
}

const styles = StyleSheet.create({
 container:{}
})