'use client'

import { AuthContext } from "@/contexts/authContext"
import { useContext } from "react"

export default function Page() {
  const { user, logoff } = useContext(AuthContext)

  return (
    <div>
      <h1>Bem vindo, {user?.nome}</h1>
      <button onClick={logoff}>Sair</button>
    </div>)
}