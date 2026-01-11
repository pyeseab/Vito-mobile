import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import StockCard from "../components/StockCard"; // replace with your StockCard
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  // Example stock data, replace with API or context state
  const allStocks = [
    { symbol: "AAPL", companyName: "Apple Inc.", price: "$178.50", percentChange: "+2.45%" },
    { symbol: "TSLA", companyName: "Tesla Inc.", price: "$720.10", percentChange: "+1.12%" },
    { symbol: "GOOGL", companyName: "Alphabet Inc.", price: "$135.20", percentChange: "-0.85%" },
  ];

  const filteredStocks = allStocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.companyName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <MaterialIcons name="search" size={24} color="#94A3B8" />
        <TextInput
          style={styles.input}
          placeholder="Search stocks..."
          placeholderTextColor="#94A3B8"
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {filteredStocks.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No results found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredStocks}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => (
            <StockCard
              symbol={item.symbol}
              companyName={item.companyName}
              price={item.price}
              percentChange={item.percentChange}
            />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#FFF",
    fontSize: 16,
  },
  emptyState: {
    marginTop: 50,
    alignItems: "center",
  },
  emptyText: {
    color: "#94A3B8",
    fontSize: 16,
  },
});
