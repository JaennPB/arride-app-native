import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.mapScreen}>
      <Text>MAP</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapScreen: {
    backgroundColor: '#2b303b',
    height: '100%',
  },
});
