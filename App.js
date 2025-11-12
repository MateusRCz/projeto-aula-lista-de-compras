import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./src/navigation/BottomTabsNavigator";

function App() {
  
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default App;
