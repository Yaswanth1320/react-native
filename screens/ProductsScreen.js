import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Products</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: "Montserrat_400Regular"
  }
});

export default ProductsScreen;