import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

export default function PreparingOrderScreen() {
    const nav = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            nav.navigate('Delivery');
        }, 3000)
    }, [])
 return (
 <SafeAreaView className='flex-1 justify-center items-center bg-[#00ccbb]'>
    <Animatable.Image
    source={require('../assets/orderLoad.gif')}
    animation='slideInUp'
    iterationCount={1}
    className='h-96 w-96'
     />

     <Animatable.Text animation='slideInUp' iterationCount={2} className='font-bold text-lg text-white text-center my-10'>
        Waiting for restaurant to accept and process order
     </Animatable.Text>

     <Progress.Circle size={70} indeterminate={true} color='white'/>
     {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}
 </SafeAreaView>
)
}

const styles = StyleSheet.create({
 container:{}
})