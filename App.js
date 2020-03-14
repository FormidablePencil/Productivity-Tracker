import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimerPage from './screen/TimerPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import InfoScreen from './screen/InfoScreen';

export const AppContext = createContext()
const Tab = createBottomTabNavigator()

export default function App() {
  const [calculatedTime, setcalculatedTime] = useState({ green: [], yellow: [], red: [] }) //~ how to save to local storage?


  return (

    <AppContext.Provider value={{ calculatedTime, setcalculatedTime }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="info" component={InfoScreen} />
          <Tab.Screen name="timers" component={TimerPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
