'use client'

import Link from "next/link";
import { useContext } from "react";
import { Navbar } from ".";
import { AuthContext } from "@/contexts/authContext";

export function NavbarFull() {
  const { logoff } = useContext(AuthContext)

  return(
    <Navbar.Wrapper>
      <Navbar.List>
        <Navbar.Item><Link href="/dashboard">Dashboard</Link></Navbar.Item>
        <Navbar.Item><Link href="/registros/renda">Rendas</Link></Navbar.Item>
        <Navbar.Item><Link href="/registros/despesa">Despesas</Link></Navbar.Item>
        <Navbar.Item><Link href="/preferencias">Preferências</Link></Navbar.Item>
        <Navbar.Item><button onClick={logoff}>Sair</button></Navbar.Item>
      </Navbar.List>
    </Navbar.Wrapper>
  )
}