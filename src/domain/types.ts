export type AuthContextProps =  {
  user: ContaProps | null
  logoff: () => void
}

export type ContaProps = {
  id?: number,
  email: string,
  nome: string,
  cpf?: string,
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

export type RegistroProps = {
  uuid: string
  idCarteira: number
  descricao: string
  valor: number
  competencia: Competencia
  modalidade: enumReg,
}

type enumReg = 'fixo' | 'variavel'

type Competencia = {
  mes: number,
  ano: number,
  dataInclusao: string
}

export type DespesaProps = RegistroProps & {
  parcelado?: boolean,
  numParcelas?: number,
  categoria: enumCategoriaDespesa
}

export type RendaProps = RegistroProps & {
  fonte: string,
  frequencia: enumFrequencia,
  categoria: enumCategoriaRenda
}

type enumFrequencia = 'mensal' | 'trimestral' | 'semestral' | 'anual'

type enumCategoriaRenda = 'salario' | 'investimento' | 'bonus' | 'outros'

export type enumCategoriaDespesa = 'alimentacao' | 'moradia' | 'lazer' | 'outros'


