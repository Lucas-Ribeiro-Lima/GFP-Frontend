import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Skeleton } from "../ui/skeleton"

type HeaderProps = {
  children?: React.ReactNode
}

export function HeaderWrapper({ children }: Readonly<HeaderProps>) {
  return (
    <header className="flex gap-2 items-center pl-12">
      {children}
    </header>
  )
}

type HeaderAvatarProps = { 
  avatarSrc: string 
  avatarFallback: string
}

export function HeaderAvatar({ avatarSrc, avatarFallback }:  Readonly<HeaderAvatarProps>) {
  return (
    <Avatar className="border-black/80 border-[1px] cursor-pointer">
      <AvatarImage src={avatarSrc}></AvatarImage>
      <AvatarFallback>{avatarFallback}</AvatarFallback>
    </Avatar>
  )
}

export function HeaderTitle({ children }:  Readonly<HeaderProps>) {
  return(
    <h1>Bem vindo,<span className="font-semibold pl-2">{children}</span></h1>
  )
}

export function HeaderSkeleton() {
  return (
    <div className="flex gap-2 items-center pl-12">
      <Skeleton className="w-12 h-12 rounded-full"></Skeleton>
      <Skeleton className="w-48 h-6"></Skeleton>
    </div>
  )
}