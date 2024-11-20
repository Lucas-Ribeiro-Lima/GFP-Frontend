import { despesaFormSchema, registroSchema, rendaFormSchema } from "@/adapters/zod/registros"
import { z } from "zod"

export type AuthContextProps =  {
  user: ContaProps
  userInitials: string
  logoff: () => void
}

export type ContaProps = {
  id: number,
  email: string,
  nome: string,
  cpf?: string,
  photo?: string,
  configs: ConfigsProps
}

export type ConfigsProps = {
  tema: "Dark" | "Light",
  displayName: string,
  customWpp: string
}

export type CarteiraProps = {
  id: number, 
  idContaDono: number,
  nome: string,
  saldo: number,
  meta: number,
  compartilhada: boolean
  idGrupoEconomico: number | null
}

export type GrupoEconomicoProps = {
  id: number,
  nome: string,
  descricao: string,
  metaGeral: number,
}

export type RegistroProps = z.infer<typeof registroSchema>


export type DespesaProps = z.infer<typeof despesaFormSchema>


export type RendaProps = z.infer<typeof rendaFormSchema>


export type ApiResponse = {
  message: string
}



