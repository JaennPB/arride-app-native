import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const NavOptions = () => {
  const navigation = useNavigation();

  const buttonStyles = (pressed) => {
    let updatedStyles = [styles.button];

    if (pressed) {
      updatedStyles.push({ opacity: 0.5 });
    }
    return updatedStyles;
  };

  return (
    <View style={styles.navOptionsContainer}>
      <Pressable
        style={({ pressed }) => buttonStyles(pressed)}
        onPress={() => navigation.navigate('MapScreen')}
      >
        <Ionicons name="car-sport-sharp" size={40} color="white" />
        <Text style={styles.text}>Get a ride</Text>
        <Ionicons name="arrow-forward-circle" size={30} color="white" />
      </Pressable>
      <Pressable
        style={({ pressed }) => buttonStyles(pressed)}
        onPress={() => navigation.navigate('FoodScreen')}
      >
        <Ionicons name="fast-food" size={40} color="white" />
        <Text style={styles.text}>Order food</Text>
        <Ionicons name="arrow-forward-circle" size={30} color="white" />
      </Pressable>
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  navOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#4f5669',
    padding: 20,
    borderRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 170,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
