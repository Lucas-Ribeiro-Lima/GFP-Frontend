'use client'

import { HeaderFull } from "@/components/header/headerFull"
import { NavbarFull } from "@/components/navbar/navbarFull"
import { SkeletonPages } from "@/components/skeleton"
import { AuthProvider } from "@/contexts/authContext"
import { CarteiraProvider } from "@/contexts/carteiraContext"
import { carteiraService, userService } from "@/services"
import { Suspense } from "react"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {	
  return (
    <Suspense fallback={<SkeletonPages.Layout/>}>
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
