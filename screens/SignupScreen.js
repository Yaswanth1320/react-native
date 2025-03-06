import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    // Implement signup logic here
    console.log("Signing up...");
    navigation.replace("dashboard"); // After successful signup, go back to Login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Welcome back you've been missed!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Pincode"
        keyboardType="number-pad"
        maxLength={6} // Assuming a 6-digit pincode
      />

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8ff", // Light background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333", // Darker text color
  },
  subtitle: {
    fontSize: 16,
    color: "#777777",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF", // White input
    borderColor: "#DDDDDD", // Light border
    borderWidth: 1,
    borderRadius: 10, // Rounded corners
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  signupButton: {
    width: "100%",
    backgroundColor: "#33adff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignupScreen;
