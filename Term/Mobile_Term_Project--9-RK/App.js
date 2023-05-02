import * as React from 'react';
import { Button, View , StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MapView from "react-native-maps";
import CreateRestaurant from './CreateRestaurant';
import EditRestaurant from './EditRestaurant';
import Map from './Map';
import SearchFucntion from './Search';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function TeamMember() {
  return (
    <View style= {styles.container}>
       <Text style={styles.id}>David Pinto - 101280540</Text>
       <Text style={styles.id}>Josiah Galloway - 101296257</Text>
       <Text style={styles.id}>Ravkeerat Singh - 101344680</Text>
       <Text style={styles.id}>Umit Kilinc - 101232721</Text>
    </View>
  );
}

function Search(){
  return (
    <SearchFucntion/>
  )
}

function Review({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}


function AddNewPlace() {
  return (
<CreateRestaurant/>
  );
}


function Favorites() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function EditPlace() {
  return (
    <EditRestaurant/>
  );
}


function Navigation() {
  return (
   <Map/>
  );
}




const styles = StyleSheet.create({
  id:{
    fontStyle: 'normal',
    fontWeight : 'bold'
  },
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#007bff",
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10,
  },
  container: {
    flex:1 ,
    justifyContent  :'center',
    backgroundColor : '#D2B48CDe',
    textAlign : 'center'
  }
})

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Splash" component={HomeScreen} />
        <Drawer.Screen name = "Team Members" component = {TeamMember} />
        <Drawer.Screen name = "Search" component = {Search} />
        <Drawer.Screen name = "Review" component = {Review} />
        <Drawer.Screen name = "Favorites" component = {Favorites} />
        <Drawer.Screen name= "Add " component = {AddNewPlace} />
        <Drawer.Screen name= "Edit " component = {EditPlace} />
        <Drawer.Screen name= "Navigation " component = {Navigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
