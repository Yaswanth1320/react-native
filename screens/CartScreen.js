import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import FontItems from "../test/FontItems";

const CartScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <FontItems />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CartScreen;