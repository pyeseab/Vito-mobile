import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useAuth } from "../hooks/useAuth";

export default function ProfileScreen({ navigation }: any) {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            setUser(null); // clear user state
            navigation.replace("Welcome"); // navigate to welcome screen
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.name || "User"}</Text>

        <Text style={[styles.label, { marginTop: 16 }]}>Email</Text>
        <Text style={styles.value}>{user?.email || "user@example.com"}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 24,
  },
  title: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "700",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 24,
  },
  label: {
    fontSize: 14,
    color: "#94A3B8",
    fontWeight: "500",
  },
  value: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "700",
    marginTop: 4,
  },
  logoutButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
  },
  logoutText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
});
