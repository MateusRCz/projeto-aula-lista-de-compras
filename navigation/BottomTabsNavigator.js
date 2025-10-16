import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../src/screens/Home/index";
import Details from "../src/screens/Details/index";
import Profile from "../src/screens/Profile/index";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>
  );
}
