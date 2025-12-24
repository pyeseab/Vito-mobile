import { View, Animated, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";

export default function BubbleLoader() {
  const bubbles = [
    useRef(new Animated.Value(0.6)).current,
    useRef(new Animated.Value(0.6)).current,
    useRef(new Animated.Value(0.6)).current,
  ];

  useEffect(() => {
    const animations = bubbles.map((bubble, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(bubble, {
            toValue: 1,
            duration: 500,
            delay: index * 150,
            useNativeDriver: true,
          }),
          Animated.timing(bubble, {
            toValue: 0.6,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      )
    );

    animations.forEach(a => a.start());
  }, []);

  return (
    <View style={styles.container}>
      {bubbles.map((scale, i) => (
        <Animated.View
          key={i}
          style={[
            styles.bubble,
            { transform: [{ scale }] }
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  bubble: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#3B82F6",
  },
});
