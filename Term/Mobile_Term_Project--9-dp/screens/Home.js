import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Search from '../components/Search';
import RestaurantCard from '../components/RestaurantCard'

export default function Home(){
  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      <View style={{backgroundColor:" #eee"}}>  
        <Search />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>
    </SafeAreaView>
  )
}