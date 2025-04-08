//    --- React & core Hooks ---
import React from 'react';

//    --- React Native UI Components ---
import {StyleSheet, Text, View} from 'react-native';

//   --- Navigation ---
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//    --- Reusable Components ---
import CustomHeader from '../../Components/CustomHeader';

//    --- UI Screen ---
import HomeScreen from '../../screens/HomeScreen';
import ChallengesScreen from '../../screens/ChallengesScreen';
import EventsScreen from '../../screens/EventsScreen';
import TrainingScreen from '../../screens/TrainingScreen';

//   --- Constants & Utils ---
import {App_paths} from '../../utils/Constants';
import Icons, {iconType} from '../../assets/icon/Icons';

export default function Index() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === App_paths?.Home) {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === App_paths?.Events) {
            iconName = focused ? 'clock' : 'clock';
          } else if (route.name === App_paths?.Challenge) {
            iconName = focused ? 'dot-circle' : 'dot-circle';
          } else if (route.name === App_paths?.Training) {
            iconName = focused ? 'snowboarding' : 'snowboarding';
          }

          return (
            <Icons
              type={iconType.fa5}
              name={iconName}
              size={24}
              color={color}
            />
          );
        },
        header: () => <CustomHeader title={route.name} />,
      })}>
      <Tab.Screen name={App_paths?.Home} component={HomeScreen} />
      <Tab.Screen name={App_paths?.Events} component={EventsScreen} />
      <Tab.Screen name={App_paths?.Challenge} component={ChallengesScreen} />
      <Tab.Screen name={App_paths?.Training} component={TrainingScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
