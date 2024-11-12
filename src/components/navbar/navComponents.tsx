type NavProps = {
  children: React.ReactNode
}

export function NavWrapper({ children }: NavProps) {
  return (
    <nav className="flex w-full justify-end">
      { children }
    </nav>
  )
}

export function NavList({ children }: NavProps) {
  return (
    <ol className="flex gap-4 text-sm text-slate-600">
      { children }
    </ol>
  )
}

export function NavItem({ children }: NavProps) {
  return (
    <li className="hover:text-sky-500 cursor-pointer">
      {children}
    </li>
  )
}