import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Search() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{ marginTop: 20}}>
      <Searchbar
        inputStyle={{            
              backgroundColor: '#eee',
              borderRadius: 20,
              margin: 5,
            }}

           inputContainerStyle = {{
              borderRadius: 50,
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 50
            }}

        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
}
