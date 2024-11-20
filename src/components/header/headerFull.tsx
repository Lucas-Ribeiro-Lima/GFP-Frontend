'use client'

import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";
import { Header } from ".";

export function HeaderFull() {
  const { user } = useContext(AuthContext)

  const userInitials = user?.nome?.replace(/(\b\w)\w*.*\b(\w)\w*/g, '$1$2').toUpperCase()
  return (
    <div className="flex flex-col">
      <Header.Wrapper>
        <Header.Avatar avatarSrc={user.photo || ""} avatarFallback={userInitials} />
        <Header.Title>{user?.nome || "Usuário"}</Header.Title>
      </Header.Wrapper>
    </div>
  )
}