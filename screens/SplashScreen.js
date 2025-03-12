import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [dot1Anim] = useState(new Animated.Value(0.5));
  const [dot2Anim] = useState(new Animated.Value(0.5));
  const [dot3Anim] = useState(new Animated.Value(0.5));

  useEffect(() => {
    const animateDots = () => {
      Animated.sequence([
        Animated.timing(dot1Anim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(dot2Anim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(dot3Anim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(dot1Anim, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(dot2Anim, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(dot3Anim, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => animateDots());
    };

    animateDots();

    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, [dot1Anim, dot2Anim, dot3Anim, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABIBO</Text>
      <View style={styles.dotContainer}>
        <Animated.View
          style={[styles.dot, { transform: [{ scale: dot1Anim }] }]}
        />
        <Animated.View
          style={[styles.dot, { transform: [{ scale: dot2Anim }] }]}
        />
        <Animated.View
          style={[styles.dot, { transform: [{ scale: dot3Anim }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#58bafc",
  },
  title: {
    fontFamily: "Montserrat-Italic",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#030303",
  },
  dotContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
});

export default SplashScreen;
