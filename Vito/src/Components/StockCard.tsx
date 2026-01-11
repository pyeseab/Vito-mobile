import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import StockCard from "./StockCard"; // Your StockCard component here
import { MaterialIcons } from "@expo/vector-icons";

export default function PortfolioScreen() {
  const stocks = [
    {
      symbol: "AAPL",
      companyName: "Apple Inc.",
      price: "$178.50",
      percentChange: "+2.45%",
    },
    // Add more stocks or leave empty for empty state
  ];

  const handleAddStock = () => {
    console.log("Add stock pressed");
  };

  const handleRemoveStock = (symbol: string) => {
    console.log("Remove stock", symbol);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.greeting}>Hello, John</Text>

      <View style={styles.ratingCard}>
        <Text style={styles.label}>Portfolio Rating</Text>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>AVERAGE</Text>
        </View>
        <Text style={[styles.label, { marginTop: 16 }]}>Sharpe Ratio</Text>
        {/* Add Sharpe Ratio value here if available */}
      </View>

      <TouchableOpacity style={styles.analyzeButton} onPress={() => console.log("Analyze Portfolio")}>
        <MaterialIcons name="analytics" size={20} color="#fff" />
        <Text style={styles.analyzeButtonText}>Analyze Portfolio</Text>
      </TouchableOpacity>

      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Your Stocks</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddStock}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {stocks.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No stocks in your portfolio yet</Text>
          <TouchableOpacity onPress={handleAddStock}>
            <Text style={styles.emptyAddText}>Add Your First Stock</Text>
          </TouchableOpacity>
        </View>
      ) : (
        stocks.map((stock) => (
          <StockCard
            key={stock.symbol}
            symbol={stock.symbol}
            companyName={stock.companyName}
            price={stock.price}
            percentChange={stock.percentChange}
            onPressRemove={() => handleRemoveStock(stock.symbol)}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 20,
  },
  greeting: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 20,
  },
  ratingCard: {
    backgroundColor: "#1E293B",
    borderRadius: 14,
    paddingVertical: 24,
    paddingHorizontal: 40,
    marginVertical: 24,
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#94A3B8",
    fontWeight: "500",
  },
  ratingBox: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 48,
  },
  ratingText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 20,
  },
  analyzeButton: {
    flexDirection: "row",
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  analyzeButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 8,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "#1E293B",
    padding: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 20,
  },
  emptyState: {
    marginTop: 40,
    alignItems: "center",
  },
  emptyText: {
    color: "#64748B",
  },
  emptyAddText: {
    color: "#2563EB",
    fontWeight: "700",
    marginTop: 8,
  },
});
