import { AuthProvider } from "@/contexts/authContext"
import { userService } from "@/services/index"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider userService={userService}>
      {children}
    </AuthProvider>
  )
}