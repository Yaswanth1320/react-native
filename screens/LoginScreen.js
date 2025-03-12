import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PhoneLoginScreen from "./PhoneLoginScreen";
import EmailLoginScreen from "./EmailLoginScreen";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>ABIBO</Text>

      <View style={styles.tabContainer}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 16, fontWeight: "bold", fontFamily: "Montserrat_600SemiBold" },
            tabBarStyle: { backgroundColor: "#FFFFFF", borderRadius: 10 },
            tabBarIndicatorStyle: { backgroundColor: "#33adff", height: 3 },
            tabBarInactiveTintColor: "#777777",
            tabBarActiveTintColor: "#333333",
          }}
        >
          <Tab.Screen name="Phone" component={PhoneLoginScreen} />
          <Tab.Screen name="Email" component={EmailLoginScreen} />
        </Tab.Navigator>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
  },
  tabContainer: {
    width: "80%",
    maxWidth: 400,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: "#777777",
    fontFamily: "Montserrat_400Regular",
  },
  signupButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default LoginScreen;