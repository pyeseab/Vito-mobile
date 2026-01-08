import { View, Text, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import Input from "../src/components/Input";
import Button from "../src/components/Button";
import { signup } from "../src/services/auth";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    try {
      await signup(username, password, email);
      Alert.alert("Success", "Account created");
      router.replace("/login");
    } catch (err) {
      Alert.alert("Error", "Signup failed");
    }
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>
        Create Account
      </Text>

      <Input placeholder="Username" onChangeText={setUsername} />
      <Input placeholder="Email" onChangeText={setEmail} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}
