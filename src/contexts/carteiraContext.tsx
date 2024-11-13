'use client'

import { SkeletonPages } from '@/components/skeleton';
import { CarteiraProps } from '@/domain/types';
import { useToast } from '@/hooks/use-toast';
import { CarteiraContract } from '@/services/carteiraService';
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from './authContext';

export const CarteiraContext = createContext({} as CarteiraProps);

type CarteiraProviderProps = {
  children: React.ReactNode
  carteiraService: CarteiraContract
}

export function CarteiraProvider({ children, carteiraService }: CarteiraProviderProps) {
  const { toast } = useToast()
  const { user } = useContext(AuthContext)
  const [ carteira, setCarteira ] = useState<CarteiraProps | null>(null)

  const loadCarteira = useCallback(async () => {
    const loadedCarteira = await carteiraService.load();
    if(loadedCarteira) {
      setCarteira(loadedCarteira);
    } else {
      const { message, type } = await carteiraService.create(user.id)
      toast({
        title: message,
        variant: (type === 'success') ? 'default' : 'destructive'
      })
    }
  }, [carteiraService, user.id])

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