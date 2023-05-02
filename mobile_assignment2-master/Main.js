import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Button,
  Keyboard,
} from 'react-native';

export default function Main({ navigation }) {
  const [unit, setUnit] = useState(0);
  const [size, setSize] = useState(0);
  const [priceUnit, setPriceUnit] = useState(0);
  const [priceInstall, setPriceInstall] = useState(0);
  const [isMeters, setIsMeters] = useState(true);
  const [output, setOutput] = useState();

  const toggleSwitch = () => setIsMeters((isMeters) => !isMeters);

  const Output = () => {
    const unitType = isMeters ? 'Meters' : 'Square Feet';
    const flooringCost = size * priceUnit;
    const installationCost = size * priceInstall;
    const totalCost = flooringCost + installationCost;
    const tax = totalCost * 0.13;
    Keyboard.dismiss();
    setOutput(
      <View styles={styles.outputContainer}>
        <Text>Installation Cost: ${installationCost}</Text>
        <Text>Flooring Cost: ${flooringCost}</Text>
        <Text>Total Cost: ${totalCost}</Text>
        <Text>Tax: ${tax}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <TextInput
          style={styles.input}
          placeholder="Room size"
          onChangeText={(text) => setSize(text)}
          name="size"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Price per unit of flooring"
          onChangeText={(text) => setPriceUnit(text)}
          name="priceUnit"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Installation cost per unit"
          onChangeText={(text) => setPriceInstall(text)}
          name="priceInstall"
          keyboardType="numeric"
        />
        <View style={styles.switchView}>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isMeters ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isMeters}
          />
          <Text style={styles.switchText}>
            {isMeters ? 'Meters' : 'Feet Sqaured'}
          </Text>
        </View>
        <Button
          onPress={() => Output()}
          title="Submit"
          color="#0000FF"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <View style={styles.outputText}>{output}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 1,
  },
  inputContainer: {
    marginTop: 40,
    marginBottom: 50,
    padding: 1,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    width: 250,
  },
  outputContainer: {
    marginTop: 10,
  },
  switchText: {
    fontSize: 20,
    marginLeft: 20,
  },
  switchView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  outputText: {
    fontSize: 20,
  },
});
