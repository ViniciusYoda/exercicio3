import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen, DetailsScreen, ContactScreen } from './screen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
