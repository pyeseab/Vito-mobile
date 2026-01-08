import { View, Text, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import Input from "../src/components/Input";
import Button from "../src/components/Button";
import { requestPasswordReset } from "../src/services/auth";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset() {
    if (!email) {
      Alert.alert("Missing email", "Please enter your email address");
      return;
    }

    try {
      setLoading(true);
      await requestPasswordReset(email);

      Alert.alert(
        "Check your email",
        "We sent you instructions to reset your password"
      );

      router.back();
    } catch {
      Alert.alert("Error", "Could not send reset instructions");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 8 }}>
        Reset Password
      </Text>

      <Text style={{ color: "#666", marginBottom: 16 }}>
        Enter your email and we’ll send you instructions to reset your password.
      </Text>

      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />

      <Button
        title={loading ? "Sending..." : "Send Reset Link"}
        onPress={handleReset}
        disabled={loading}
      />
    </View>
  );
}
