import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Icons from 'react-native-vector-icons/Ionicons'

import { ThemeContext } from 'styled-components/native'

import SingUp from '../screens/Auth/SingUp'
import SingIn from '../screens/Auth/SingIn'
const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => {
  const theme = useContext(ThemeContext).colors

  return (
    <Navigator
      initialRouteName="SingIn"
      screenOptions={{
        headerShown: false
      }}
    >

      <Screen name="SingIn" component={SingIn} />
      
      <Screen name="SingUp" component={SingUp}/>

    </Navigator>
  )
}

export default AuthRoutes
