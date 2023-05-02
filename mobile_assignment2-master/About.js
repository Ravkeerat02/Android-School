import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ravkeerat Singh</Text>
            <Text style={styles.text}>101344680</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00539CFF',
      alignItems: 'center',
      justifyContent:'center'
    },
    text: {
        fontSize: 20,
        color:'#EEA47FFF'
        
    }
  });