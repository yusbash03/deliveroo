import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, Image, TextInput, ScrollView } from 'react-native'
import {ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon} from 'react-native-heroicons/outline'
import Search from '../Components/Search'
import Categories from '../Components/categories'
import FeaturedRow from '../Components/FeaturedRow'
import { useNavigation } from '@react-navigation/native'
import { client } from '../sanity'
import { getAllFeatured } from '../sanityAPIQuery'

export default function HomeScreen() {
  const nav = useNavigation();
  const [featured, setFeatured] = useState([]);

  useLayoutEffect(()=>{
    nav.setOptions({
      headerShown: false
    });
  }, []);

  useEffect(()=>{
    client.fetch(`*[_type == 'featured']{
      ...,
      restaurant[] ->{
        ...,
        dishes[]->
      }
    }`).then(data => {
      setFeatured(data);
    });
  
  }, []);
  //console.log(featured);
 return (
 <SafeAreaView className='bg-white pt-5'>
   <View className='flex-row mx-4 pb-4 space-x-2 items-center'>
      <Image source={{uri:'https://links.papareact.com/wru'}} className='w-8 h-8 p-4 bg-gray-300 rounded-full'/>

      <View className='flex-1'>
      <Text className='text-sm text-gray-500'>Deliver Now!</Text>
      <Text className='text-lg font-bold'>Current Location <ChevronDownIcon size={23} color="#00ccbb" />
      </Text>
      </View>
      <UserIcon size={32} color="#00ccbb" />
   </View>

   {/* search */}
  <Search />

  {/* body */}
  <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom:130}}>
    {/* categories */}
    <Categories />
    {/* featured */}
    {featured?.map(data => (
       <FeaturedRow title={data.name} id={data._id} description={data.short_description} key={data._id}/>
    ))}
   
    {/* <FeaturedRow title='Featured' description='Your favourite sushi and pizza restaurant' id="123"/>
    <FeaturedRow title='Tasty Discounts' description='Your favourite Burger and pizza restaurant always' id="1234"/> */}
    {/* offer discount */}
  </ScrollView>
 </SafeAreaView>
)
}

const styles = StyleSheet.create({
 container:{}
})