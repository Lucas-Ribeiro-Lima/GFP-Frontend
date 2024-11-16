'use client'

import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { SkeletonPages } from "@/components/skeleton"
import { AuthContext, AuthProvider } from "@/contexts/authContext"
import { CarteiraProvider } from "@/contexts/carteiraContext"
import { carteiraService, userService } from "@/services"
import { Suspense, useContext, useMemo } from "react"
import Link from "next/link"

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {	
  return (
    <Suspense fallback={<SkeletonPages.Layout/>}>
      <AuthProvider userService={userService}>
        <div className="flex flex-col h-full p-4 bg-gradient-to-br from-white via-sky-100 to-white">
            <LayoutContent>
              <CarteiraProvider carteiraService={carteiraService}>
                {children}
              </CarteiraProvider>
            </LayoutContent>
        </div>
      </AuthProvider>
    </Suspense>
  )
}

function LayoutContent({ children } : Readonly<{ children: React.ReactNode }>) {
  const { user, logoff } = useContext(AuthContext)

  const userInitials = useMemo(() => user?.nome?.replace(/(\b\w)\w*.*\b(\w)\w*/g, '$1$2').toUpperCase(), [user])

  return (
    <>
      <Navbar.Wrapper>
        <Navbar.List>
          <Navbar.Item><Link href="/dashboard">Dashboard</Link></Navbar.Item>
          <Navbar.Item><Link href="/registros/renda">Rendas</Link></Navbar.Item>
          <Navbar.Item><Link href="/registros/despesa">Despesas</Link></Navbar.Item>
          <Navbar.Item><Link href="#">Preferências</Link></Navbar.Item>
          <Navbar.Item><button onClick={logoff}>Sair</button></Navbar.Item>
        </Navbar.List>
      </Navbar.Wrapper>
      <div className="flex flex-col flex-1">
        <Header.Wrapper>
          <Header.Avatar avatarSrc="https://github.com/Lucas-Ribeiro-Lima.png" avatarFallback={userInitials} />
          <Header.Title>{user?.nome || "Usuário"}</Header.Title>
        </Header.Wrapper>
        {children}
      </div>
    </>
  )
}