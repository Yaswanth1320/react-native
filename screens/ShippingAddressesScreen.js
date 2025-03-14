import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ShippingAddressesScreen = () => {
  const navigation = useNavigation();

  const [addresses, setAddresses] = useState([
    {
      id: "1",
      name: "John Doe",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "91234",
      isDefault: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      street: "456 Oak Ave",
      city: "Someville",
      state: "NY",
      zip: "10001",
      isDefault: false,
    },
  ]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <View style={styles.addressItem}>
      <Text style={styles.addressName}>{item.name}</Text>
      <Text style={styles.addressText}>{item.street}</Text>
      <Text style={styles.addressText}>
        {item.city}, {item.state} {item.zip}
      </Text>
      {item.isDefault && (
        <Text style={styles.defaultAddress}>Default Address</Text>
      )}
      <View style={styles.addressActions}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={18} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Shipping Addresses</Text>
        </View>

        <FlatList
          data={addresses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add New Address</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_600SemiBold",
  },
  addressItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  addressName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Montserrat_600SemiBold",
  },
  addressText: {
    fontFamily: "Montserrat_400Regular",
  },
  defaultAddress: {
    color: "green",
    marginTop: 5,
    fontFamily: "Montserrat_400Regular",
  },
  addressActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#3498db",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  editButtonText: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
  addButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default ShippingAddressesScreen;
