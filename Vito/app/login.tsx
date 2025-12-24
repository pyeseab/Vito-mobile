import { View, Text } from "react-native";
import Input from "../src/components/Input";
import Button from "../src/components/Button";

export default function Login() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Welcome Back</Text>

      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />

      <Button title="Login" onPress={() => {}} />
    </View>
  );
}
import { View, Text, Alert } from "react-native";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import { useState } from "react";
import { login } from "../src/services/auth";
import { router } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await login(username, password);

      if (res.valid) {
        router.replace("/home");
      } else {
        Alert.alert("Login failed", "Invalid credentials");
      }
    } catch {
      Alert.alert("Error", "Could not connect to server");
    }
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Welcome Back</Text>

      <Input placeholder="Username" onChangeText={setUsername} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
