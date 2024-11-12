'use client'

import { Wallet } from "@/components/carteira"
import { Dashboard } from "@/components/dashboard"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { AuthContext } from "@/contexts/authContext"
import { useContext } from "react"
import Link from "next/link"

export default function Page() {
  const { user, logoff } = useContext(AuthContext)

  const userInitials = user?.nome?.replace(/(\b\w)\w*.*\b(\w)\w*/g, '$1$2').toUpperCase()

  return (
    <div className="flex flex-col h-full p-4 bg-gradient-to-br from-white via-sky-100 to-white">
      <Navbar.Wrapper>
        <Navbar.List>
          <Navbar.Item><Link href="#">Rendas</Link></Navbar.Item>
          <Navbar.Item><Link href="#">Despesas</Link></Navbar.Item>
          <Navbar.Item><Link href="#">Preferências</Link></Navbar.Item>
          <Navbar.Item><button onClick={logoff}>Sair</button></Navbar.Item>
        </Navbar.List>
      </Navbar.Wrapper>
      <div className="flex flex-col flex-1">
        <Header.Wrapper>
          <Header.Avatar avatarSrc="https://github.com/Lucas-Ribeiro-Lima.png" avatarFallback={userInitials} />
          <Header.Title>{user?.nome || "Usuário"}</Header.Title>
        </Header.Wrapper>
        <main className="flex flex-col flex-1">
          <Dashboard.ResumeWrapper>
            <Dashboard.Title month="Novembro" />
            <Dashboard.TotalWrapper>
              <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Renda" })} dataTitle="Rendas" dataValue="1900" />
              <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Despesa" })} dataTitle="Despesas" dataValue="250" />
              <Dashboard.TotalItem icon={Dashboard.Icon({ variant: "Total" })} dataTitle="Total" dataValue="1650" />
            </Dashboard.TotalWrapper>
          </Dashboard.ResumeWrapper>
          <div className="flex-1 m-8 p-4 rounded-sm bg-slate-300/60">
            <Wallet.DataWrapper>
              <Wallet.DataWrapper>
                <Wallet.DataItem>
                  <Wallet.DataTitle dataTitle="Renda" variant="Renda"></Wallet.DataTitle>
                  <Wallet.DataContent></Wallet.DataContent>
                </Wallet.DataItem>
                <Wallet.DataItem>
                  <Wallet.DataTitle dataTitle="Despesa" variant="Despesa"></Wallet.DataTitle>
                  <Wallet.DataContent></Wallet.DataContent>
                </Wallet.DataItem>
              </Wallet.DataWrapper>
            </Wallet.DataWrapper>
          </div>
        </main>
      </div>
    </div>)
}