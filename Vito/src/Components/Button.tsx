import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3B82F6",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontWeight: "600",
  },
});
