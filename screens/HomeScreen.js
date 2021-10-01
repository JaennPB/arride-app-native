import React from 'react';
import { StyleSheet, SafeAreaView, Image, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';

import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <GooglePlacesAutocomplete
        placeholder="Where are you at?"
        styles={{
          container: {
            flex: 0,
            marginVertical: 30,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    backgroundColor: '#2b303b',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logo: {
    width: '40%',
    height: '10%',
    resizeMode: 'center',
  },
});
