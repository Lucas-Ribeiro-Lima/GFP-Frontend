import { AuthContext } from "@/contexts/authContext";
import { AuthContextProps, ContaProps } from "@/domain/types";
import { useMemo } from "react";
import { vi } from "vitest";

type AuthContextMockProps = {
  user?: Partial<ContaProps>
  userInitials?: string
  children: React.ReactNode
}

export function AuthContextMock({ user, userInitials, children }: Readonly<AuthContextMockProps>) {
  const context: AuthContextProps = useMemo(() => {
    return {
      user: {
        id: 1,
        nome: user?.nome ?? "Usuário",
        email: user?.email ?? "johndoe@doe.uk",
        cpf: user?.cpf ?? "12345678900",
        photo: user?.photo ?? "",
        configs: {
          displayName: user?.configs?.displayName ?? "Usuário",
          tema: user?.configs?.tema ?? "Light",
          customWpp: user?.configs?.customWpp ?? ""
        }
      },
      userInitials: userInitials ?? "CN",
      logoff: vi.fn()
    }
  }, [])


  return (
  <AuthContext.Provider value={context}>
    {children}
  </AuthContext.Provider>
  )
}