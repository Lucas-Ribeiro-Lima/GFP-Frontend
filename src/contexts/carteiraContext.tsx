'use client'

import { SkeletonPages } from '@/components/skeleton';
import { CarteiraProps } from '@/domain/types';
import { useCustomToast } from '@/hooks/useCustomToast';
import { CarteiraContract } from '@/services/carteiraService';
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from './authContext';

export const CarteiraContext = createContext({} as CarteiraProps);

type CarteiraProviderProps = {
  children: React.ReactNode
  carteiraService: CarteiraContract
}

export function CarteiraProvider({ children, carteiraService }: CarteiraProviderProps) {
  const { toaster } = useCustomToast()
  const { user } = useContext(AuthContext)
  const [ carteira, setCarteira ] = useState<CarteiraProps | null>(null)

  const loadCarteira = useCallback(async () => {
    const loadedCarteira = await carteiraService.load();
    if(loadedCarteira) {
      setCarteira(loadedCarteira);
    } else {
      const { type, message } = await carteiraService.create(user.id)
      toaster({ type, message})
    }
  }, [carteiraService, toaster, user.id])

  useEffect(() => {
    loadCarteira()
  }, [loadCarteira])
  

  if(!carteira) return(
    <SkeletonPages.registros/>
  )

  return (
    <CarteiraContext.Provider value={carteira}>{children}</CarteiraContext.Provider>
  )
}