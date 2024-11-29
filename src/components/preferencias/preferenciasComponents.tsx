'use client'

import { contaSchema } from "@/adapters/zod/conta"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AuthContext } from "@/contexts/authContext"
import { ContaProps } from "@/domain/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { PreferenciasInputFormField, PreferenciasSwitchFormField } from "./formComponents"

type PreferenciasWrapperProps = {
  children: React.ReactNode
}

export function PreferenciasWrapper({ children }: Readonly<PreferenciasWrapperProps>) {
  return (
    <div className="flex flex-1 justify-center gap-8">
      {children}
    </div>
  )
}

export function PreferenciasForm() {
  const { user } = useContext(AuthContext)
  const form = useForm<ContaProps>({
    resolver: zodResolver(contaSchema),
    defaultValues: {
      id: user.id ?? undefined,
      nome: user.nome ?? "",
      cpf: user.cpf ?? "",
      email: user.email ?? "",
      configs: {
        displayName: user.configs.displayName ?? "",
        tema: user.configs.tema ?? "Light",
        customWpp: user.configs.customWpp ?? "",
      }
    }
  })

  
  return(
    <Form {...form} >
      <form className="flex flex-col justify-center space-y-4"> 
        <PreferenciasInputFormField form={form} fieldName="nome" label="Nome de exibição" />
        <PreferenciasInputFormField form={form} fieldName="cpf" label="CPF" />
        <PreferenciasInputFormField form={form} fieldName="email" label="E-mail" readOnly={true}/>
        <PreferenciasInputFormField 
          form={form} fieldName="configs.customWpp" label="Wallpaper" type="file" readOnly={true}/>
        <PreferenciasSwitchFormField 
          form={form} 
          fieldName="configs.tema" 
          label="Tema"
          options={["Light", "Dark", "System"]}
          />
      </form>
    </Form>
  )
}

export function PreferenciasAvatar() {
  const { user: { photo }, userInitials } = useContext(AuthContext)

  return (
    <div className="flex flex-col justify-center items-center ">
      <Avatar className="h-56 w-56">
        <AvatarImage src={photo || ""}></AvatarImage>
        <AvatarFallback>{userInitials}</AvatarFallback>
      </Avatar>
      <Label htmlFor="photo">
        <span className="text-slate-500/50">Foto de perfil</span> 
      </Label>
    </div>
  )
}
