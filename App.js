import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./navigation/AppNavigator"; // Import your navigator
import { useFonts } from "expo-font";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Example icon library

const App = () => {
  let [fontsLoaded] = useFonts({
    CustomFont: require("./assets/fonts/CustomFont.ttf"), 
    ...Ionicons.font, 
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading fonts...</Text>
      </View>
    );
  } else {
    return <AppNavigator />;
  }
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
