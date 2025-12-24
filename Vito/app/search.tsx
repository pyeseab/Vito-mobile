import { View, Text } from "react-native";
import Input from "../src/components/Input";

export default function Search() {
  return (
    <View style={{ padding: 24 }}>
      <Input placeholder="Search stock ticker..." />
      <Text style={{ marginTop: 20 }}>Results will appear here</Text>
    </View>
  );
}
