import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import Input from "../src/components/Input";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <View style={{ padding: 24 }}>
      <Input
        placeholder="Search stock ticker..."
        onChangeText={setQuery}
      />

      {query ? (
        <Text style={{ marginTop: 20 }}>
          Searching for "{query}"
        </Text>
      ) : (
        <Text style={{ marginTop: 20 }}>
          Results will appear here
        </Text>
      )}
    </View>
  );
}
