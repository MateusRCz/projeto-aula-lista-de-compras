import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './BottomTabsNavigator'; // importa o TabNavigator

import SplashScreen from '../screens/Splash';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SplashScreen"
            options={{ animationEnabled: false }}
          >
            {() => (
              <SplashScreen onDismiss={() => setShowSplash(false)} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
