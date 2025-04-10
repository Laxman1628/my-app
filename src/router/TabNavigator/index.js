import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons, {iconType} from '../../assets/icon/Icons';
import HomeScreen from '../../screens/HomeScreen';
import EventsScreen from '../../screens/EventsScreen';
import ChallengesScreen from '../../screens/ChallengesScreen';
import TrainingScreen from '../../screens/TrainingScreen';
import {App_paths} from '../../utils/Constants';
import CustomHeader from '../../Components/CustomHeader';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Index() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        header: ({navigation}) => (
          <CustomHeader
            title={route.name}
            showBack={navigation.canGoBack()}
            onBackPress={() => navigation.goBack()}
          />
        ),
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
        
          if (route.name === App_paths.Home) {
            iconName = 'home';
          } else if (route.name === App_paths.Events) {
            iconName = 'user';
          } else if (route.name === App_paths.Challenge) {
            iconName = 'home'; // or any icon
          } else if (route.name === App_paths.Training) {
            iconName = 'ellipsis-h';
          }
        
          
        
          
            return (
              <View style={focused ? styles.centerIconWrapper : {}}>
                <Icons
                  type={iconType.fa5}
                  name={iconName}
                  size={24}
                  color={'#000' } // black icon on yellow bg
                />
              </View>
            );
          
        
          return (
            <Icons
              type={iconType.fa5}
              name={iconName}
              size={24}
              color={focused ? '#000' : '#aaa'}
            />
          );
        }
      })}>
      <Tab.Screen name={App_paths.Home} component={HomeScreen} />
      <Tab.Screen name={App_paths.Events} component={EventsScreen} />
      <Tab.Screen name={App_paths.Challenge} component={ChallengesScreen} />
      <Tab.Screen name={App_paths.Training} component={TrainingScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 16,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    elevation: 10,
  },
  centerIconWrapper: {
    backgroundColor: '#ffe501',
    padding: 14,
    borderRadius: 32,
    // marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 8,
  },
  activeMenu:{
    color:"#fff"
  }
});
