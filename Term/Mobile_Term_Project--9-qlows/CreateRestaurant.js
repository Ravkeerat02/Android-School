import React, {useState} from 'react';
import {StyleSheet, Text, View, } from 'react-native';
import {TextInput, Button} from 'react-native-paper';


const RestaurantArray = [
  
]


const CreateRestaurant = ()=> {
  const [Name, setName] = useState("")
  const [Address, setAddress] = useState("")
  const [Description, setDesc] = useState("")
  // const [Name, setName] = useState("")


  return  (
    <View style={styles.root}>
         <TextInput
         label='Restaurant Name'
         style={styles.input}
         mode="outlined"
         theme={theme}
         value={Name}
         onChangeText={text => setName(text)}

           


         />
                <TextInput
         label='Restaurant Address'
         style={styles.input}
         mode="outlined"
         theme={theme}
         value={Address}
         onChangeText={text => setAddress(text)}

           


         />
                <TextInput
         label='Restaurant Description'
         style={styles.input}
         mode="outlined"
         theme={theme}
         value={Description}
         onChangeText={text => setDesc(text)}

           


         />

         <Button
         style={styles.input}
         icon="content-save"
         mode="contained"
         theme={theme}
         onPress={
           ()=> console.log("saved")
         }>


          Save
        

        </Button>
               
    </View>

  )
}
const theme = {
  colors:{
    primary: "orange"
  }
}

const styles=StyleSheet.create({
  root:{
    flex: 1
  },
  input: {
    margin: 5
  }
})

export default CreateRestaurant;