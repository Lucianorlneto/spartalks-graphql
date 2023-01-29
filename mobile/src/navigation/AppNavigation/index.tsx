import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from '../BottomTabNavigation';
import {AppStackParamList} from '../../@types/navigation';
import CharacterDetails from '../../screens/CharactersList/CharacterDetails';
import GameDetails from '../../screens/GamesList/GameDetails';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#17569b'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={BottomTabNavigation}
      />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
      <Stack.Screen name="GameDetails" component={GameDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
