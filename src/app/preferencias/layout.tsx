import { NavbarFull } from "@/components/navbar/navbarFull";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="p-4">
      <NavbarFull />
      {children}
    </div>
  )
}