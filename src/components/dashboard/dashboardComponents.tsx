import { formatCurrency } from "@/lib/utils"
import { ChevronDownCircle, CircleCheck, DollarSign } from "lucide-react"

type DashboardProps = {
  icon?: React.ReactNode
  children?: React.ReactNode
  month?: string
}

type DashboardResumeItemProps = DashboardProps & {
  dataTitle: string,
  dataValue: string
}

export function DashboardResumeWrapper({ children }: DashboardProps) {
  return (
    <div className="m-8 mt-4 mb-0">
      {children}
    </div>
  )
}

export function DashboardTitle({ month }: DashboardProps) {
  return (
    <div className="flex justify-between">
      <h1>
        <div className="flex gap-2 items-center">
          Resumo de <strong>{month}</strong>
          <ChevronDownCircle className="cursor-pointer" />
        </div>
      </h1>
      <div className="flex items-center gap-2">expandir <ChevronDownCircle className="cursor-pointer" /></div>
    </div>
  )
}

export function DashboardTotalWrapper({ children }: DashboardProps) {
  return (
    <section className="grid grid-cols-3 gap-2 mt-2">
      {children}
    </section>
  )
}

export function DashboardTotalItem({ icon, dataTitle, dataValue }: DashboardResumeItemProps) {
  const value = formatCurrency(dataValue)

  return (
    <div className="flex gap-2 items-center p-2 rounded-md bg-slate-300/60">
      <div className="h-4/5 aspect-square">
        {icon}
      </div>
      <div>
        <div className="text-md">{dataTitle}</div>
        <div><strong>{value}</strong></div>
      </div>
    </div>
  )
}

type DashboardResumeIconProps = {
  variant: "Renda" | "Despesa" | "Total"
}

export function DashboardTotalIcon({ variant }: DashboardResumeIconProps ) {
  const icon = {
    "Renda": <DollarSign className="h-full w-full text-green-400 bg-green-900/90 rounded-sm" />,
    "Despesa": <DollarSign className="h-full w-full text-red-400 bg-red-900/90 rounded-sm" />,
    "Total": <CircleCheck className="h-full w-full text-sky-400 bg-sky-900/90 rounded-sm" />
  }

  return (
    <div className="h-4/5 aspect-square">
      {icon[variant]}
    </div>
  )
}