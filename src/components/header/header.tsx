import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

type HeaderProps = {
  children?: React.ReactNode
  avatarSrc?: string 
  avatarFallback?: string
}

export function HeaderWrapper({ children }: HeaderProps) {
  return (
    <header className="flex gap-2 items-center pl-12">
      {children}
    </header>
  )
}

export function HeaderAvatar({ avatarSrc, avatarFallback }: HeaderProps) {
  return (
    <Avatar className="border-black/80 border-[1px] cursor-pointer">
      <AvatarImage src={avatarSrc}></AvatarImage>
      <AvatarFallback>{avatarFallback}</AvatarFallback>
    </Avatar>
  )
}

export function HeaderTitle({ children }: HeaderProps) {
  return(
    <h1>Bem vindo,<span className="font-semibold pl-2">{children}</span></h1>
  )
}