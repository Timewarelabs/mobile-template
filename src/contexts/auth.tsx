import React, { createContext, useState, useEffect, useContext, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../services/api'

interface UserData {
  id: number,
  name: string,
  email: string
}

interface UserAuthentication {
  user: UserData,
  token: string
}

interface AuthContextData {
  signed: boolean;
  user: UserData | null;
  loading: boolean;
  signIn(url: string, params: unknown): Promise<void>;
  signOut(): void;
  firstTimeInTheAPP: boolean;
  finishedTheIntro() : void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [firstTimeInTheAPP, setFirstTimeInTheAPP] = useState(false)

  useEffect(() => {
    async function loadStorageData () {
      const [user, token, FirstTime] = (await AsyncStorage.multiGet([
        '@RNAuth:user',
        '@RNAuth:token',
        '@RNAFirstTimeInTheAPP'
      ]) as [string, string][])

      if (user && token && FirstTime) {
        console.log(JSON.parse(user[1]))

        api.defaults.headers.Authorization = `Bearer ${token[1]}`

        setFirstTimeInTheAPP(JSON.parse(FirstTime[1]))
        setUser(JSON.parse(user[1]))
        setLoading(false)
      }
    }
    loadStorageData()
  }, [])

  const signIn = useCallback(async (url: string, params: unknown) => {
    const { data } = await api.get<UserAuthentication>(url, { params })

    setUser(data.user)

    api.defaults.headers.Authorization = `Bearer ${data.token}`

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data.user))
    await AsyncStorage.setItem('@RNAuth:token', data.token)
  }, [])

  const signOut = useCallback(async () => {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }, [])

  async function finishedTheIntro () {
    setLoading(false);
    setFirstTimeInTheAPP(false)

    await AsyncStorage.setItem('@RNAFirstTimeInTheAPP', JSON.stringify(true))
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut, firstTimeInTheAPP, finishedTheIntro }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook próprio
export function useAuth () {
  const context = useContext(AuthContext)

  return context
}
