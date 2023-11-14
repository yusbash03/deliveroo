import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { View, StyleSheet, Text } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { useNavigation } from '@react-navigation/native'
import { client } from '../sanity'

export default function FeaturedRow({title, id, description, featuredCategory}) {
  const nav = useNavigation();
  const [restaurant, setRestaurant] = useState([]);

  useLayoutEffect(()=>{
    nav.setOptions({
      headerShown: false
    });
  }, []);

  useEffect(()=>{
    client.fetch(`*[_type == 'featured' && _id == $id]{
      ...,
      restaurant[] ->{
        ...,
        dishes[]->,
        type->{
          name
        }
      }
    }[0]`, {id}).then(data => {
      setRestaurant(data?.restaurant);
    });
  
  }, [id]);
  //console.log(restaurant)
 return (
 <View >
   <View className='flex-row items-center mt-4 justify-between px-3'>
   <Text className='font-bold text-lg'>{title}</Text>
   <ArrowRightIcon size={25} color='#00ccbb' />
   </View>
   <Text className='text-sm text-gray-500 px-3'>{description}</Text>

   <ScrollView horizontal showsHorizontalScrollIndicator={false} 
   contentContainerStyle={{paddingHorizontal:15}} className='pt-4'>
    {restaurant?.map(restuarants => (
       <RestaurantCard
       id ={restuarants._id} imgUrl={restuarants.image} title={restuarants.name} dishes={restuarants.dishes} lat={restuarants.lat} lng={restuarants.lng} short_desc={restuarants.short_desc}
        rating={restuarants.rating} genre={restuarants.type?.name} address={restuarants.address} key={restuarants._id}
        />
    ))}
     
      {/* <RestaurantCard
      id ={12} imgUrl='https://links.papareact.com/gn7' title='Gomez' dishes={[]} lat={3.55} lng='0.33' short_desc='Short description'
       rating='4.3' genre='Mexican' address='20 Messi-West'
       />
      <RestaurantCard
      id ={12} imgUrl='https://links.papareact.com/gn7' title='Xan Chi' dishes={[]} lat={3.55} lng='0.33' short_desc='Short description'
       rating='4.5' genre='Japanese' address='22 Jump Street'
       />
      <RestaurantCard
      id ={12} imgUrl='https://links.papareact.com/gn7' title='BabaTunde' dishes={[]} lat={3.55} lng='0.33' short_desc='Short description'
       rating='4.1' genre='African' address='24 North-East'
       /> */}
   </ScrollView>
 </View>
)
}

// const styles = StyleSheet.create({
//  container:{}
// })