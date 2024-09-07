import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens'; // Thêm dòng này

// Import các màn hình (screens)
import HomeScreen from './screens/HomeScreen';
import Part1Screen from './screens/Part1Screen';
import Part2Screen from './screens/Part2Screen';
import Part3Screen from './screens/Part3Screen';
import Part4Screen from './screens/Part4Screen';
import Part5Screen from './screens/Part5Screen';
import Part6Screen from './screens/Part6Screen';
import Part7Screen from './screens/Part7Screen';

enableScreens(); // Kích hoạt react-native-screens

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Danh Sách Các Phần' }} />
        <Stack.Screen name="Phần 1" component={Part1Screen} />
        <Stack.Screen name="Phần 2" component={Part2Screen} />
        <Stack.Screen name="Phần 3" component={Part3Screen} />
        <Stack.Screen name="Phần 4" component={Part4Screen} />
        <Stack.Screen name="Phần 5" component={Part5Screen} />
        <Stack.Screen name="Phần 6" component={Part6Screen} />
        <Stack.Screen name="Phần 7" component={Part7Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
