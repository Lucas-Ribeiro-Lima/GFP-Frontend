import { formatCurrency } from "@/lib/utils"
import { ChevronDownCircle, CircleCheck, DollarSign } from "lucide-react"
import { Skeleton } from "../ui/skeleton"

type DashboardProps = {
  children?: React.ReactNode
}


export function DashboardResumeWrapper({ children }: Readonly<DashboardProps>) {
  return (
    <div className="m-8 mt-4 mb-0">
      {children}
    </div>
  )
}

type DashBoardTitleProps = {
  month?: string
}

export function DashboardTitle({ month }: Readonly<DashBoardTitleProps>) {
  return (
    <div className="flex justify-between">
      <h1>
        <div className="flex gap-2">
          Resumo de 
          <div className="flex gap-[1px] cursor-pointer hover:text-sky-500">
          <strong>{month}</strong>
            <ChevronDownCircle/>  
          </div>
        </div>
      </h1>
      <div className="flex items-center gap-2 cursor-pointer hover:text-sky-500">expandir <ChevronDownCircle/></div>
    </div>
  )
}

export function DashboardTotalWrapper({ children }: Readonly<DashboardProps>) {
  return (
    <section className="grid grid-cols-3 gap-2 mt-2">
      {children}
    </section>
  )
}

type DashboardResumeItemProps = DashboardProps & {
  icon?: React.ReactNode
  dataTitle: string,
  dataValue: string | number
}

export function DashboardTotalItem({ icon, dataTitle, dataValue }: Readonly<DashboardResumeItemProps>) {
  const value = formatCurrency(dataValue)

  return (
    <div className="flex gap-2 items-center p-2 rounded-md bg-slate-300/50 shadow-sm shadow-white">
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

export function DashboardTotalIcon({ variant }: Readonly<DashboardResumeIconProps> ) {
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

export function DashboardSkeleton() {
  return (
    <div className="m-8 mt-4 mb-0">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <Skeleton className="h-16 rounded-md">
        </Skeleton>
        <Skeleton className="h-16 rounded-md">
        </Skeleton>
        <Skeleton className="h-16 rounded-md">
        </Skeleton>
      </div>
    </div>
  )
}