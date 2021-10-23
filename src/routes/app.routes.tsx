import React, { useContext } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icons from 'react-native-vector-icons/Ionicons'

import { ThemeContext } from 'styled-components/native'
import { View } from 'react-native';

import Home from '../screens/Home'

const { Navigator, Screen } = createMaterialBottomTabNavigator()

const config = {
  screens: {
    Home: 'Home',
    NotFound: '*',
  },
};

const linking = {
  prefixes: ['https://example.com', 'example://'],
  config,
};

const AppRoutes: React.FC = () => {
  const theme = useContext(ThemeContext).colors

  return (
    <Navigator
      // linking={linking}
      initialRouteName="Home"
      activeColor={theme.themeColors.primary.normal}
      inactiveColor={theme.themeColors.text.normal}
      barStyle={{ backgroundColor: theme.themeColors.background.normal }}
    >
      <Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icons
              name="ios-home"
              size={20} 
              color={color}
              // focused ? '#8257e5' : color
            />
          )
        }}
      />
    </Navigator>
  )
}

export default AppRoutes
