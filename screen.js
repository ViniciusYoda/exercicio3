import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Text style={{ fontSize: 18 }}>Welcome to the Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={{ fontSize: 14, color: 'blue' }}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

export function DetailsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Details Screen</Text>
    </View>
  );
}

export function ContactScreen() {
    return (
    <View style={{ flex: 1, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Contact Screen</Text>
    </View>
  );
}
