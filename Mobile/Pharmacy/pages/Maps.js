import React from 'react';
import { SvgUri } from 'react-native-svg';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Maps({ route }) {
  const { lat, log } = route.params;

  const initialRegion = {
    latitude: lat,
    longitude: log,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={{ latitude: lat, longitude: log }}>
          <SvgUri
            uri={require('../assets/images/mark.svg')}
            width={30} 
            height={30}
          />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
