import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { StyleSheet } from "react-native";

const App = () => {
  return <AppNavigator />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
