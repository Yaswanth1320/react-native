import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PhoneLoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOTP = () => {
    // Implement the OTP sending logic here
    console.log("Sending OTP to:", phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.sendOTPButton} onPress={handleSendOTP}>
        <Text style={styles.sendOTPButtonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },
  sendOTPButton: {
    backgroundColor: "#33adff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  sendOTPButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PhoneLoginScreen;
