import React, { createContext, useContext, useState, useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Host } from 'react-native-portalize'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from '../contexts/auth'

import { ThemeProvider } from 'styled-components/native'
import { LightTheme } from '../styles/themes'

import { NotificationProvider } from './notification'

import getPermissionLocation from '../utils/getPermissionLocation'

interface GlobalContextData {

}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme)

  useEffect(() => {
    (async function() {
      getPermissionLocation()
    })()
    
  }, []);

  return (
    <GlobalContext.Provider value={{ }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Host>
            <ThemeProvider theme={theme} >
              <NotificationProvider>
                <AuthProvider>
                  {children}
                </AuthProvider>
              </NotificationProvider>
            </ThemeProvider>
          </Host>
        </NavigationContainer>
      </SafeAreaProvider>      
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}


