import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontItems from "../test/FontItems";

const CartScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      <FontItems />
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
});

export default CartScreen;
