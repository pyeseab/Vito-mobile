import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Optional logo or illustration */}
      <Image
        source={require("../../assets/logo.png")} // replace with your logo
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to Vito</Text>
      <Text style={styles.subtitle}>
        Manage your portfolio and track your stocks with ease.
      </Text>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 40,
  },
  signupButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  loginButton: {
    borderWidth: 2,
    borderColor: "#2563EB",
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "700",
  },
});
