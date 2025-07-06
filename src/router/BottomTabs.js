import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HiddenStack from './HiddenStack';
import HomeScreens from '../screens/app/HomeScreens';
import NotificationScreen from '../screens/app/NotificationScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="Profile" component={HomeScreens} />
      <Tab.Screen name="Settings" component={HomeScreens} />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{tabBarButton: () => false, headerShown: false}}
      />

      {/* Hidden but shows bottom tab bar */}
      {/* <Tab.Screen
        component={HiddenStack}
        options={{tabBarButton: () => false, headerShown: false}}
      /> */}
    </Tab.Navigator>
  );
}
