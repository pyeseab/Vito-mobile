import { View, Text, StyleSheet } from "react-native";
import BubbleLoader from "../components/BubbleLoader";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Vito</Text>
      <BubbleLoader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 42,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
});
