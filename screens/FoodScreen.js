import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FoodScreen = () => {
  return (
    <View style={styles.foodScreen}>
      <Text>FOOD</Text>
    </View>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  foodScreen: {
    backgroundColor: '#2b303b',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});
