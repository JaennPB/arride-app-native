import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
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
    paddingVertical: 40,
  },
  logoContainer: {
    // width: '100%',
    // alignItems: 'flex-end',
  },
  logo: {
    width: '50%',
    height: 50,
    resizeMode: 'contain',
  },
});
