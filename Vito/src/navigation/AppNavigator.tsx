import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens here
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import StockDetailsScreen from "../screens/StockDetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  // Example: You can use a global auth context or state here to check user logged in status
  // For now, assume user is authenticated (replace with real auth check)
  const isAuthenticated = true; // replace with actual logic

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        {!isAuthenticated ? (
          // Auth flow
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          // App flow
          <>
            <Stack.Screen name="Portfolio" component={PortfolioScreen} />
            <Stack.Screen name="StockDetails" component={StockDetailsScreen} />
            {/* Add more screens as needed */}
          </>
        )}

        {/* You can add a loading screen to appear on startup */}
        <Stack.Screen name="Loading" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}