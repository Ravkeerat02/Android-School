import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { localRestaurants } from '../Data/Restaurants';

export default function RestaurantCard() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 20 }}>
        <Searchbar
          inputStyle={{
            backgroundColor: '#eee',
            borderRadius: 20,
            margin: 5,
          }}
          inputContainerStyle={{
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 50,
          }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      {localRestaurants.map((restauraunt, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: 'gray' }}>
          <RestaurantImage image={restauraunt.image_url} />
          <RestaurantInfo name={restauraunt.name} rating={restauraunt.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: '100%', height: 180, marginTop: 10 }}
      />
    </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
      }}>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: 'gray',
          }}>
          30-35 min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FEB06A',
          height: 30,
          width: 30,
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Text style={{ paddingTop: 4 }}>{props.rating}</Text>
      </View>
    </View>
  );
};
