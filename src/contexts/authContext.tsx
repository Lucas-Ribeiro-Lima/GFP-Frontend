'use client'

import { SkeletonPages } from '@/components/skeleton/index'
import { AuthContextProps, ContaProps } from '@/domain/types'
import { UserContract } from '@/services/userService'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({} as AuthContextProps)

export type AuthProviderProps = {
  children: React.ReactNode
  userService: UserContract
} 

export function AuthProvider({ children, userService }: AuthProviderProps) {
  const [ user, setUser ] = useState<ContaProps | null>({} as ContaProps)

  const logoff = async () => {
    await userService.logout()
    window.location.href = '/login'
  }

  useEffect(() => {
    const loadUser = async () => {
      const user = await userService.load()
      setUser(user)
    }
    loadUser()
    if (user === null) window.location.href = "/login"
  }, [])

  if(!user) return(
    <SkeletonPages.layout/>
  )

  return (
      <AuthContext.Provider value={{user, logoff}}>
        {children}
      </AuthContext.Provider>
  )
}