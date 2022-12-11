import * as React from 'react';
import { Text, View, StyleSheet,TextInput , Button , SafeAreaView ,Image ,FlatList ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const DATA = [
  {
    id:'1',
    title: 'First Item',
    author: 'Jane Doe'
  },
  {
    id:'2',
    title: 'Second Item',
    author: 'Jane Doe'
  },
  {
    id:'3',
    title: 'Third Item',
    author: 'Jane Doe'
  },
  {
    id:'1',
    title: 'Fourth Item',
    author: 'Jane Doe'
  },
]

function Item({title,author,onPress,backgroundColor,textColor}){
  return(
    <TouchableOpacity style={[styles.item,backgroundColor]} onPress={onPress}>
      <Text style={[styles.title,textColor]}>{title}</Text>
      <Text style={[styles.author ,textColor]}>{author}</Text>
    </TouchableOpacity>
  )
}

export default function App() {

  const [val,onChangeText] = React.useState("ENTER TEXT");
  const [refresh, setRefresh] = React.useState(0);
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>


      <Button title="Add" onPress={()=>{
        id = Math.random()*100;
        sid = id.toString();
        DATA.push({id:sid,title:'title'+sid ,author:'auto'});
        setRefresh(refresh+1);
      }}/>
      <FlatList
        data={DATA}
        renderItem={({item})=>{
          const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#a92cff";
          const color = item.id === selectedId ? 'white' : 'black';
        return(<Item title={item.title} 
              author={item.author} 
              onPress={()=>setSelectedId(item.id)}
              // set to the following value
              backgroundColor = {{backgroundColor}} 
              textColor = {{color}}
              />);}
        }
        keyExtractor={item=>item.id}
        extraData={DATA}
      />
    </SafeAreaView>  
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title:{
    fontSize: 28
  },
  author:{
    fontSize: 16
  }
});

