import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');



export default function App() {
  const mykey = 'text';
  const [val, setValue] = React.useState("");
  const [dbData, setDbData] = React.useState({data:[]});

  React.useEffect(()=>{
  db.transaction(
    tx=>{
      tx.executeSql('CREATE TABLE IF NOT EXISTS items (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)', null, undefined, (txObj, error)=>{console.log(error)});
      
    }
  );
},[]);

  const saveDataToDB = (itemName) => {
    db.transaction(
      tx=>{
        tx.executeSql('INSERT INTO items(name)VALUES (?)', [itemName], undefined, (txObj, error)=>{console.log(error)});
      }
    );
  }

  const fetchDataFromDB = () => {
    db.transaction(
      tx=>{
        tx.executeSql('SELECT * FROM items', null, 
        (txObj, {rows: {_array}})=>setDbData({data:_array}),
        (txObj, error)=>{console.log(error)});
      }
    );
  }


  
  
  const storeData = async (key, value) => {
    try{
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    }catch(e){
      console.log(e);
      alert(e);
    }
  }

  const getData = async (key) => {
    try{
      const jsonVal = await AsyncStorage.getItem(key);
      if(jsonVal !== null){
        return JSON.parse(jsonVal);
      }else{
        return null;
      }
    }catch(e){
      console.log(e);
      alert(e);
    }
  }  
 
  return (
    <View style={styles.container}>
      <TextInput onChangeText={text=>setValue(text)} value={val} 
          style={{height:40, borderColor:'gray', borderWidth:1, width:"100%"}}/>
      <Button onPress={()=>{storeData(mykey, {"key":val})}} title="Save Data" />
      <Button onPress={()=>{
        setValue("");
        getData(mykey).then((v)=>{ setValue(v.key); }
          );
        
        
      }} title="Get Data" />
      <Button onPress={()=>{saveDataToDB(val)}} title="Save Data to DB" />
      <Button onPress={()=>{fetchDataFromDB()}} title="Fetch Data to DB" />
      <Text>{val}</Text>
      <Text>{JSON.stringify(dbData)}</Text>
    </View>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
