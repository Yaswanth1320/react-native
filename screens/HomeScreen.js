import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Icon from "react-native-vector-icons/Ionicons"; // Or any icon library you prefer
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const username = "John Doe"; // Replace with actual username
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.welcomeText}>Welcome, {username}!</Text>
        <View style={styles.wrapper}>
          <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchBar} placeholder="Search..." />
            <TouchableOpacity onPress={() => console.log("Search pressed")}>
              <Icon name="search" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => console.log("Notifications pressed")}
          >
            <Icon name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content (Replace with your actual Home Screen content) */}
      <View style={styles.mainContent}>
        <Text>This is the main content of the Home Screen.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  topContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: 100,
    backgroundColor: "#fff",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 8,
    fontFamily: "Montserrat_400Regular",
    padding: 8,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontFamily: "Montserrat_400Regular",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default HomeScreen;
