import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = () => (
  <View style={styles.container}>
    <Text>Cart</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartScreen;