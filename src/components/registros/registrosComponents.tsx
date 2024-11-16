import { Dialog, DialogTrigger } from "@/components/ui/dialog"

type RegistrosProps = {
  children: React.ReactNode;
}

export function RegistrosWrapper({ children }: Readonly<RegistrosProps>) {
  return (
    <div className="flex flex-1 flex-col">
      {children}
    </div>
  )
}

type RegistrosHeaderProps = {
  children: React.ReactNode;
  title: "Rendas" | "Despesas";
}

export function RegistrosHeader({ children,  title }: Readonly<RegistrosHeaderProps>) {
  return (
    <div className="flex justify-between ">
      <strong>{title}</strong>
      <div className="flex gap-4">
        {children}
      </div>
    </div>
  )
}

export function RegistrosActionsWrapper({ children }: Readonly<RegistrosProps>) {
  return (
    <Dialog>
      <div className="flex gap-4">
        {children}
      </div>
    </Dialog>
  )
}

export function RegistrosActionContent({ children }: Readonly<RegistrosProps>) {
  return (
    <DialogTrigger className="bg-slate-100 rounded-md text-sm shadow-white shadow-sm p-3 pt-2 pb-2">
      {children}
    </DialogTrigger>
  )
}

export function RegistrosContentWrapper({ children }: Readonly<RegistrosProps>) {
  return (
    <div className="flex flex-1 mt-2 rounded-sm">
      {children}
    </div>
  )
}

export function RegistrosContentData({ children }: Readonly<RegistrosProps>) {
 return (
  <div className="flex flex-1 justify-center">
    {children}
  </div>
 )
}

export function RegistrosSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
        <div className="flex gap-4">
          <div className="w-20 h-8 bg-gray-200 rounded"></div>
          <div className="w-20 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
      </div>
      <div className="flex gap-4">
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
        <div className="w-20 h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}