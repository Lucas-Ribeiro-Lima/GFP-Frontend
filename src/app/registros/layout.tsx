'use client'

import { Header } from "@/components/header"
import { HeaderFull } from "@/components/header/headerFull"
import { NavbarFull } from "@/components/navbar/navbarFull"
import { SkeletonPages } from "@/components/skeleton"
import { AuthContext, AuthProvider } from "@/contexts/authContext"
import { CarteiraProvider } from "@/contexts/carteiraContext"
import { carteiraService, userService } from "@/services"
import { Suspense, useContext } from "react"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {	
  return (
    <Suspense fallback={<SkeletonPages.layout/>}>
      <AuthProvider userService={userService}>
        <div className="p-4">
          <NavbarFull/>
          <HeaderFull/>
          <CarteiraProvider carteiraService={carteiraService}>
            {children}
          </CarteiraProvider>
        </div>
      </AuthProvider>
    </Suspense>
  )
}
