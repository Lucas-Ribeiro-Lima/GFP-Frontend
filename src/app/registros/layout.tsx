'use client'

import { Dashboard } from "@/components/dashboard"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { SkeletonPages } from "@/components/skeleton"
import { AuthContext, AuthProvider } from "@/contexts/authContext"
import { userService } from "@/services"
import Link from "next/link"
import { Suspense, useContext } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {	
  return (
    <Suspense fallback={<SkeletonPages.layout/>}>
      <AuthProvider userService={userService}>
        <div className="flex flex-col h-full p-4 bg-gradient-to-br from-white via-sky-100 to-white">
            <LayoutContent>
              {children}
            </LayoutContent>
        </div>
      </AuthProvider>
    </Suspense>
  )
}

function LayoutContent({ children } : { children: React.ReactNode }) {
  const { user, logoff } = useContext(AuthContext)

  const userInitials = user?.nome?.replace(/(\b\w)\w*.*\b(\w)\w*/g, '$1$2').toUpperCase()

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