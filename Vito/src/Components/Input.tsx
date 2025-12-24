import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor="#94A3B8"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1E293B",
    color: "#FFF",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
});
