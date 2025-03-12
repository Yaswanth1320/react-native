import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker"; // For image picking

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("Roan Atkinson"); // Initial value from profile
  const [occupation, setOccupation] = useState("Entrepreneur"); // Initial occupation
  const [email, setEmail] = useState("roan@example.com"); // Example email
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/10.jpg"
  ); // Initial image URL

  const handleSaveProfile = () => {
    // Here you would typically make an API call to update the user's profile
    // with the new values of name, occupation, email, and profileImage.
    // For now, we'll just navigate back to the profile screen.
    console.log("Saving profile with:", {
      name,
      occupation,
      email,
      profileImage,
    });
    navigation.goBack(); // Navigate back to the profile screen
  };

  const pickImage = async () => {
    // Request permissions if not already granted
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      // Changed from !result.cancelled
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Edit Profile</Text>
      </View>

      <View style={styles.profileImageContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <View style={styles.cameraIconContainer}>
            <MaterialIcons name="camera-alt" size={20} color="gray" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Occupation:</Text>
          <TextInput
            style={styles.input}
            value={occupation}
            onChangeText={setOccupation}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
          <Text style={styles.saveButtonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  backButton: {},
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold", // Use Montserrat Semibold for header
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 5,
    padding: 20,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 3,
    left: "70%", // Adjusted to the right
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "Montserrat_600SemiBold", // Use Montserrat Semibold for label
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    backgroundColor: "white",
    fontFamily: "Montserrat_400Regular", // Use Montserrat Regular for input
  },
  saveButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_600SemiBold", // Use Montserrat Semibold for button text
  },
});

export default EditProfileScreen;