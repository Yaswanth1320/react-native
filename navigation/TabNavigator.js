import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // Import Stack Navigator
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen"; // Import Edit Profile Screen
import ShippingAddressesScreen from "../screens/ShippingAddressesScreen"; // Import Shipping Addresses Screen
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();  // Create a Stack Navigator

// Function to create a Stack Navigator for the Profile tab
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide headers within the Stack Navigator
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen
        name="ShippingAddresses"
        component={ShippingAddressesScreen}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "ProfileTab") {
            // IMPORTANT: Changed from 'Profile' to 'ProfileTab'
            iconName = focused ? "person" : "person-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#33adff",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#f8f8ff",
          borderTopColor: "#ddd",
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen
        name="ProfileTab" // IMPORTANT: Changed from 'Profile' to 'ProfileTab'
        component={ProfileStackNavigator} // Use the Stack Navigator here
        options={{
          tabBarLabel: "Profile", // Display "Profile" on the tab
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;