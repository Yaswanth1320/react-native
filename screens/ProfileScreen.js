import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const user = {
    name: "Roan Atkinson",
    occupation: "Entrepreneur",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
  };

  const orderCategories = [
    {
      name: "Pending Payment",
      icon: "wallet",
      iconType: "MaterialIcons",
      color: "#3498db",
    },
    {
      name: "Delivered",
      icon: "truck-delivery",
      iconType: "MaterialCommunityIcons",
      color: "#f1c40f",
    },
    {
      name: "Processing",
      icon: "refresh",
      iconType: "MaterialIcons",
      color: "#e74c3c",
    },
    {
      name: "Cancelled",
      icon: "cancel",
      iconType: "MaterialIcons",
      color: "#2ecc71",
    },
    {
      name: "Wishlist",
      icon: "favorite", // corrected icon name
      iconType: "MaterialIcons",
      color: "#e91e63",
    },
    {
      name: "Customer Care",
      icon: "headphones",
      iconType: "MaterialIcons",
      color: "#9b59b6",
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={18} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <View style={{ position: "relative" }}>
            <Image
              source={{ uri: user.profileImage }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.cameraIconContainer}>
              <MaterialIcons name="camera-alt" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.occupation}>{user.occupation}</Text>
          </View>
        </View>

        {/* Pink Wave (using a simple View with styling) */}
        <View style={styles.wave} />

        {/* My Orders */}
        <Text style={styles.sectionTitle}>My Orders</Text>
        <View style={styles.ordersContainer}>
          {orderCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.orderItem,
                {
                  backgroundColor:
                    hoveredItem === index ? "lightgray" : "whitesmoke", //hover color
                },
              ]}
              onPressIn={() => setHoveredItem(index)} // Hover start
              onPressOut={() => setHoveredItem(null)} // Hover end
              activeOpacity={1} //  Make sure opacity doesn't change on press
            >
              {category.iconType === "MaterialIcons" && (
                <MaterialIcons
                  name={category.icon}
                  size={20}
                  color={category.color}
                />
              )}
              {category.iconType === "MaterialCommunityIcons" && (
                <MaterialCommunityIcons
                  name={category.icon}
                  size={20}
                  color={category.color}
                />
              )}
              <Text style={styles.orderText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.content}>
          {/* Options */}
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <MaterialIcons name="person" size={20} color="gray" />
            <Text style={styles.optionText}>Edit Profile</Text>
            <MaterialIcons name="chevron-right" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => {
              navigation.navigate("ShippingAddresses");
            }}
          >
            <MaterialIcons name="location-on" size={20} color="gray" />
            <Text style={styles.optionText}>Shipping Address</Text>
            <MaterialIcons name="chevron-right" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <MaterialIcons name="logout" size={20} color="gray" />
          <Text style={styles.logoutText}>Logout</Text>
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
    paddingTop: 10,
    marginBottom: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 16,
  },
  backButton: {
    marginRight: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat_600SemiBold", // Use Montserrat Semibold for title
  },
  profileContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "whitesmoke",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileInfo: {
    alignItems: "center",
    gap: 5,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 3,
    left: "70%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "Montserrat_700Bold", // Use Montserrat Bold for name
  },
  occupation: {
    fontSize: 16,
    color: "gray",
    fontFamily: "Montserrat_400Regular",
  },
  wave: {
    backgroundColor: "#33adff",
    height: 50,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: "Montserrat_600SemiBold", // Use Montserrat Semibold for section title
  },
  ordersContainer: {
    flexDirection: "row",
    height: 200,
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 20,
    marginBottom: 10,
  },
  orderItem: {
    backgroundColor: "#ecf0f1", // Light gray background color
    alignItems: "center",
    height: 80,
    justifyContent: "center",
    padding: 12,
    borderRadius: 60,
    width: "30%",
    marginBottom: 10,
    shadowColor: "#000", // Add a subtle shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  orderText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    fontFamily: "Montserrat_400Regular",
  },
  content: {
    flex: 1,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    fontFamily: "Montserrat_400Regular",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 3,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 16,
    color: "gray",
    marginLeft: 5,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ProfileScreen;
