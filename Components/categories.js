import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import { useNavigation } from '@react-navigation/native'
import { client } from '../sanity'

export default function Categories() {
  const nav = useNavigation();
  const [categories, setCategory] = useState([]);

  useEffect(()=>{
    client.fetch(`*[_type == 'category']`).then(data => {
      setCategory(data);
    });
  }, []);
  //console.log(categories);
 return (
 <ScrollView 
 contentContainerStyle={{paddingHorizontal:15, paddingTop:5}}
 horizontal
 showsHorizontalScrollIndicator={false}
 >
  {categories?.map(cat => (
    <CategoryCard key={cat._id} title={cat.title} imgUrl={cat.Image} />
  ))}
   
   {/* <CategoryCard title="Selling" imgUrl='https://links.papareact.com/gn7' />
   <CategoryCard title="Testing" imgUrl='https://links.papareact.com/gn7' />
   <CategoryCard title="Pizza" imgUrl='https://links.papareact.com/gn7' />
   <CategoryCard title="Testing" imgUrl='https://links.papareact.com/gn7' /> */}
   
 </ScrollView>
)
}

const styles = StyleSheet.create({
 container:{}
})