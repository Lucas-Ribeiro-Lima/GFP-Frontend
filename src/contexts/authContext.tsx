'use client'

import { SkeletonPages } from '@/components/skeleton'
import { AuthContextProps, ContaProps } from '@/domain/types'
import { UserContract } from '@/services/userService'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const AuthContext = createContext({} as AuthContextProps)

export type AuthProviderProps = {
  children: React.ReactNode
  userService: UserContract
} 

export function AuthProvider({ children, userService }: AuthProviderProps) {
  const [ user, setUser ] = useState<ContaProps | null>(null)
  
  const userInitials = useMemo(
    () => user?.nome?.replace(/(\b\w)\w*.*\b(\w)\w*/g, '$1$2').toUpperCase() || "CN"
 ,[user])


  const logoff = useCallback(async () => {
    await userService.logout()
    setUser(null)
    window.location.href = '/login'
  }, [userService])
  
  const loadUser = useCallback(async () => {
    setUser(await userService.load())
  }, [userService])
  
  useEffect(() => {
    loadUser()
  }, [loadUser])

  if(!user) return (
    <SkeletonPages.layout/>
  )

  return (
      <AuthContext.Provider value={{user, userInitials, logoff}}>
        {children}
      </AuthContext.Provider>
  )
}