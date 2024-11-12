import { WalletMinimal } from "lucide-react"

type WalletProps = {
  children?: React.ReactNode
}

export function WalletWrapper({ children }: WalletProps) {
  return (
    <div>
      <h1 className="flex items-center gap-2">
        <WalletMinimal />
        <div>
          minha <strong>carteira</strong>
        </div>
      </h1>
      {children}
    </div>
  )
}

export function WalletDataWrapper({ children }: WalletProps) {
  return (
    <section className="flex flex-1 m-2 gap-2">
      {children}
    </section>
  )
}

type WalletDataProps = WalletProps & {
  variant: "Renda" | "Despesa"
  dataTitle: string
}

export function WalletDataTitle({ dataTitle, variant = "Renda" }: WalletDataProps) {
  const title = {
    Renda: <h2 className="text-xl font-bold text-sky-700">{dataTitle}</h2>,
    Despesa: <h2 className="text-xl font-bold text-red-700">{dataTitle}</h2>,
  }
  return title[variant]
}

export function WalletDataItem({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex-1">
      {children}
    </section>
  )
}

export function WalletDataContent() {
  return (
    <div className="grid grid-cols-4 grid-rows-12 bg-slate-300/50 rounded-sm p-2">
      <div>Nome</div>
      <div>Data</div>
      <div>Valor</div>
      <div>Categoria</div>
    </div>
  )
}