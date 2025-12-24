import { View, Text } from "react-native";
import Input from "../src/components/Input";
import Button from "../src/components/Button";

export default function Signup() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Create Account</Text>

      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />

      <Button title="Sign Up" onPress={() => {}} />
    </View>
  );
}
import { View, Text, Alert } from "react-native";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import { useState } from "react";
import { signup } from "../src/services/auth";
import { router } from "expo-router";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSignup() {
    try {
      await signup(username, password, email);
      Alert.alert("Success", "Account created");
      router.replace("/login");
    } catch {
      Alert.alert("Error", "Signup failed");
    }
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Create Account</Text>

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
