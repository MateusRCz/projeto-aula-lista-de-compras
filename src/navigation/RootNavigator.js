import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import ProfileScreen from '../screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="MainTabs">
          {() => <MainTabNavigator />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            animationEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          } else if (route.name === 'Lists') {
            iconName = 'list-box';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#F5A623',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#333',
          borderTopColor: '#444',
          height: 60,
          paddingBottom: 8,
        },
      })}
    >
      <Tab.Screen
        name="Lists"
        component={HomeScreen}
        options={{ title: 'Listas' }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}