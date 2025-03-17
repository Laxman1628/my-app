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

export default function Index() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
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
