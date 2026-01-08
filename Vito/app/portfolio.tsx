import { View, Text, FlatList } from "react-native";

type PortfolioItem = {
  id: string;
  symbol: string;
  amount: number;
};

const mockData: PortfolioItem[] = [
  { id: "1", symbol: "AAPL", amount: 10 },
  { id: "2", symbol: "TSLA", amount: 5 },
  { id: "3", symbol: "BTC", amount: 0.25 },
];

export default function Portfolio() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 16 }}>
        Portfolio
      </Text>

      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {item.symbol}
            </Text>
            <Text style={{ color: "#666" }}>
              Amount: {item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
