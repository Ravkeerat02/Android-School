import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function Map({navigation}) {
    const state = {
        latitude: null,
        longitude: null,
        error: null,
    }
    
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Map</Text>
                <Icon name={'md-map'} color={'#606060'} size={40} style={styles.icon}/>
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: 43.6698207,
                  longitude: -79.3897667,
                  latitudeDelta: 1,
                  longitudeDelta: 1
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 43.6695384,
                        longitude: -79.3908394,
                    }}
                    title={'Eataly'}
                />
                <Marker
                    coordinate={{
                        latitude: 43.670455,
                        longitude: -79.3957399,
                    }}
                    title={'Cibo Wine Bar'}
                />
            </MapView>

        </View>
    )
}


Map.navigationOptions = {
    tabBarIcon:({tintColor, focused})=> (
        <Icon
            name={'md-map'}
            color={tintColor}
            size={25}
        />
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        minHeight: 70,
        color: '#0000FF'
    },

    headerText: {
        fontSize: 20,
        fontFamily: 'MataoFreeDemoRegular400',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 30,
        color: '#0000FF'
    },

    icon: {
        marginLeft: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 'auto',
        color: '#0000FF'
    },

    map: {
        height: '100%',
    }
});