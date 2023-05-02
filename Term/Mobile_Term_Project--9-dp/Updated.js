import * as React from 'react';
import { Button, View , StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MapView from "react-native-maps";

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

function TeamMember({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={styles.id}>David Pinto - 101280540</Text>
       <Text style={styles.id}>Josiah Galloway - 101296257</Text>
       <Text style={styles.id}>Ravkeerat Singh - 101344680</Text>
       <Text style={styles.id}>Umit Kilinc - 101232721</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Search({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
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


function AddNewPlace({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}


function Favorites({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function EditPlace({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function Results({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}


function Navigation() {
  return (
    <View style={styles.marker}>
      <Text style={styles.color}>Tokyo</Text>
    </View>
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
  text: {
  color: "#fff",   
  },
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
        <Drawer.Screen name= "Results " component = {Results} />
        <Drawer.Screen name= "Navigation " component = {Navigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
