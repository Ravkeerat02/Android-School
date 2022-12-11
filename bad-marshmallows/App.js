import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView , Image, TextInput, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const DATA = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: '2',
    username: 'Second item',
    name: 'Sam Gamgee'
  },
  {
    id: '3',
    username: 'Third item',
    name: 'Pipin'
  },
  {
    id: '4',
    username: 'Other item',
    name: 'Tom Bombadil'
  },
];




function Item({userId, id, title ,  onPress, backgroundColor, textColor}){
  return(
    <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
      <Text style={[styles.userId, textColor]}>{userId}</Text>
      <Text style={[styles.id, textColor]}>{id}</Text>
      <Text style = {[styles.title, textColor]}>{title}</Text>
    </TouchableOpacity>
  );

}


function HomeScreen({navigation}){
  const[selectedId, setSelectedId] = React.useState(null);
  const[refresh, setRefresh] = React.useState(0);
  const[list, setData] = React.useState(DATA);
  const[isLoading, setLoading] = React.useState(true);

  const getUsers = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const json = await response.json();
      setData(json);
    }catch(error){
      console.error(error);
    }finally{
      setLoading(false);
    }
  }

  React.useEffect(()=>{
    getUsers();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
    <Text>Ravkeerat Singh - 101344680</Text>
    {isLoading ? <ActivityIndicator /> : (
      <FlatList 
        data={list}
        renderItem={({item})=>{
          const backgroundColor = item.id === selectedId ? "#00539CFF" : "#EEA47FFF";
          const color = item.id === selectedId ? 'white' : 'black';
          return(<Item 
              title={item.username} 
              author={item.name} 
              onPress = {()=>navigation.navigate('Details', {item})}//()=>setSelectedId(item.id)}
              backgroundColor = {{backgroundColor}}
              textColor = {{color}}
              />);
          }}
        keyExtractor={item=>item.id}  
        extraData={refresh}
      />)}


    </SafeAreaView>
  );
}

function DetailsScreen({route, navigation}){
  return(
    <>
      <Text>{route.params.item.id}</Text>
      <Text>{route.params.item.title}</Text>
      <Text>{route.params.item.user}</Text>
    </>
  );
}
const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item:{
    backgroundColor: '#a9c2ff',
    padding:20,
    marginVertical:8,
    marginHorizontal:16
  },
  title:{
    fontSize:28
  },
});
