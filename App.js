import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/Splash";
import BottomTabsNavigator from "./src/navigation/BottomTabsNavigator";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return (
      <SplashScreen onDismiss={() => setShowSplash(false)} />
    );
  }

  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default App;
