/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CharactersList from '../../screens/CharactersList';
import GamesList from '../../screens/GamesList';
import {Image} from 'react-native';
import {
  Background,
  CharacterFIcon,
  CharacterIcon,
  GameFIcon,
  GameIcon,
} from '../../assets/img';

// import { Container } from './styles';
const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#17569b'},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: '#17569b'},
        tabBarActiveTintColor: '#FFEC01',
        tabBarInactiveTintColor: 'white',

        tabBarLabelStyle: {fontSize: 16},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={CharacterFIcon} style={{height: 20, width: 20}} />
            ) : (
              <Image source={CharacterIcon} style={{height: 15, width: 15}} />
            ),
        }}
        name="Characters"
        component={CharactersList}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={GameFIcon} style={{height: 20, width: 20}} />
            ) : (
              <Image source={GameIcon} style={{height: 15, width: 15}} />
            ),
        }}
        name="Games"
        component={GamesList}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
