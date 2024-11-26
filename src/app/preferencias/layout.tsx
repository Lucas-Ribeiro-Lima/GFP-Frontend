import { HeaderFull } from "@/components/header/headerFull";
import { NavbarFull } from "@/components/navbar/navbarFull";
import { AuthProvider } from "@/contexts/authContext";
import { userService } from "@/services";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider userService={userService}>
      <div className="flex flex-col flex-1 p-4">
        <NavbarFull />
        <HeaderFull />
        {children}
      </div>
    </AuthProvider>
  )
}