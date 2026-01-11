import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useAuth } from "../hooks/useAuth"; // adjust path if needed
import { useNavigation } from "@react-navigation/native";

export default function LoadingScreen() {
  const { user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate loading/auth check
    const timer = setTimeout(() => {
      if (user) {
        navigation.replace("Portfolio"); // go to main app if logged in
      } else {
        navigation.replace("Welcome"); // go to welcome/login if not logged in
      }
    }, 1500); // simulate 1.5s loading

    return () => clearTimeout(timer);
  }, [user, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Vito</Text>
      <ActivityIndicator size="large" color="#2563EB" style={{ marginTop: 24 }} />
      <Text style={styles.loadingText}>Loading your portfolio...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 42,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  loadingText: {
    marginTop: 16,
    color: "#94A3B8",
    fontSize: 14,
  },
});
