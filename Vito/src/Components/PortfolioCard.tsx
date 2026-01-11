import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onPress?: () => void;
}

export default function PortfolioCard({
  title,
  description,
  imageUrl,
  onPress,
}: PortfolioCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E293B", // dark card background
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#CBD5E1",
  },
});
