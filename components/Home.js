import * as React from 'react';
import HomeScreen from './HomeScreen/HomeScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function Home() {
    return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#00aced',
            tabBarInactiveTintColor: 'gray',
          })}
        >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
    );
  }

  export default Home;